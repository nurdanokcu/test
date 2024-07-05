<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'settings',
});
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: 'User Settings - Propaganda Solutions',
  meta: [
    {
      property: 'og:title',
      content: 'User Settings - Propaganda Solutions',
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: 'User Settings - Propaganda Solutions',
      tagPriority: 0,
    },
    ...head.value.meta.map((meta: any) => ({
      ...meta,
      tagPriority: 0,
    })),
  ],
  link: head.value.link.map((link: any) => ({
    ...link,
    tagPriority: 0,
  })),
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
