<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { changePassword } = userManagementApi();
const { t } = useI18n();
const isLoading = ref(false);
const errorMessage = ref('');
const isSubmitted = ref(false);
const isNewPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const isSuccess = ref(false);

const emits = defineEmits(['onSuccess']);

// Validations
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      password: yup
        .string()
        .required(t('admin.settings.newPasswordRequired'))
        .min(8, t('admin.settings.passwordShort'))
        .max(20, t('admin.settings.passwordLong'))
        .matches(/\S/, t('admin.settings.passwordSpace')),
      password_confirmation: yup
        .string()
        .required(t('admin.settings.confirmPasswordRequired'))
        .oneOf([yup.ref('password')], t('admin.settings.passwordsMatch')),
    }),
  ),
});
const [password, passwordAttrs] = defineField('password');
const [passwordConfirmation, passwordConfirmationAttrs] = defineField(
  'password_confirmation',
);
password.value = '';
passwordConfirmation.value = '';

const errorPassword = computed(() => {
  if (isSubmitted.value) {
    return errors.value.password || '';
  } else {
    return '';
  }
});
const errorPasswordConfirmation = computed(() => {
  if (isSubmitted.value) {
    return errors.value.password_confirmation || '';
  } else {
    return '';
  }
});

const toggleNewPasswordVisibility = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value;
};
const toggleConfirmPasswordVisibility = () => {
  isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value;
};

const handleChangePassword = handleSubmit(async () => {
  if (!password.value || !passwordConfirmation.value) {
    errorMessage.value = t('admin.login.passwordRequired');
    return;
  }
  errorMessage.value = '';
  isLoading.value = true;
  try {
    await changePassword({
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    });
    isLoading.value = false;
    isSuccess.value = true;
    password.value = '';
    passwordConfirmation.value = '';
    setTimeout(() => {
      isSuccess.value = false;
      emits('onSuccess');
    }, 3000);
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = t('admin.login.serverError');
      return;
    }
    errorMessage.value = error.data?.message;
  }
});
const handleClickSubmit = async () => {
  isSubmitted.value = true;
  await handleChangePassword();
};
</script>

<template>
  <form class="inputs" @submit.prevent="handleClickSubmit">
    <div class="inputs-section">
      <label class="password-label" for="new-password-login">
        {{ $t("admin.settings.newlabel") }}
      </label>
      <AdminInput
        v-model="password"
        class="password-input"
        :input-id="'new-password-login'"
        :type="isNewPasswordVisible ? 'text' : 'password'"
        :placeholder="$t('admin.settings.newPassword')"
        :is-password-input="true"
        :is-eye-visible="isNewPasswordVisible"
        v-bind="passwordAttrs"
        :error-message="errorPassword"
        @on-toggle-visibility="toggleNewPasswordVisibility"
      />
    </div>
    <div class="inputs-section">
      <label class="password-label" for="confirm-password-login">
        {{ $t("admin.settings.confirmLabel") }}
      </label>
      <AdminInput
        v-model="passwordConfirmation"
        class="password-input"
        :input-id="'confirm-password-login'"
        :type="isConfirmPasswordVisible ? 'text' : 'password'"
        :placeholder="$t('admin.settings.confirmPassword')"
        :is-password-input="true"
        :is-eye-visible="isConfirmPasswordVisible"
        v-bind="passwordConfirmationAttrs"
        :error-message="errorPasswordConfirmation"
        @on-toggle-visibility="toggleConfirmPasswordVisibility"
      />
    </div>
    <div class="inputs-section">
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
        @on-click="handleClickSubmit"
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
      <CommonTransitionError>
        <p v-if="isSuccess" class="password-success">
          <IconsAdminCheck color="#3a9f44" />
          {{ $t("admin.settings.passwordChanged") }}
        </p>
      </CommonTransitionError>
    </div>
  </form>
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

.inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 36px;
}
.inputs-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.password-label {
  color: var(--secondary-dark-blue, #000b58);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>
