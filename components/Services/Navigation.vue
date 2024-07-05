<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { Collapse } from 'vue-collapsed';
import {
  navigationDigitalEN,
  navigationDigitalDE,
} from '~/data/services/navigationDigital';
import {
  navigationDevEN,
  navigationDevDE,
} from '~/data/services/navigationDev';
import {
  navigationDesignEN,
  navigationDesignDE,
} from '~/data/services/navigationDesign';

import { type TypeNavSection } from '~/types/services';

const props = defineProps({
  activeSection: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(['onScrollToSection']);

const { t, locale } = useI18n();
const isExpanded = ref(true);
const isExpandedSectionId = ref('');
let isLargeScreen = useMediaQuery('(min-width: 1200px)');
// Computed
const navigationDigital = computed(() => {
  return locale.value === 'de' ? navigationDigitalDE : navigationDigitalEN;
});
const navigationDev = computed(() => {
  return locale.value === 'de' ? navigationDevDE : navigationDevEN;
});
const navigationDesign = computed(() => {
  return locale.value === 'de' ? navigationDesignDE : navigationDesignEN;
});

const sections: ComputedRef<TypeNavSection[]> = computed(() => [
  {
    id: 'servicesDigitalMarketing',
    name: 'digital',
    title: t('services.navigation.digital'),
    color: 'var(--primary-blue)',
    pageSlug: navigationDigital.value.pageSlug,
    isActive: props.activeSection.digital,
    items: navigationDigital.value.categories,
  },
  {
    id: 'servicesDevelopment',
    name: 'development',
    title: t('services.navigation.development'),
    color: 'var(--primary-orange)',
    pageSlug: navigationDev.value.pageSlug,
    isActive: props.activeSection.development,
    items: navigationDev.value.categories,
  },
  {
    id: 'servicesDesign',
    name: 'design',
    title: t('services.navigation.design'),
    color: 'var(--primary-magenta)',
    pageSlug: navigationDesign.value.pageSlug,
    isActive: props.activeSection.design,
    items: navigationDesign.value.categories,
  },
]);

const styleObjectExpand = computed(() => {
  if (isLargeScreen.value) {
    return {
      display: 'none',
    };
  }
  return {};
});
const styleObjectContent = computed(() => {
  if (isLargeScreen.value) {
    return {
      background: 'transparent',
      width: '100%',
      padding: '8px 8px 8px 0',
      boxShadow: 'none',
      overflow: 'visible',
      gap: '32px',
    };
  } else if (isExpanded.value) {
    return {
      width: '100%',
      padding: '8px 8px 8px 0',
      overflow: 'visible',
    };
  } else {
    return {
      width: '0',
      padding: '8px 0',
      overflow: 'hidden',
    };
  }
});

// Methods
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
const navHandler = () => {
  isExpanded.value = false;
};

const handleClick = (sectionId: string) => {
  emits('onScrollToSection', sectionId);
};

let hoverTimer: string | number | NodeJS.Timeout | undefined;

const expandSectionWithDelay = (sectionId: string) => {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    isExpandedSectionId.value = sectionId;
  }, 300);
};

const prepareToCollapseWithDelay = (sectionId: string) => {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    if (isExpandedSectionId.value === sectionId) {
      isExpandedSectionId.value = '';
    }
  }, 300);
};
onMounted(() => {
  isLargeScreen = useMediaQuery('(min-width: 1200px)');
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
      <div
        :style="styleObjectContent"
        :class="[
          'side-nav-content',
          { 'side-nav-content--expanded': isExpanded },
        ]"
      >
        <div
          v-for="section in sections"
          :key="section.id"
          class="section-wrapper"
        >
          <div
            class="section"
            @mouseenter="expandSectionWithDelay(section.id)"
            @mouseleave="prepareToCollapseWithDelay(section.id)"
          >
            <button
              type="button"
              :aria-label="section.name"
              :title="`${$t('services.navigation.scroll')} ${section.title}`"
              :class="[
                'section-btn',
                {
                  'section-btn--active': section.isActive,
                  'section-btn--expanded': isExpandedSectionId === section.id,
                },
              ]"
              :style="{ background: section.color }"
              @click="handleClick(section.id)"
            >
              <span
                :class="['section-btn--inner']"
                :style="{
                  background: section.isActive ? section.color : 'white',
                }"
              >
                <span
                  :style="{ color: section.isActive ? 'white' : section.color }"
                  class="section-btn-text"
                >
                  {{ section.title }}
                </span>
                <IconsGeneralCollapseExpand
                  class="section-btn-icon"
                  :is-rotated="isExpandedSectionId === section.id"
                  :color="section.isActive ? 'white' : section.color"
                  :size="'24'"
                />
              </span>
            </button>
            <Collapse :when="isExpandedSectionId === section.id">
              <div class="section-items-wrapper">
                <ServicesNavItems
                  v-if="isExpandedSectionId === section.id"
                  :bg-color="section.color"
                  :page-slug="section.pageSlug"
                  :items-border-radius="'0 8px 8px 8px'"
                  :items="section.items"
                />
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
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
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
.side-nav {
  display: flex;
}

.side-nav-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0;
  overflow: hidden;
  gap: 16px;
  border-radius: 0px 12px 12px 0px;
  background-color: var(--primary-white);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  transition: all 1s ease;
}

.side-nav-content--expanded {
  width: 100%;
  padding: 8px 8px 8px 0;
  overflow: visible;
}

.side-nav-expand {
  display: inline-flex;
  padding: 12px 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px 12px 12px 0px;
  background: var(--gradient-logo);
}

.side-nav-expand:hover {
  background: var(--gradient-logo-hover);
}

.section,
.section-wrapper {
  width: 100%;
}

.section-btn {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 3px 3px 3px 0;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  width: 280px;
  transition: all 0.5s ease;
}

.section-btn--expanded {
  border-radius: 0px 16px 0px 0px;
}

.section-btn-text {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.5s ease;
}

.section-btn--inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  padding: 12px;
  background-color: var(--primary-white);
  transition: all 0.5s ease;
}
.section-btn--expanded .section-btn--inner {
  border-radius: 0px 16px 0px 0px;
}

.section-btn-icon {
  flex-shrink: 0;
}
.section-items-wrapper {
  width: 312px;
  margin-left: 16px;
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1500px) {
  .side-nav {
    display: flex;
    align-items: center;
  }
}
</style>
