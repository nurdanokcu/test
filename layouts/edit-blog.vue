<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { PSLogoWhite } from '~/assets/images/logo';

const { user, isAuthenticated } = useAuth();
const { logout } = userApi();
const route = useRoute();
const localePath = useLocalePath();

const isSettingsMenuOpen = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

// Computed
const isUsersActive = computed(() => route.fullPath.includes('/admin/users'));
const initials = computed(() => {
  if (!user.value) {
    return '';
  }
  const name = user.value.name.split(' ');
  return name.length > 1
    ? name[0].charAt(0) + '.' + name[1].charAt(0)
    : name[0].charAt(0);
});

// Methods
const toggleSettingsMenu = () => {
  isSettingsMenuOpen.value = !isSettingsMenuOpen.value;
};
const closeMenu = () => {
  isSettingsMenuOpen.value = false;
};

const handleLogout = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    await logout();
    user.value = null;
    isAuthenticated.value = false;
    const token = useCookie('ps-auth');
    token.value = null;
    isLoading.value = false;
    isSettingsMenuOpen.value = false;
    return navigateTo(localePath('/login'));
  } catch (error: any) {
    errorMessage.value = error?.message;
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="admin">
    <div class="admin--desktop">
      <div class="admin-nav-wrapper">
        <nav class="admin-nav">
          <NuxtLink
            class="nav-logo-wrapper"
            :to="localePath('/admin/dashboard')"
          >
            <img
              class="nav-logo"
              :src="PSLogoWhite"
              alt="Propaganda Solutions"
            />
          </NuxtLink>
          <ul class="nav-list">
            <li class="nav-list-item">
              <AdminResourcesMenu :is-light-theme="true" />
            </li>
            <li class="nav-list-item">
              <NuxtLink
                v-if="user?.role === 'admin'"
                class="nav-link"
                :to="localePath('/admin/users')"
              >
                <span class="nav-link-text">
                  {{ $t("admin.manageUser.title") }}
                  <span
                    :class="[
                      'nav-link-line',
                      {
                        'nav-link-line--active': isUsersActive,
                      },
                    ]"
                  ></span>
                </span>
              </NuxtLink>
            </li>
          </ul>
          <div class="admin-right">
            <AdminLanguageSelector :is-dark-theme="true" />
            <div v-on-click-outside="closeMenu" class="user">
              <button
                id="user-settings"
                type="button"
                class="user-info-button"
                aria-label="User Settings"
                @click="toggleSettingsMenu"
              >
                <span class="user-avatar-wrapper">
                  <img
                    v-if="user?.profile_photo_url"
                    class="user-avatar"
                    :src="user?.profile_photo_url"
                    :alt="user?.name"
                  />
                  <span v-else class="img-placeholder">
                    {{ initials }}
                  </span>
                </span>
                <span class="user-info">
                  <span class="user-info-name">
                    {{ user?.name }}
                  </span>
                  <span class="user-info-position">
                    {{ user?.position }}
                  </span>
                </span>
                <IconsGeneralSettings :color="'#fff'" />
              </button>
              <CommonTransitionDropdown>
                <div v-if="isSettingsMenuOpen" class="user-settings">
                  <NuxtLink
                    class="user-setting"
                    aria-label="Go Back"
                    :to="localePath('/settings/user-settings')"
                  >
                    <span class="user-setting-text">
                      {{ $t("admin.settings.settings") }}
                    </span>
                  </NuxtLink>
                  <button
                    type="button"
                    :class="[
                      'user-setting',
                      { 'user-setting--disabled': isLoading },
                    ]"
                    :disabled="isLoading"
                    aria-label="Logout"
                    @click="handleLogout"
                  >
                    <IconsLoading
                      v-if="isLoading"
                      class="user-setting-icon"
                      color="var(--secondary-dark-blue)"
                    />
                    <span class="user-setting-text">
                      {{ $t("admin.settings.logout") }}
                    </span>
                  </button>
                </div>
              </CommonTransitionDropdown>
            </div>
          </div>
        </nav>
      </div>
      <div class="admin-content">
        <slot />
      </div>
    </div>
    <div class="admin--mobile">
      {{ $t("admin.login.notificationMobile") }}
      <div class="link-wrapper">
        <NuxtLink
          class="back-link"
          aria-label="Go Back"
          :to="localePath('/')"
        >
          <IconsGeneralArrow direction="left" />
          {{ $t("admin.login.back") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0;
  margin: 0;
}

.admin--desktop {
  display: none;
}

.admin--mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100vh;
  padding: 24px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  color: #000;
}

.link-wrapper {
  background: var(--gradient-logo);
  padding: 16px;
  border-radius: 8px;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-white);
}
.admin-right {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}
@media (min-width: 1200px) {
  .admin--desktop {
    display: block;
  }

  .admin--mobile {
    display: none;
  }
}

.admin-nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--secondary-dark-blue);
  height: var(--nav-top-height);
  z-index: 10;
}
.admin-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  max-width: 1800px;
  margin: 0 auto;
}
.admin-content {
  max-width: 1800px;
  margin: var(--nav-top-height) auto 0;
}

.nav-logo {
  width: 52px;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-link {
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 16px;
  height: 100%;
}

.nav-link:hover {
  color: var(--primary-white-hover);
}

.nav-link:active {
  background: var(--gradient-logo-hover);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-link-line {
  display: block;
  width: 0;
  height: 3px;
  background: #fff;
  transition: width 0.3s ease-in-out;
}
.nav-link-line--active {
  width: 100%;
}

.user {
  position: relative;
}

.user-info-button {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-avatar-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.user-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 16px;
  color: #fff;
}

.user-info-name {
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.user-info-position {
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

.img-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--secondary-dark-blue);
  background: var(--admin-page-white);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.user-settings {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  transform: translateY(8px);
  background: var(--secondary-dark-blue);
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 11;
  padding: 4px 0;
}

.user-setting {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-white);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  padding: 8px 16px;
}

.user-setting-icon {
  width: 16px;
  height: 16px;
}

.user-setting:hover .user-setting-text {
  color: var(--primary-white-hover);
}

.user-setting--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
