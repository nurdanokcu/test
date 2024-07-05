<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'admin',
});
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: 'Admin - Propaganda Solutions',
  meta: [
    {
      property: 'og:title',
      content: 'Admin - Propaganda Solutions',
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: 'Admin - Propaganda Solutions',
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
if (route.path.endsWith('/admin')) {
  navigateTo(localePath('/admin/dashboard'));
}
</script>

<template>
  <main class="blog-main">
    <NuxtPage />
  </main>
</template>
