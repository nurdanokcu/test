<template>
  <div class="error">
    <IconsGeneralError />
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  errorMessage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.error {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
