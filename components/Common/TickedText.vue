<template>
  <div class="ticked-text">
    <IconsCaseStudiesCitycampusCircleRing />
    <p class="text">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.ticked-text {
  display: grid;
  grid-template-columns: 11% 87%;
  align-items: center;
  margin: 10px 0px;
  gap: 10px;
}

.text {
  color: var(--black, #000);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
