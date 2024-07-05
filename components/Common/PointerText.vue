<template>
  <div class="points">
    <IconsCaseStudiesSektorPurpleRing />
    <p class="did-it-text">
      {{ text }} <b> {{ text1 }} </b> {{ text2 }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ' ',
  },
  text1: {
    type: String,
    default: ' ',
  },
  text2: {
    type: String,
    default: ' ',
  },
});
</script>

<style scoped>
.points {
  grid-template-columns: 5% 90%;
  display: grid;
  gap: 10px;
  margin: 10px 0px;
}

.did-it-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media (min-width: 768px) {
  .did-it-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
