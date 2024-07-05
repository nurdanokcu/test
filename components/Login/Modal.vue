<script setup lang="ts">
// Global Imports
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

// Local Imports
const { login } = userApi();
const { user } = useAuth();
const { t } = useI18n();
const localePath = useLocalePath();

const isPasswordVisible = ref(false);
// const rememberMe = ref(false);
const isLoading = ref(false);
const submitError = ref('');
const isSubmitted = ref(false);

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup
        .string()
        .email(t('design.contactForm.emailInvalid'))
        .required(t('design.contactForm.email')),
      password: yup.string().required(t('admin.login.passwordRequired')),
    }),
  ),
});
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
email.value = '';
password.value = '';

const emailError = computed(() => {
  if (isSubmitted.value) {
    return errors.value.email;
  }
  return '';
});

const passwordError = computed(() => {
  if (isSubmitted.value) {
    return errors.value.password;
  }
  return '';
});

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const loginUser = handleSubmit(async () => {
  isLoading.value = true;
  if (!email.value || !password.value) {
    isLoading.value = false;
    return;
  }

  try {
    const response = await login({
      email: email.value,
      password: password.value,
    });
    user.value = response.data.user;
    const token = useCookie('ps-auth', {
      maxAge: 60 * 60 * 24 * 30,
    });
    token.value = response.data.token;
    isLoading.value = false;
    return navigateTo(localePath('/admin/dashboard'));
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 401) {
      submitError.value = t('admin.login.invalidCredentials');
      return;
    }
    if (error.statusCode === 500) {
      submitError.value = t('admin.login.serverError');
      return;
    }
    submitError.value = error.message;
  }
});

const handleLogin = async () => {
  isSubmitted.value = true;
  await loginUser();
};

watch([() => email.value, () => password.value], () => {
  submitError.value = '';
});
</script>

<template>
  <form class="login-modal">
    <h2 class="login-title">
      {{ $t("admin.login.login") }}
    </h2>
    <div class="login-inputs">
      <AdminInput
        v-model="email"
        :input-id="'login-email'"
        type="email"
        placeholder="email@propaganda-solutions.com"
        :error-message="emailError"
        v-bind="emailAttrs"
        @on-submit="handleLogin"
      />
      <AdminInput
        v-model="password"
        :input-id="'login-password'"
        :type="isPasswordVisible ? 'text' : 'password'"
        placeholder="**********"
        :is-password-input="true"
        :is-eye-visible="isPasswordVisible"
        :error-message="passwordError"
        v-bind="passwordAttrs"
        @on-submit="handleLogin"
        @on-toggle-visibility="togglePasswordVisibility"
      />
      <!-- <LoginCheckbox
        id="login-remember"
        v-model:checked="rememberMe"
        :aria-label="$t('admin.login.remember')"
      >
        <span class="checkbox-label">
          {{ $t("admin.login.remember") }}
        </span>
      </LoginCheckbox> -->
    </div>
    <div class="login-submit">
      <CommonButtonGradientBorder
        :text="$t('admin.login.login')"
        :is-loading="isLoading"
        :border-radius="'2px 2px 16px 2px'"
        :font-options="{
          size: '16px',
          weight: '700',
          style: 'normal',
          lineHeight: 'normal',
          textTransform: 'uppercase',
        }"
        @on-click="handleLogin"
      >
        <template #icon>
          <IconsGeneralArrow color="white" />
        </template>
        <template #icon-gradient>
          <IconsLoading v-if="isLoading" />
          <IconsGeneralArrow v-else :is-gradient="true" />
        </template>
      </CommonButtonGradientBorder>
      <!-- <LoginForgotPassword /> -->
      <CommonTransitionError>
        <CommonErrorMessage
          v-if="submitError !== ''"
          class="login-error"
          :error-message="submitError"
        />
      </CommonTransitionError>
    </div>
  </form>
</template>

<style scoped>
.login-modal {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 40px 48px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.85);
  width: 376px;
}

.login-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.checkbox-label {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.login-submit {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
