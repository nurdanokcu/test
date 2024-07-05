<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { t } = useI18n();
const localePath = useLocalePath();
const { updateUserInfo } = userManagementApi();
const { user } = useAuth();

const isNewPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const errorMessage = ref('');
const isLoading = ref(false);
const isSuccess = ref(false);

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

const toggleNewPasswordVisibility = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value;
};
const toggleConfirmPasswordVisibility = () => {
  isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value;
};

const handleChangePassword = handleSubmit(async () => {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    await updateUserInfo(
      {
        password: password.value,
        password_confirmation: passwordConfirmation.value,
        role: user.value?.role || 'admin',
      },
      user.value?.id || 0,
    );
    isLoading.value = false;
    isSuccess.value = true;
    password.value = '';
    passwordConfirmation.value = '';
    setTimeout(() => {
      isSuccess.value = false;
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
</script>

<template>
  <div class="password">
    <NuxtLink
      type="button"
      class="close-button"
      aria-label="Close"
      :to="localePath('/admin/dashboard')"
    >
      <IconsMenuClose class="close-icon" />
    </NuxtLink>
    <form class="password-inputs" @submit.prevent="handleChangePassword">
      <label class="password-label" for="new-password">
        {{ $t("admin.settings.newlabel") }}
      </label>
      <AdminInput
        v-model="password"
        class="password-input"
        :input-id="'new-password'"
        :type="isNewPasswordVisible ? 'text' : 'password'"
        :placeholder="$t('admin.settings.newPassword')"
        :is-password-input="true"
        :is-eye-visible="isNewPasswordVisible"
        v-bind="passwordAttrs"
        :error-message="errors.password"
        @on-toggle-visibility="toggleNewPasswordVisibility"
      />
      <label class="password-label" for="confirm-password">
        {{ $t("admin.settings.confirmLabel") }}
      </label>
      <AdminInput
        v-model="passwordConfirmation"
        class="password-input"
        :input-id="'confirm-password'"
        :type="isConfirmPasswordVisible ? 'text' : 'password'"
        :placeholder="$t('admin.settings.confirmPassword')"
        :is-password-input="true"
        :is-eye-visible="isConfirmPasswordVisible"
        v-bind="passwordConfirmationAttrs"
        :error-message="errors.password_confirmation"
        @on-toggle-visibility="toggleConfirmPasswordVisibility"
      />
      <CommonButtonGradientFilled
        class="password-button"
        :text="$t('admin.settings.changePassword')"
        :padding="'16px'"
        :border-radius="'16px'"
        :is-loading="isLoading"
        @on-click="handleChangePassword"
      >
        <template #icon>
          <IconsLoading v-if="isLoading" color="white" />
          <IconsAdminSync v-else color="white" />
        </template>
        <template #icon-gradient>
          <IconsAdminSync :is-gradient="true" />
        </template>
      </CommonButtonGradientFilled>
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
    </form>
  </div>
</template>

<style scoped>
.password {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.close-button {
  margin-left: auto;
}
.close-icon {
  width: 24px;
  height: 24px;
}
.password-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.password-label {
  width: fit-content;
  margin-bottom: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.password-input {
  margin-bottom: 16px;
}
.password-button {
  margin-left: auto;
  width: 260px;
}
.password-error,
.password-success {
  margin: 16px 0 0 auto;
}
.password-success {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: #3a9f44;
}
</style>
