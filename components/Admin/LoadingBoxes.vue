<script setup lang="ts">
defineProps({
  height: {
    type: String,
    required: false,
    default: '48px',
  },
  amount: {
    type: Number,
    required: false,
    default: 6,
  },
});
</script>

<template>
  <div class="loading-boxes">
    <div
      v-for="index in amount"
      :key="index"
      :style="{
        height: height,
      }"
      class="loading"
    ></div>
  </div>
</template>

<style scoped>
.loading-boxes {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.loading {
  border-radius: 12px;
  background-color: #dbdbdb;
  opacity: 0.7;
  animation: skeleton-loading 2s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: #dbdbdb;
  }
  50% {
    background-color: #ecf0f4;
    opacity: 0.7;
  }
  100% {
    background-color: #dbdbdb;
  }
}
</style>
