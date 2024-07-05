<script setup lang="ts">
// Global Imports
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { useReCaptcha } from 'vue-recaptcha-v3';

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const localePath = useLocalePath();
const { sendContactForm } = subscriptionApi();
const route = useRoute();

// States
const isLoading = ref(false);
const isSuccessful = ref(false);
const requestError = ref(false);
const recaptchaError = ref(false);

const { t } = useI18n();
const { errors, defineField, handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup
        .string()
        .email(t('design.contactForm.emailInvalid'))
        .required(t('design.contactForm.email')),
      name: yup.string().required(t('design.contactForm.name')),
      comment: yup.string().required(t('design.contactForm.comment')),
      terms: yup
        .boolean()
        .oneOf([true], t('design.contactForm.terms'))
        .required(t('design.contactForm.terms')),
    }),
  ),
});

const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [comment, commentAttrs] = defineField('comment');
const [terms, termsAttrs] = defineField('terms');

const serviceName = computed(() => {
  const locale = route.path.split('/')[1];
  const routeWithoutLocale = route.path
    .replace(`/${locale}`, '')
    .replace('/', '');
  return routeWithoutLocale;
});

const submitForm = handleSubmit(async () => {
  if (!name.value || !email.value || !comment.value) {
    return;
  }
  recaptchaError.value = false;
  requestError.value = false;
  await recaptchaLoaded();
  const token = await executeRecaptcha('submit');
  if (!token) {
    recaptchaError.value = true;
    return;
  }
  const formData = {
    full_name: name.value,
    email: email.value,
    comment: comment.value,
    service_name: serviceName.value || '',
  };
  isLoading.value = true;
  try {
    const response = await sendContactForm(formData);
    if (response && response.status === 'success') {
      isSuccessful.value = true;
      setTimeout(() => {
        isSuccessful.value = false;
      }, 5000);
      resetForm({
        values: {
          name: '',
          email: '',
          comment: '',
          terms: false,
        },
        touched: {
          email: false,
          name: false,
          comment: false,
          terms: false,
        },
      });
    }
  } catch {
    requestError.value = true;
  } finally {
    isLoading.value = false;
  }
  isLoading.value = false;
});
</script>

<template>
  <form class="form">
    <div class="input-label">
      <input
        v-model="name"
        :class="['input', { 'input-error': errors.name }]"
        type="text"
        :placeholder="$t('design.contactForm.placeholderName')"
        :aria-label="$t('design.contactForm.name')"
        autocomplete="on"
        v-bind="nameAttrs"
        name="name"
      />
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errors.name"
          class="error"
          :error-message="errors.name"
        />
      </CommonTransitionError>
    </div>
    <div class="input-label">
      <input
        v-model="email"
        :class="['input', { 'input-error': errors.email }]"
        type="text"
        :aria-label="$t('design.contactForm.placeholderEmail')"
        name="email"
        v-bind="emailAttrs"
        :placeholder="$t('design.contactForm.placeholderEmail')"
      />
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errors.email"
          class="error"
          :error-message="errors.email"
        />
      </CommonTransitionError>
    </div>
    <div class="input-label">
      <textarea
        v-model="comment"
        :class="['textarea', { 'textarea-error': errors.comment }]"
        name="message"
        rows="1"
        cols="1"
        type="text"
        v-bind="commentAttrs"
        :placeholder="$t('design.contactForm.placeholderComment')"
      ></textarea>
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errors.comment"
          class="error"
          :error-message="errors.comment"
        />
      </CommonTransitionError>
    </div>
    <div class="terms-conditions-container">
      <label for="terms" class="terms-conditions">
        <input
          id="terms"
          v-model="terms"
          type="checkbox"
          v-bind="termsAttrs"
          class="terms-conditions__checkbox"
        />
        <p class="terms">
          {{ $t("design.contactForm.conditions") }}
          <NuxtLink
            target="_blank"
            :to="localePath($t('design.contactForm.conditionsPath'))"
            class="conditions"
          >
            {{ $t("design.contactForm.conditionsLink") }}
          </NuxtLink>
          {{ $t("design.contactForm.conditions_1") }}
        </p>
      </label>
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="errors.terms"
          class="error"
          :error-message="errors.terms"
        />
      </CommonTransitionError>
    </div>
    <div class="contact-send">
      <CommonShowMore
        :text="$t('design.contactForm.sendRequest')"
        :padding="'16px'"
        :is-loading="isLoading"
        @click="submitForm"
      />
      <CommonTransitionError>
        <p v-if="isSuccessful" class="success">
          {{ $t("design.contactForm.successMessage") }}
        </p>
      </CommonTransitionError>
    </div>
    <div v-if="requestError || recaptchaError" class="request-error">
      <IconsGeneralError />
      <p>
        {{ $t("design.contactForm.errorMessage_1") }}
        <br />
        {{ $t("design.contactForm.errorMessage_2") }}
        <a
          class="request-error__link"
          href="mailto:info@propaganda-solutions.com"
        >
          info@propaganda-solutions.com
        </a>
      </p>
    </div>
  </form>
</template>

<style scoped>
.form {
  background-color: var(--primary-white);
  padding: 30px 25px 80px 25px;
  border-radius: 16px 16px 0px 0px;
  margin-top: 40px;
  width: 100%;
  color: #000;
}

.input,
.textarea {
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  border-radius: 9px;
  border: 1px solid #e4e4e7;
  padding: 16px 20px;
  color: #52525b;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
}
.textarea {
  max-width: 100%;
  min-width: 100%;
}

.input:focus,
.textarea:focus {
  outline: none;
  background-color: transparent !important;
}

.input-error,
.textarea-error {
  border-bottom: 1px solid var(--red-error);
}

.error {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 0 0 0;
  color: #000;
  font-size: 14px;
}

.input-label {
  margin-bottom: 20px;
}

.input::placeholder,
.textarea::placeholder {
  color: #52525b;
  font-size: 14px;
}

.terms-conditions-container {
  padding-bottom: 43px;
}

.terms-conditions {
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.terms {
  color: #000;
  font-size: 14px;
}

.conditions {
  color: var(--primary-blue);
}

.terms-conditions__checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.request-error {
  padding-top: 20px;
  display: flex;
  gap: 8px;
}

.request-error__link {
  color: var(--primary-blue);
}

.contact-send {
  position: relative;
}

.success {
  position: absolute;
  font-size: 14px;
  padding-top: 20px;
  color: var(--secondary-dark-blue);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  color: #52525b;
  font-family: Source Sans 3;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
}

@media (min-width: 1500px) {
  .form {
    min-width: 681px;
  }
}
</style>
