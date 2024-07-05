<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { t } = useI18n();
const { updateUserInfo } = userManagementApi();
const { user } = useAuth();
const { users } = useUsers();

const errorMessage = ref('');
const isLoading = ref(false);
const isSuccessName = ref(false);
const isNotificationVisible = ref(false);

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
const [emailQuery, emailAttrs] = defineField('email');
emailQuery.value = user.value?.email || '';
// Computed Properties
const isEmailChanged = computed(() => {
  if (!emailQuery.value) {
    return false;
  }
  return emailQuery.value.trim() !== user.value?.email;
});

// Functions

const handleNotification = () => {
  if (isEmailChanged.value) {
    isNotificationVisible.value = true;
  }
};

const closeNotification = () => {
  isNotificationVisible.value = false;
  emailQuery.value = user.value?.email || '';
};

const handleNewEmail = handleSubmit(async () => {
  errorMessage.value = '';
  if (!emailQuery.value) {
    return;
  }
  isLoading.value = true;
  try {
    await updateUserInfo(
      {
        email: emailQuery.value,
        role: user.value?.role || 'admin',
      },
      user.value?.id || 0,
    );
    isLoading.value = false;
    isSuccessName.value = true;
    isNotificationVisible.value = false;
    if (user.value && emailQuery.value) {
      user.value.email = emailQuery.value;
    }
    users.value = users.value.map((teamMember) => {
      if (teamMember.id === user.value?.id) {
        if (emailQuery.value) {
          teamMember.email = emailQuery.value;
        }
      }
      return teamMember;
    });
    setTimeout(() => {
      isSuccessName.value = false;
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

watch(
  () => emailQuery.value,
  () => {
    errorMessage.value = '';
    isSuccessName.value = false;
  },
);
</script>

<template>
  <div>
    <label class="email-label" for="settings-user-email"> E-mail </label>
    <AdminInput
      v-model="emailQuery"
      class="name-input"
      :input-id="'settings-user-email'"
      :type="'text'"
      :name="'email'"
      v-bind="emailAttrs"
      :placeholder="$t('admin.manageUser.enterEmail')"
      @on-submit="handleNotification"
    >
      <CommonTransitionFade>
        <button
          v-if="isEmailChanged"
          type="button"
          :aria-label="$t('admin.settings.save')"
          :title="$t('admin.settings.save')"
          :disabled="isLoading"
          :class="['save-button', { 'save-button--loading': isLoading }]"
          @click="handleNotification"
        >
          <IconsLoading v-if="isLoading" />
          <IconsAdminCheck v-else />
        </button>
      </CommonTransitionFade>
    </AdminInput>
    <CommonPopup v-if="isNotificationVisible">
      <SettingsNotification
        :error-message="errorMessage"
        :text="$t('admin.settings.emailNotification')"
      >
        <div class="notification-current">
          <p class="notification-subtitle">
            {{ $t("admin.settings.current") }}
          </p>
          <p class="notification-email">
            {{ user?.email }}
          </p>
        </div>
        <div class="notification-current">
          <p class="notification-subtitle">
            {{ $t("admin.settings.new") }}
          </p>
          <AdminInput
            v-model="emailQuery"
            class="name-input"
            :input-id="'settings-user-email'"
            :type="'text'"
            :name="'email'"
            :placeholder="$t('admin.manageUser.enterEmail')"
            :error-message="errors.email"
            @on-submit="handleNewEmail"
          />
        </div>
        <div class="notification-buttons">
          <SettingsBackButton @on-click="closeNotification" />
          <button
            type="button"
            :class="[
              'notification-save',
              { 'notification-save--disabled': isLoading },
            ]"
            :disabled="isLoading"
            :aria-label="$t('admin.settings.save')"
            :title="$t('admin.settings.save')"
            @click="handleNewEmail"
          >
            <span v-if="isLoading">
              {{ $t("admin.settings.saving") }}
            </span>
            <span v-else>
              {{ $t("admin.settings.save") }}
            </span>
            <IconsLoading v-if="isLoading" color="white" />
            <IconsAdminSaveAlt v-else color="white" />
          </button>
        </div>
      </SettingsNotification>
    </CommonPopup>
    <CommonTransitionError>
      <p v-if="isSuccessName" class="name-success">
        <IconsAdminCheck color="#3a9f44" />
        {{ $t("admin.settings.emailSuccess") }}
      </p>
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.email-label {
  display: block;
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

.name-error,
.name-success {
  margin: 0 0 0 auto;
  width: fit-content;
}

.name-success {
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

.notification-current {
  width: 100%;
}

.notification-subtitle {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.notification-email {
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

.notification-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
}

.notification-save {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--primary-green);
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.notification-save:hover {
  background: var(--primary-green-hover);
}

.notification-save--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
