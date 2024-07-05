<template>
  <div class="rate-content">
    <p class="rate-text">
      {{ text }}
    </p>
    <div class="star-rate-num">
      <IconsGeneralStarFilled />
      <span class="star-rate">5.0</span>
    </div>
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
.rate-content {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}

.star-rate-num {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.rate-text {
  color: var(--primary-black);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.star-rate {
  color: var(--primary-black);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
