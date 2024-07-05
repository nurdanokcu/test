<template>
  <button
    type="button"
    class="notification-cancel"
    :aria-label="$t('admin.manageUser.cancel')"
    :title="$t('admin.manageUser.cancel')"
    @click="$emit('onClick')"
  >
    <IconsGeneralArrow color="var(--secondary-dark-blue)" :direction="'left'" />
  </button>
</template>

<script setup lang="ts">
defineEmits(['onClick']);
</script>

<style scoped>
.notification-cancel {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  border: 2px solid var(--secondary-dark-blue);
  transition: all 0.2s ease;
}
.notification-cancel:hover {
  background: var(--primary-white-hover);
}
</style>
