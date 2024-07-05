<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { useReCaptcha } from 'vue-recaptcha-v3';

const { t } = useI18n();
const { subscribeToNewsletter } = subscriptionApi();
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
const isLoading = ref(false);
const isSuccessful = ref(false);
const isSubmitted = ref(false);
const requestError = ref(false);
const recaptchaError = ref(false);
const errorMessage = ref('');
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup
        .string()
        .email(t('design.contactForm.emailInvalid'))
        .required(t('design.contactForm.email')),
    }),
  ),
});
const [email, emailAttrs] = defineField('email');
const emailError = computed(() => {
  if (isSubmitted.value && errors.value.email) {
    return errors.value.email;
  }
  return '';
});

const sendEmail = handleSubmit(async () => {
  if (!email.value) {
    return;
  }
  isLoading.value = true;
  recaptchaError.value = false;
  requestError.value = false;
  await recaptchaLoaded();
  const token = await executeRecaptcha('submit');
  if (!token) {
    recaptchaError.value = true;
    return;
  }
  try {
    await subscribeToNewsletter(email.value);
    isSuccessful.value = true;
    email.value = '';
    setTimeout(() => {
      isSuccessful.value = false;
    }, 5000);
    isSubmitted.value = false;
  } catch (error: any) {
    if (error.data?.message === 'The email has already been taken.') {
      errorMessage.value = t('design.contactForm.alreadySubscribed');
      email.value = '';
      setTimeout(() => {
        errorMessage.value = '';
      }, 7000);
    } else {
      errorMessage.value = error.data?.message;
    }
  } finally {
    isSubmitted.value = false;
    isLoading.value = false;
  }
});
const handleSendEmail = async () => {
  isSubmitted.value = true;
  await sendEmail();
};
</script>

<template>
  <div class="blog-header-subscribe">
    <div :class="['subscribe', { 'subscribe--error': emailError }]">
      <div class="blog-input-wrapper">
        <input
          id="blog-subscribe"
          v-model="email"
          class="blog-input"
          type="text"
          name="email"
          :placeholder="$t('theblog.heading.email')"
          required
          autocomplete="on"
          v-bind="emailAttrs"
          @keyup.enter="handleSendEmail"
        />
      </div>
      <CommonShowMore
        class="blog-button"
        :text="$t('theblog.heading.subscribe')"
        :is-loading="isLoading"
        @on-click="handleSendEmail"
      />
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="emailError"
        class="error"
        :error-message="emailError"
      />
    </CommonTransitionError>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage"
        class="error"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
    <CommonTransitionError>
      <p v-if="isSuccessful" class="success">
        {{ $t("design.contactForm.successNewsletter") }}
      </p>
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.blog-header-subscribe {
  position: relative;
  padding: 0 0 24px 0;
}

.subscribe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid transparent;
}

.blog-input-wrapper {
  width: 100%;
  border-radius: 2px;
  background-color: white;
  border-bottom: 2px solid transparent;
}

.blog-input {
  width: 100%;
  padding: 7px 10px;
  border-radius: 2px;
  box-sizing: border-box;
  border: none;
  outline: none;
  color: #787878;
  font-size: 18px;
  font-weight: 400;
}

.subscribe--error .blog-input-wrapper {
  border-bottom: 2px solid var(--red-error);
}

.error {
  position: absolute;
  top: calc(100% - 16px);
  display: flex;
  gap: 15px;
  color: white;
  align-items: center;
  font-size: 15px;
}

.blog-input::placeholder {
  opacity: 0.5;
}

@media (min-width: 768px) {
  .subscribe {
    flex-direction: row;
    border-radius: 6px 6px 20px 6px;
    background-color: white;
    align-items: center;
    padding: 7px;
  }

  .blog-button {
    max-width: 180px;
  }

  .subscribe--error {
    border-bottom: 2px solid var(--red-error);
  }

  .subscribe--error .blog-input-wrapper {
    border-bottom: 2px solid transparent;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: #787878;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}
</style>
