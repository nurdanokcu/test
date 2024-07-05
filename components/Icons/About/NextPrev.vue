<script setup>
defineProps({
  direction: {
    type: String,
    required: false,
    default: 'next',
  },
});
</script>

<template>
  <svg
    :class="direction === 'next' ? 'next' : 'prev'"
    width="26"
    height="47"
    viewBox="0 0 26 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 1.97949L23.0771 23.5571L1.5 45.1343"
      stroke="black"
      stroke-width="3"
    />
  </svg>
</template>

<style scoped>
.prev {
  transform: rotate(180deg);
}
</style>
