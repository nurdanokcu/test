<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { t } = useI18n();
const { updateUserInfo } = userManagementApi();
const { user } = useAuth();
const { users } = useUsers();
const errorMessageName = ref('');
const isLoadingName = ref(false);
const isSuccessName = ref(false);

// Computed Properties
const isNameChanged = computed(() => {
  if (!name.value) {
    return false;
  }
  return name.value.trim() !== user.value?.name;
});

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      name: yup.string().required(t('admin.settings.displayNameRequired')),
    }),
  ),
});
const [name, nameAttrs] = defineField('name');
name.value = user.value?.name || '';

const handleNewName = handleSubmit(async () => {
  if (!name.value) {
    isLoadingName.value = false;
    return;
  }
  errorMessageName.value = '';
  if (!isNameChanged.value) {
    return;
  }

  isLoadingName.value = true;
  try {
    await updateUserInfo(
      {
        name: name.value.trim(),
        role: user.value?.role || 'admin',
      },
      user.value?.id || 0,
    );
    isLoadingName.value = false;
    isSuccessName.value = true;
    if (name.value && user.value) {
      user.value.name = name.value.trim();
    }
    users.value = users.value.map((teamMember) => {
      if (teamMember.id === user.value?.id) {
        if (name.value) {
          teamMember.name = name.value.trim();
        }
      }
      return teamMember;
    });
    setTimeout(() => {
      isSuccessName.value = false;
    }, 3000);
  } catch (error: any) {
    isLoadingName.value = false;
    if (error.statusCode === 500) {
      errorMessageName.value = t('admin.login.serverError');
      return;
    }
    errorMessageName.value = error.data?.message;
  }
});
</script>

<template>
  <div>
    <label class="name-label" for="settings-user-name">
      {{ $t("admin.settings.displayName") }}
    </label>
    <AdminInput
      v-model="name"
      class="name-input"
      :input-id="'settings-user-name'"
      :type="'text'"
      :name="'name'"
      :placeholder="$t('admin.manageUser.enterName')"
      :error-message="errors.name"
      v-bind="nameAttrs"
      @on-submit="handleNewName"
    >
      <CommonTransitionFade>
        <button
          v-if="isNameChanged"
          type="button"
          :aria-label="$t('admin.settings.save')"
          :title="$t('admin.settings.save')"
          :disabled="isLoadingName"
          :class="['save-button', { 'save-button--loading': isLoadingName }]"
          @click="handleNewName"
        >
          <IconsLoading v-if="isLoadingName" />
          <IconsAdminCheck v-else />
        </button>
      </CommonTransitionFade>
    </AdminInput>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessageName"
        class="name-error"
        :error-message="errorMessageName"
      />
    </CommonTransitionError>
    <CommonTransitionError>
      <SettingsSuccessMessage
        v-if="isSuccessName"
        class="name-success"
        :message="$t('admin.settings.nameSuccess')"
      />
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.name-label {
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
  margin: 8px 0 0 auto;
  width: fit-content;
}
</style>
