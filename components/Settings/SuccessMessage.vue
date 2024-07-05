<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="name-success">
    <IconsAdminCheck color="#30C836" />
    {{ message }}
  </p>
</template>

<style scoped>
.name-success {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: #30c836;
}
</style>
