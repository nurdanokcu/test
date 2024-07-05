<script setup lang="ts">
import { type TypeDropdownOption } from '~/types/privateBlog';

const { t } = useI18n();
const { updateUserInfo } = userManagementApi();
const { user } = useAuth();
const { users } = useUsers();
const positionOptions: TypeDropdownOption[] = [
  {
    id: 1,
    name: 'Product Designer',
  },
  {
    id: 2,
    name: 'Developer',
  },
  {
    id: 3,
    name: 'CTO',
  },
  {
    id: 4,
    name: 'Human Resources',
  },
  {
    id: 5,
    name: 'Digital Marketer/Analyst',
  },
  {
    id: 6,
    name: 'Other',
  },
];
const initialPosition = computed(() => {
  return (
    positionOptions.find(option => option.name === user.value?.position) || {
      id: 0,
      name: '',
    }
  );
});

const position = ref(initialPosition.value);
const errorMessage = ref('');
const isLoading = ref(false);
const isSuccess = ref(false);

const isPositionChanged = computed(() => {
  if (!user.value?.position) {
    return false;
  }
  return position.value.name !== user.value?.position;
});

const selectPosition = (option: TypeDropdownOption) => {
  position.value = option;
};

const handleNewPosition = async () => {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    await updateUserInfo(
      {
        position: position.value.name,
        role: user.value?.role || 'admin',
      },
      user.value?.id || 0,
    );
    isLoading.value = false;
    isSuccess.value = true;
    if (user.value) {
      user.value.position = position.value.name;
    }
    users.value = users.value.map((teamMember) => {
      if (teamMember.id === user.value?.id) {
        teamMember.position = position.value.name;
      }
      return teamMember;
    });
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
};
</script>

<template>
  <div>
    <label class="name-label">
      {{ $t("admin.manageUser.position") }}
    </label>
    <AdminDropdown
      :options="positionOptions"
      :selected-option="position"
      :placeholder="$t('admin.manageUser.position')"
      @on-select="selectPosition"
    >
      <CommonTransitionFade>
        <button
          v-if="isPositionChanged"
          type="button"
          :aria-label="$t('admin.settings.save')"
          :title="$t('admin.settings.save')"
          :disabled="isLoading"
          :class="['save-button', { 'save-button--loading': isLoading }]"
          @click="handleNewPosition"
        >
          <IconsLoading v-if="isLoading" />
          <IconsAdminCheck v-else />
        </button>
      </CommonTransitionFade>
    </AdminDropdown>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage"
        class="name-error"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
    <CommonTransitionError>
      <SettingsSuccessMessage
        v-if="isSuccess"
        class="name-success"
        :message="$t('admin.settings.positionSuccess')"
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

.save-button--loading {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
