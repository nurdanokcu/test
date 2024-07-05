<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'settings',
});
useHead({
  title: 'User Settings - Propaganda Solutions',
});
const route = useRoute();
const localePath = useLocalePath();
if (route.path === '/admin') {
  navigateTo(localePath('/admin/user-settings'));
}
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
