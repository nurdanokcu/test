<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();
const isPasswordChangeActive = computed(() =>
  route.fullPath.includes('/change-password'),
);
const isUserSettingsActive = computed(() =>
  route.fullPath.includes('/user-settings'),
);
</script>

<template>
  <div class="admin">
    <div class="admin--desktop">
      <nav class="nav">
        <ul class="nav-list">
          <li>
            <NuxtLink
              class="nav-link"
              :to="localePath('/settings/change-password')"
            >
              {{ $t("admin.settings.changePassword") }}
              <span
                :class="[
                  'nav-link-line',
                  {
                    'nav-link-line--active': isPasswordChangeActive,
                  },
                ]"
              >
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="nav-link"
              :to="localePath('/settings/user-settings')"
            >
              {{ $t("admin.settings.userSettings") }}
              <span
                :class="[
                  'nav-link-line',
                  {
                    'nav-link-line--active': isUserSettingsActive,
                  },
                ]"
              >
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <slot />
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
.admin {
  max-width: 1800px;
  margin: 0 auto;
  padding: 16px;
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

.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(
    112deg,
    rgba(36, 0, 255, 0.05) 0.23%,
    rgba(235, 111, 14, 0.05) 101.08%
  );
  min-height: calc(100vh - 32px);
}
.nav-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.nav-link {
  display: flex;
  flex-direction: column;
  color: var(--Blue-2, #000b58);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: fit-content;
}
.nav-link-line {
  display: block;
  width: 0;
  height: 3px;
  background: var(--gradient-logo);
  transition: width 0.3s ease-in-out;
}
.nav-link-line--active {
  width: 100%;
}
@media (min-width: 1200px) {
  .admin--desktop {
    display: flex;
    gap: 16px;
  }
  .admin--mobile {
    display: none;
  }
}
</style>
