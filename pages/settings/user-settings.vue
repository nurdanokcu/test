<script setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="settings">
    <NuxtLink
      type="button"
      class="close-button"
      aria-label="Close"
      :to="localePath('/admin/dashboard')"
    >
      <IconsMenuClose class="close-icon" />
    </NuxtLink>
    <div class="settings-content">
      <div class="settings-inputs">
        <SettingsDisplayName />
        <SettingsPosition />
        <SettingsEmail />
      </div>
      <SettingsDeleteAccount />
    </div>
  </div>
</template>

<style scoped>
.settings {
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
.settings-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.settings-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 80px;
}
</style>
