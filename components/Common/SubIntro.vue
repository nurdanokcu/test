<template>
  <h1 class="heading">
    {{ title }}
  </h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ' ',
  },
});
</script>

<style scoped>
.heading {
  color: var(--white, #fff);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 80px 0px 70px;
}

@media (min-width: 768px) {
  .heading {
    font-size: 64px;
  }
}
</style>
