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
  title: 'Dashboard - Propaganda Solutions',
  meta: [
    {
      property: 'og:title',
      content: 'Dashboard - Propaganda Solutions',
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: 'Dashboard - Propaganda Solutions',
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
</script>

<template>
  <div class="blogs">
    <div class="blogs-boxes">
      <div class="blogs-row">
        <AdminBlogsBestPost class="blog-row-item" />
        <AdminBlogsDrafts class="blog-row-item" />
      </div>
      <div class="blogs-row">
        <AdminBlogsLastPosts class="blog-row-item" />
        <AdminBlogsActionHistory class="blog-row-item" />
      </div>
    </div>
    <div class="blogs-section">
      <AdminBlogsScheduledPosts class="blogs-scheduled" />
    </div>
  </div>
</template>

<style scoped>
.blogs {
  display: flex;
  gap: 16px;
  height: 100%;
  width: 100%;
  padding: 24px;
}

.blogs-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(33% - 8px);
}
.blogs-boxes {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(66% - 8px);
}
.blogs-row {
  display: flex;
  gap: 16px;
}
.blog-row-item {
  width: calc(50% - 8px);
}
.blogs-scheduled {
  height: 100%;
}
</style>
