<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink
    class="back-link"
    :aria-label="$t('admin.resources.backToResources')"
    :to="localePath('/admin/resources')"
  >
    <span class="back-link-text">
      <IconsGeneralArrow :is-gradient="true" :direction="'left'" />
      {{ $t("admin.resources.backToResources") }}
    </span>
    <span class="back-link-line"></span>
  </NuxtLink>
</template>

<style scoped>
.back-link {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: fit-content;
}
.back-link-text {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
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
  transition: all 0.2s ease;
}
.back-link-line {
  width: 100%;
  height: 2px;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  transition: all 0.2s ease;
}
.back-link:hover .back-link-text {
  background: var(
    --gradient-logo-hover,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.back-link:hover .back-link-line {
  background: var(
    --gradient-logo-hover,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
}
</style>
