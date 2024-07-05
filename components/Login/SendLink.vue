<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { sendConfirmationLink } = userManagementApi();
const { t } = useI18n();
const isLoading = ref(false);
const errorMessage = ref('');
const isSubmitted = ref(false);

const emits = defineEmits(['onLinkSent']);

const { errors, defineField, handleSubmit } = useForm({
  initialValues: {
    email: '',
  },
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
  if (isSubmitted.value) {
    return errors.value.email || '';
  } else {
    return '';
  }
});

const sendLink = handleSubmit(async () => {
  if (!email.value) {
    errorMessage.value = t('design.contactForm.email');
    return;
  }
  isLoading.value = true;
  try {
    await sendConfirmationLink(email.value);
    emits('onLinkSent');
  } catch (error: any) {
    errorMessage.value = error.data?.message || error.message;
  } finally {
    isLoading.value = false;
  }
});
const handleSendLink = async () => {
  isSubmitted.value = true;
  await sendLink();
};
</script>

<template>
  <div class="modal-email">
    <label class="modal-email-label" for="forgot-password-email">
      {{ $t("admin.manageUser.enterEmail") }}
    </label>
    <AdminInput
      v-model="email"
      class="modal-email-input"
      type="email"
      :name="'email'"
      :input-id="'forgot-password-email'"
      placeholder="email@propaganda-solutions.com"
      :error-message="emailError"
      v-bind="emailAttrs"
    />
    <CommonButtonGradientBorder
      :text="$t('admin.login.sendLink')"
      :is-loading="isLoading"
      :border-radius="'2px 2px 16px 2px'"
      :font-options="{
        size: '16px',
        weight: '700',
        style: 'normal',
        lineHeight: 'normal',
        textTransform: 'uppercase',
      }"
      @on-click="handleSendLink"
    >
      <template #icon>
        <IconsGeneralArrow color="white" />
      </template>
      <template #icon-gradient>
        <IconsLoading v-if="isLoading" />
        <IconsGeneralArrow v-else :is-gradient="true" />
      </template>
    </CommonButtonGradientBorder>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage"
        class="password-error"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.modal-email {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.modal-email-label {
  color: var(--secondary-dark-blue, #000b58);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.modal-email-input {
  margin-bottom: 20px;
}
</style>
