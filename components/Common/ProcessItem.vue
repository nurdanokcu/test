<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';

const props = defineProps({
  item: {
    type: Object as PropType<{ title: string; description: string }>,
    required: true,
  },
  themeColor: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    required: true,
  },
});
const isVisible = ref(false);
const onIntersectionObserver = (entries: IntersectionObserverEntry[]) => {
  const { isIntersecting } = entries[0];
  if (isIntersecting) {
    isVisible.value = true;
  }
};
const styleObject = computed(() => {
  return {
    '--theme-color': props.themeColor || '#740f49',
  };
});
const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const newHex = hex.replace(
    shorthandRegex,
    (_m, r, g, b) => r + r + g + g + b + b,
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
  if (!result) {
    return null;
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};
const boxShadow = computed(() => {
  const rgb = hexToRgb(props.themeColor);
  if (!rgb) {
    return '0px 4px 7px 1px rgba(116, 15, 73, 0.25)';
  }
  return `0px 4px 7px 1px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`;
});
</script>

<template>
  <div
    v-intersection-observer="onIntersectionObserver"
    :style="styleObject"
    :class="['item', { show: isVisible }]"
  >
    <div class="item-header">
      <div class="item-number-wrapper">
        <div
          :style="{
            boxShadow: boxShadow,
          }"
          class="item-number"
        >
          {{ index + 1 }}
        </div>
      </div>
      <p class="item-title">
        {{ item.title }}
      </p>
    </div>
    <div class="item-content">
      <div class="item-line-wrapper">
        <div class="item-line"></div>
      </div>
      <p class="item-text">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease;
  transition-delay: 0.1s;
}

.item.show {
  opacity: 1;
  transform: translateY(0);
}

.item-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item-number-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  padding: 12px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid var(--theme-color);
}

.item-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding: 6px 14px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--theme-color);
  color: var(--primary-white);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.item-title {
  color: var(--theme-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.item-content {
  display: flex;
  gap: 16px;
}

.item-text {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.item-line-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 64px;
  min-height: 46px;
  flex-shrink: 0;
}

.item-line {
  width: 3px;
  height: calc(100% - 15px);
  background: var(--theme-color);
}

.item:last-child .item-line {
  display: none;
}
</style>
