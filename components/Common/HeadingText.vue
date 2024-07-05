<template>
  <p class="text">
    {{ text }}
  </p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ' ',
  },
});
</script>

<style scoped>
.text {
  color: var(--white, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 60px;
}

@media (min-width: 768px) {
  .text {
    padding-bottom: 106px;
  }
}
</style>
