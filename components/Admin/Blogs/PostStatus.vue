<template>
  <p
    :class="[
      'post-status',
      {
        'post-status--draft': status === 'draft',
        'post-status--published': status === 'published',
        'post-status--scheduled': status === 'scheduled',
      },
    ]"
  >
    {{ status }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  status: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.post-status {
  display: flex;
  width: 80px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  flex-shrink: 0;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  background: var(--secondary-dark-blue);
}
.post-status--draft {
  background: var(--primary-orange);
}
.post-status--published {
  background: var(--primary-blue);
}
.post-status--scheduled {
  background: var(--primary-magenta);
}
</style>
