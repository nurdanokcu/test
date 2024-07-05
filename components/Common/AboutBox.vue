<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  themeColor: {
    type: String,
    default: '',
  },
});

const styleObject = computed(() => {
  return {
    '--theme-color': props.themeColor || '#740f49',
  };
});
</script>

<template>
  <div :style="styleObject" class="about-service-content">
    <p v-if="title" class="about-service">
      {{ title }}
    </p>
    <p class="about-service-text">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.about-service-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  border-radius: 8px;
  padding: 32px;
  background-color: var(--theme-color);
}

.about-service {
  color: var(--primary-white);
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 20px;
}

.about-service-text {
  color: var(--primary-white);
  font-size: 14px;
}
</style>
