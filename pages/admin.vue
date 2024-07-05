<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'admin',
});
useHead({
  title: 'Admin - Propaganda Solutions',
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
