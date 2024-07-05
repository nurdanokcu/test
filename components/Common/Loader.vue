<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '32px',
  },
  color: {
    type: String,
    default:
      'var(--gradient-logo, linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%))',
  },
});
</script>

<template>
  <div
    :style="{ width: size, height: size, background: color }"
    class="loader"
  ></div>
</template>

<style scoped>
.loader {
  padding: 8px;
  border-radius: 50%;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
