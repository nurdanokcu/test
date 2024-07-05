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
  navExpandBackground: {
    type: String,
    default: 'var(--gradient-logo)',
  },
  path: {
    type: String,
    required: true,
  },
});
const isExpanded = ref(false);

const emits = defineEmits(['onClick']);

let isLargeScreen = useMediaQuery(`(min-width: ${props.mediaQuery}px)`);

const styleObjectExpand = computed(() => {
  if (isLargeScreen.value) {
    return {
      display: 'none',
      background: props.navExpandBackground,
    };
  }
  return {
    background: props.navExpandBackground,
  };
});
const styleObjectContent = computed(() => {
  if (isLargeScreen.value) {
    return {
      background: 'transparent',
      width: 'var(--digital-side-nav-width)',
      padding: '8px 8px 8px 0',
      boxShadow: 'none',
    };
  } else if (isExpanded.value) {
    return {
      width: 'var(--digital-side-nav-width)',
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

const handleClick = (section) => {
  emits('onClick', section.slug);
  isExpanded.value = false;
};
const styleThemeColor = computed(() => {
  return {
    '--theme-color': props.sections.color,
  };
});
</script>

<template>
  <div
    v-on-click-outside.bubble="navHandler"
    :style="styleThemeColor"
    class="side-nav"
  >
    <ClientOnly>
      <div :class="['side-nav-content']" :style="styleObjectContent">
        <NuxtLink
          v-for="section in sections"
          :key="section.id"
          :aria-label="section.title"
          class="side-nav-btn"
          :style="{ background: section.color }"
          :to="`${path}/${section.slug}#sub`"
          @click="handleClick(section)"
        >
          <span
            :class="['side-nav-btn--inner']"
            :style="{
              background: section.isActive
                ? section.color
                : 'var(--primary-white)',
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
            <!-- <i
              class="icon"
              :style="{
                backgroundImage: section.isActive ? `url(${section.iconWhite})` : `url(${section.iconColored})`,
              }"
            ></i> -->
          </span>
        </NuxtLink>
      </div>
      <button
        type="button"
        aria-label="expand collapse button"
        :style="styleObjectExpand"
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
  gap: 12px;
  display: flex;
  width: 0;
  overflow: hidden;
  padding: 8px 0;
  border-radius: 0px 12px 12px 0px;
  background-color: var(--primary-white);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
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
  width: calc(260px - 48px);
  min-width: calc(260px - 48px);
  overflow: hidden;
  color: var(--theme-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: all 0.3s ease;
  text-align: left;
  flex-grow: 1;
}

.side-nav-btn--inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  padding: 8px;
  transition: all 0.3s ease;
  background-color: var(--primary-white);
}

.side-nav-expand {
  display: inline-flex;
  padding: 12px 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px 12px 12px 0px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

@media (min-width: 768px) {
  .side-nav-content {
    gap: 16px;
  }

  .side-nav-btn-text {
    width: calc(var(--digital-side-nav-width) - 64px);
    min-width: calc(var(--digital-side-nav-width) - 64px);
    overflow: hidden;
  }

  .side-nav-btn--inner {
    padding: 12px;
  }
}
</style>
