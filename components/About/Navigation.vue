<script setup>
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
  activeSection: {
    type: Object,
    required: true,
  },
});
defineEmits(['onScrollToSection']);

const { t } = useI18n();
const isExpanded = ref(false);

const MessageIcon = resolveComponent('IconsGeneralMessage');
const TeamIcon = resolveComponent('IconsGeneralTeam');
const HistoryIcon = resolveComponent('IconsGeneralHistory');

const sections = computed(() => [
  {
    id: t('pagePath.aboutSection.reviews'),
    name: 'review',
    title: t('about.navigation.review'),
    icon: MessageIcon,
    isActive: props.activeSection.review,
  },
  {
    id: t('pagePath.aboutSection.team'),
    name: 'team',
    title: t('about.navigation.team'),
    icon: TeamIcon,
    isActive: props.activeSection.team,
  },
  {
    id: t('pagePath.aboutSection.history'),
    name: 'history',
    title: t('about.navigation.history'),
    icon: HistoryIcon,
    isActive: props.activeSection.history,
  },
]);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const navHandler = () => {
  isExpanded.value = false;
};
</script>

<template>
  <div v-on-click-outside.bubble="navHandler" class="side-nav">
    <div
      :class="[
        'side-nav-content',
        { 'side-nav-content--expanded': isExpanded },
      ]"
    >
      <button
        v-for="section in sections"
        :key="section.name"
        type="button"
        :aria-label="section.name"
        :class="['side-nav-btn', { 'side-nav-btn--active': section.isActive }]"
        @click="$emit('onScrollToSection', section)"
      >
        <span :class="['side-nav-btn--inner']">
          <span class="side-nav-btn-text">
            {{ section.title }}
          </span>
          <span class="side-nav-btn-icon">
            <component
              :is="section.icon"
              :color="'white'"
              :is-gradient="!section.isActive"
            />
          </span>
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

.side-nav-content--expanded {
  width: 274px;
  padding: 8px 8px 8px 0;
}

.side-nav-btn {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 3px;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  background: var(--gradient-logo);
  transition: all 1s ease;
}

.side-nav-btn-text {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  transition: all 0.3s ease;
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

.side-nav-btn--active .side-nav-btn--inner {
  background-color: var(--gradient-logo);
}

.side-nav-btn--active .side-nav-btn-text {
  background: var(--primary-white);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.side-nav-expand {
  display: inline-flex;
  padding: 12px 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px 12px 12px 0px;
  background: var(--gradient-logo);
}

@media (min-width: 1200px) {
  .side-nav-expand {
    display: none;
  }

  .side-nav-content {
    background-color: transparent;
    width: 274px;
    padding: 8px 8px 8px 0;
    box-shadow: none;
  }
}
</style>
