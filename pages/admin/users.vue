<script setup lang="ts">
definePageMeta({
  middleware: ['admin'],
  layout: 'admin',
});
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: 'Users Management - Propaganda Solutions',
  meta: [
    {
      property: 'og:title',
      content: 'Users Management - Propaganda Solutions',
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: 'Users Management - Propaganda Solutions',
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
  <div class="users">
    <AdminUsersTeam class="users-team" />
    <AdminUsersActionHistory class="users-actions" />
  </div>
</template>

<style scoped>
.users {
  display: flex;
  gap: 16px;
  height: 100%;
  width: 100%;
  padding: 24px;
}
.users-team {
  width: 70%;
}
.users-actions {
  width: 30%;
}
</style>
