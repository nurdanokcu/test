<script setup lang="ts">
import { PSLogoColorNoText } from '~/assets/images/logo';

definePageMeta({
  layout: false,
  middleware: ['login'],
});
useHead({
  title: 'Login - Propaganda Solutions',
});
const localePath = useLocalePath();
</script>

<template>
  <main>
    <div class="login login--desktop">
      <div class="login__left left">
        <NuxtLink
          class="back-link"
          aria-label="Go Back"
          :to="localePath('/')"
        >
          <IconsGeneralArrow direction="left" color="white" />
          {{ $t("admin.login.back") }}
        </NuxtLink>
        <div
          :style="{
            backgroundImage: `url(${PSLogoColorNoText})`,
          }"
          class="left-content"
        >
          <div>
            <h1 class="left-content__title">
              {{ $t("admin.login.title") }}
            </h1>
            <p class="left-content__text">
              {{ $t("admin.login.text") }}
            </p>
          </div>
        </div>
      </div>
      <div class="login__right">
        <LoginModal />
      </div>
    </div>
    <div class="login--mobile">
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
  </main>
</template>

<style scoped>
.login--mobile {
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gradient-logo);
  padding: 16px;
  border-radius: 8px;
}
.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
}

.login--desktop {
  display: none;
}

.login__left,
.login__right {
  min-height: 100vh;
  width: 50%;
  height: 100%;
}

.login__left {
  background: var(--gradient-logo);
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: #fff;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.left-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 106px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.left-content__title {
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.left-content__text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.login__right {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    linear-gradient(
      101deg,
      rgba(36, 0, 255, 0.3) 0%,
      rgba(247, 127, 0, 0.3) 100%
    ),
    url("~/assets/images/admin/login.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 1000px) {
  .login--mobile {
    display: none;
  }

  .login--desktop {
    display: flex;
    display: flex;
    width: 100%;
  }
}
</style>
