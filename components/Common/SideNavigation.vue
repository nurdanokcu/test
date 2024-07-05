<script setup>
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
  mediaQuery: {
    type: String,
    default: '1200',
  },
  navWidth: {
    type: String,
    default: '274',
  },
  navExpandBackground: {
    type: String,
    default: 'var(--gradient-logo)',
  },
});
const isExpanded = ref(false);

defineEmits(['onClick']);

let isLargeScreen = useMediaQuery(`(min-width: ${props.mediaQuery}px)`);
const styleObjectContent = computed(() => {
  if (isLargeScreen.value) {
    return {
      background: 'transparent',
      width: `${props.navWidth}px`,
      padding: '8px 8px 8px 0',
      boxShadow: 'none',
    };
  } else if (isExpanded.value) {
    return {
      width: `${props.navWidth}px`,
      padding: '8px 8px 8px 0',
    };
  } else {
    return {
      width: '0',
      padding: '8px 0',
    };
  }
});

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
const navHandler = () => {
  isExpanded.value = false;
};

onMounted(() => {
  isLargeScreen = useMediaQuery(`(min-width: ${props.mediaQuery}px)`);
  if (isLargeScreen.value) {
    isExpanded.value = true;
  } else {
    isExpanded.value = false;
  }
  window.addEventListener('resize', () => {
    if (isLargeScreen.value) {
      isExpanded.value = true;
    } else {
      isExpanded.value = false;
    }
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    if (isLargeScreen.value) {
      isExpanded.value = false;
    }
  });
});
</script>

<template>
  <div v-on-click-outside="navHandler" class="side-nav">
    <ClientOnly>
      <div :class="['side-nav-content']" :style="styleObjectContent">
        <button
          v-for="section in sections"
          :key="section.name"
          type="button"
          :aria-label="section.name"
          :class="[
            'side-nav-btn',
            { 'side-nav-btn--active': section.isActive },
          ]"
          :style="{ background: section.color }"
          @click="$emit('onClick', section)"
        >
          <span
            class="side-nav-btn--inner"
            :style="{
              backgroundColor: section.isActive ? section.color : 'white',
            }"
          >
            <span
              :style="{
                color: section.isActive ? 'white' : section.color,
              }"
              class="side-nav-btn-text"
            >
              {{ section.title }}
            </span>
            <component
              :is="section.icon"
              :color="section.isActive ? 'white' : section.color"
              :lines="section.isActive ? section.color : 'white'"
            />
          </span>
        </button>
      </div>
      <button
        type="button"
        aria-label="expand collapse button"
        :title="isExpanded ? 'collapse' : 'expand'"
        class="side-nav-expand"
        @click="toggleExpanded"
      >
        <IconsGeneralArrowForward
          :width="24"
          :height="24"
          :direction="isExpanded ? 'left' : 'right'"
        />
      </button>
    </ClientOnly>
  </div>
</template>

<style scoped>
.side-nav {
  display: flex;
  align-items: center;
}

.side-nav-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: flex;
  width: 0;
  overflow: hidden;
  padding: 8px 0;
  border-radius: 0px 12px 12px 0px;
  background-color: var(--primary-white);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  transition: all 1s ease;
}
.side-nav-btn {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 3px 3px 3px 0;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  transition: all 0.3s ease;
}

.side-nav-btn-text {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 2s ease;
}

.side-nav-btn--inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  padding: 12px;
  background-color: var(--primary-white);
  transition: all 0.3s ease;
}

.side-nav-expand {
  display: inline-flex;
  padding: 12px 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px 12px 12px 0px;
}
@media (min-width: 1200px) {
  .side-nav-expand {
    display: none;
  }
}
</style>
