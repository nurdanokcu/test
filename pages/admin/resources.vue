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
  title: 'Resources- Propaganda Solutions',
  meta: [
    {
      property: 'og:title',
      content: 'Resources- Propaganda Solutions',
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: 'Resources- Propaganda Solutions',
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
const isResourcesPage = computed(() => {
  const regex = /^\/(en|de)\/admin\/resources\/?$/;
  return regex.test(route.path);
});
</script>

<template>
  <div class="resources">
    <div v-if="isResourcesPage" class="resources-page">
      <div class="resources-page-section">
        <AdminResourcesBlogs />
      </div>
      <div class="resources-page-section">
        <AdminResourcesMediaArticles />
      </div>
      <div class="resources-page-section">
        <AdminResourcesEducational />
        <AdminResourcesPodCasts />
      </div>
    </div>
    <NuxtPage v-else />
  </div>
</template>

<style scoped>
.resources-page {
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  height: 100%;
  width: 100%;
  padding: 24px;
}
.resources-page-section {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(33% - 16px);
}
</style>
