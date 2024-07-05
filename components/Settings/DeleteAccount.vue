<script setup lang="ts">
const isNotificationVisible = ref(false);
const errorMessage = ref('');
const isLoading = ref(false);
const { user, isAuthenticated } = useAuth();
const { deleteUser } = userManagementApi();
const localePath = useLocalePath();

const toggleNotification = () => {
  isNotificationVisible.value = !isNotificationVisible.value;
};
const handleDeleteAccount = async () => {
  errorMessage.value = '';
  isLoading.value = true;
  if (!user.value) {
    return;
  }
  try {
    await deleteUser(user.value.id);
    user.value = null;
    isAuthenticated.value = false;
    const token = useCookie('ps-auth');
    token.value = null;
    isLoading.value = false;
    isNotificationVisible.value = false;
    return navigateTo(localePath('/'));
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
</script>

<template>
  <div>
    <button
      type="button"
      class="notification-delete notification-delete--outlined"
      :aria-label="$t('admin.settings.delete')"
      :title="$t('admin.settings.delete')"
      @click="toggleNotification"
    >
      <span>
        {{ $t("admin.settings.delete") }}
      </span>
      <IconsGeneralDelete color="var(--secondary-orange-dark)" />
    </button>
    <CommonPopup v-if="isNotificationVisible">
      <SettingsNotification
        :error-message="errorMessage"
        :text="$t('admin.settings.deleteNotification')"
      >
        <div class="notification-buttons">
          <SettingsBackButton @on-click="toggleNotification" />
          <button
            type="button"
            :class="[
              'notification-delete notification-delete--filled',
              { 'notification-delete--disabled': isLoading },
            ]"
            :disabled="isLoading"
            :aria-label="$t('admin.manageUser.delete')"
            :title="$t('admin.manageUser.delete')"
            @click="handleDeleteAccount"
          >
            <span v-if="isLoading">
              {{ $t("admin.manageUser.deleting") }}
            </span>
            <span v-else>
              {{ $t("admin.manageUser.delete") }}
            </span>
            <IconsLoading v-if="isLoading" color="white" />
            <IconsGeneralDelete v-else color="white" />
          </button>
        </div>
      </SettingsNotification>
    </CommonPopup>
  </div>
</template>

<style scoped>
.notification-delete {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-left: auto;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: all 0.2s ease;
}
.notification-delete--outlined {
  border: 2px solid var(--secondary-orange-dark);
  color: var(--secondary-orange-dark);
  max-width: 274px;
}
.notification-delete--outlined:hover {
  background: var(--primary-white-hover);
}
.notification-delete--filled {
  background: var(--secondary-orange-dark);
  color: white;
}
.notification-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}
.notification-delete--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
