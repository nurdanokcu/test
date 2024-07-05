<template>
  <div class="card">
    <i :style="{ backgroundImage: `url(${card.icon})` }" class="card-icon"></i>
    <p class="card-title">
      {{ card.title }}
    </p>
    <p class="card-description">
      {{ card.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 35px;
  gap: 25px;
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 30px 25px 0px rgba(4, 19, 33, 0.1);
}
.card-icon {
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  background-size: contain;
}
.card-title {
  color: var(--primary-orange);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.card-description {
  color: #7e7e7e;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
