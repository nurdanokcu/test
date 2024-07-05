<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>Educational Content {{ route.params.id }}</h1>
  </div>
</template>

<style scoped>
div {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
