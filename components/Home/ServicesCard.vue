<script setup lang="ts">
import { Collapse } from 'vue-collapsed';
import { vOnClickOutside } from '@vueuse/components';
import { type TypeHomeServiceCard } from '~/types/services';

const localePath = useLocalePath();

const props = defineProps({
  service: {
    type: Object as PropType<TypeHomeServiceCard>,
    required: true,
  },
});
const styleObject = computed(() => {
  return {
    '--theme-color': props.service.themeColor,
  };
});
const isExpanded = ref(false);
const wasClosedByClick = ref(false);
let hoverTimer: NodeJS.Timeout;
const collapse = () => {
  isExpanded.value = false;
  wasClosedByClick.value = true;
  setTimeout(() => {
    wasClosedByClick.value = false;
  }, 500);
};

const expandItem = () => {
  if (wasClosedByClick.value) {
    return;
  }
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    isExpanded.value = true;
  }, 200);
};

const prepareToCollapse = () => {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    isExpanded.value = false;
  }, 200);
};
</script>

<template>
  <div
    v-on-click-outside="collapse"
    :style="styleObject"
    class="card"
  >
    <div class="card-header">
      <div class="icon-wrapper">
        <IconsHomeDigital v-if="service.id === 1" />
        <IconsHomeDesign v-if="service.id === 2" />
        <IconsHomeDevelopment v-if="service.id === 3" />
      </div>
      <div
        :class="[
          'card-menu',
          {
            'card-menu-expanded': isExpanded,
          },
        ]"
        @mouseleave="prepareToCollapse"
        @mouseenter="expandItem"
      >
        <button
          type="button"
          :aria-label="
            isExpanded ? $t('navbar.closeMenu') : $t('navbar.openMenu')
          "
          class="menu-button"
          @click="collapse"
        >
          <Transition name="slide-up" mode="out-in">
            <IconsMenuClose
              v-if="isExpanded"
              :color="service.themeColor"
              class="card-menu-icon"
            />
            <IconsGeneralAdd
              v-else
              :color="service.themeColor"
              class="card-menu-icon"
            />
          </Transition>
        </button>
        <Collapse :when="isExpanded">
          <div class="card-menu-items">
            <ServicesNavItems
              v-if="isExpanded"
              :is-expanding-to-side-on-desktop="false"
              :bg-color="service.themeColor"
              :items-border-radius="'8px'"
              :page-slug="service.pageSlug"
              :items="service.navigation"
            />
          </div>
        </Collapse>
      </div>
    </div>
    <div class="card-content">
      <div class="card-texts">
        <p class="card-title">
          {{ service.title }}
        </p>
        <p class="card-text">
          {{ service.text }}
        </p>
      </div>
      <NuxtLink
        type="button"
        class="card-link"
        :aria-label="$t('home.service.click')"
        :title="$t('home.service.click')"
        :to="localePath(service.path)"
      >
        <IconsGeneralArrow class="card-link-icon" color="white" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  border: 4px solid var(--theme-color);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
}
.card-title {
  padding: 24px 24px 4px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
}
.card-menu {
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}
.card-menu-expanded {
  flex-grow: 1;
}
.card-menu-items {
  position: absolute;
  top: 0;
  right: 44px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 4;
  width: calc(100% + 40px);
  max-width: 340px;
}
.card-menu-icon {
  width: 32px;
  height: 32px;
}
.card-content {
  display: flex;
  align-items: flex-end;
}
.card-text {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 0 4px 24px 24px;
  max-width: 480px;
}

.card-link {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  margin: -1px -1px -1px auto;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background-color: var(--theme-color);
  border-radius: 2px 0px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.card-link:hover {
  opacity: 0.8;
}
.card-link:active {
  opacity: 1;
}
.card-link-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(3px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-3px);
}
</style>
