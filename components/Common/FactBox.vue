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
  <div class="fact-wrapper">
    <div :style="styleObject" class="fact-container">
      <div class="fact-design">
        <div class="triangle-left"></div>
        <div class="fact-title-container">
          <p class="fact-title">
            {{ title }}
          </p>
        </div>
        <div class="triangle-right"></div>
      </div>
      <div class="fact-text-container">
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fact-wrapper {
  padding: 8px 0 0 0;
}
.fact-container {
  border-radius: 8px;
  padding: 0px 0px 32px 0px;
  border: 1px solid var(--theme-color);
  height: 100%;
}
.fact-design {
  box-sizing: border-box;
  display: flex;
  align-content: flex-start;
  width: 100%;
  margin: -8px auto 0px;
  padding: 0 4px;
}
.fact-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  min-height: 48px;
  background-color: var(--theme-color);
}
.fact-title {
  padding: 0 16px;
  color: var(--primary-white);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
.triangle-left {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 8px solid var(--theme-color);
}
.triangle-right {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid var(--theme-color);
}
.fact-text-container {
  padding: 12px 32px 0px;
  text-align: center;
}
@media (min-width: 768px) {
  .fact-design {
    max-width: 420px;
  }
}
@media (min-width: 1500px) {
  .fact-design {
    max-width: 100%;
  }
  .fact-title-container {
    width: 100%;
  }
}
</style>
