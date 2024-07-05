<script setup lang="ts">
useHead({
  title: 'Blog Management - Propaganda Solutions',
});
</script>

<template>
  <div class="blogs">
    <AdminResourcesBackLink />
    <AdminBlogsPosts class="blogs-all" />
  </div>
</template>

<style scoped>
.blogs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  width: 100%;
  padding: 24px;
}
</style>
