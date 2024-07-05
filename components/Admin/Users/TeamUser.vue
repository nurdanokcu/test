<script setup lang="ts">
import { type TypeUser } from '~/types/user';

const { deleteUser } = userManagementApi();
const { users } = useUsers();
const { user } = useAuth();

const props = defineProps({
  userItem: {
    type: Object as PropType<TypeUser>,
    required: true,
  },
});

const errorMessage = ref('');
const isLoading = ref(false);
const isNotificationVisible = ref(false);

const toggleNotification = () => {
  isNotificationVisible.value = !isNotificationVisible.value;
};

const handleDeleteUser = async () => {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    await deleteUser(props.userItem.id);
    users.value = users.value.filter(user => user.id !== props.userItem.id);
    isLoading.value = false;
    isNotificationVisible.value = false;
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
  <li class="user">
    <div class="user-left">
      <IconsMenuOpen
        v-if="user && user.id !== userItem.id"
        class="menu-icon"
        color="rgba(50, 50, 50, 0.2)"
      />
      <div v-else class="menu-icon"></div>
      <div class="user-content">
        <p class="user-position">
          {{ userItem.position }}
        </p>
        <p class="user-name">
          {{ userItem.name }}
        </p>
        <NuxtLink
          :to="`mailto:${userItem.email}`"
          aria-label="Email"
          class="user-email"
        >
          {{ userItem.email }}
        </NuxtLink>
      </div>
    </div>
    <div class="user-right">
      <CommonTransitionError>
        <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
      </CommonTransitionError>
      <button
        v-if="user && user.id !== userItem.id"
        type="button"
        :aria-label="$t('admin.manageUser.delete')"
        :title="$t('admin.manageUser.delete')"
        class="user-delete"
        @click="toggleNotification"
      >
        <IconsGeneralDeleteSweep class="delete-icon" />
      </button>
      <CommonPopup v-if="isNotificationVisible">
        <SettingsNotification :text="$t('admin.manageUser.notificationTitle')">
          <div class="notification-user">
            <div class="user-content">
              <p class="user-position">
                {{ userItem.position }}
              </p>
              <p class="user-name">
                {{ userItem.name }}
              </p>
              <NuxtLink
                :to="`mailto:${userItem.email}`"
                aria-label="Email"
                class="user-email"
              >
                {{ userItem.email }}
              </NuxtLink>
            </div>
            <p class="user-role">
              {{ userItem.role }}
            </p>
          </div>
          <div class="notification-buttons">
            <SettingsBackButton @on-click="toggleNotification" />
            <button
              type="button"
              :class="[
                'notification-delete',
                { 'notification-delete--disabled': isLoading },
              ]"
              :disabled="isLoading"
              :aria-label="$t('admin.manageUser.delete')"
              :title="$t('admin.manageUser.delete')"
              @click="handleDeleteUser"
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
  </li>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}

.user--disabled {
  opacity: 0.5;
}

.user-left {
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-content {
  padding: 4px 0;
}

.menu-icon {
  width: 24px;
  height: 24px;
  opacity: 0.3;
}

.user-position {
  color: rgba(0, 11, 88, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.user-name {
  color: var(--secondary-dark-blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.user-email {
  color: var(--Blue-2, #000b58);
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

.user-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  flex-shrink: 0;
  padding: 0 4px;
  min-height: 70px;
  background-color: rgba(221, 61, 12, 0.2);
  transition: all 0.2s ease;
}

.user-delete:hover {
  background-color: rgba(221, 61, 12, 0.35);
}

.user-delete:active {
  background-color: rgba(221, 61, 12, 0.5);
}

.delete-icon {
  width: 24px;
  height: 24px;
}

.notification {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
}

.notification-title {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.notification-user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
}

.user-role {
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

.notification-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
}

.notification-delete {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--secondary-orange-dark);
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: all 0.2s ease;
}
.notification-delete:hover {
  background: var(--red-error);
}
.notification-delete--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
