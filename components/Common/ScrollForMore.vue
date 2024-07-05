<script setup>
import { scrollIcon } from '~/assets/images/icons';

defineProps({
  pathId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="`#${pathId}`" class="scroll">
    <span class="scroll-btn">
      <img :src="scrollIcon" alt="scroll down icon" />
    </span>
    <span>{{ $t("common.scroll") }}</span>
  </NuxtLink>
</template>

<style scoped>
.scroll {
  gap: 1rem;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #fff;
}

.scroll-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.scroll-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .scroll {
    gap: 1.5rem;
  }

  .scroll-btn {
    width: 56px;
    height: 56px;
  }
}
</style>
