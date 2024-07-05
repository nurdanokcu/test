<script setup lang="ts">
definePageMeta({
  middleware: ['admin'],
  layout: 'admin',
});
useHead({
  title: 'User Management - Propaganda Solutions',
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
