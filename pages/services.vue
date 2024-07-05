<script setup>
import { vIntersectionObserver } from '@vueuse/components';
import {
  digitalMarketingDE,
  digitalMarketingEN,
  developmentDE,
  developmentEN,
  designEN,
  designDE,
} from '~/data/services';

const { t } = useI18n();
const title = computed(() => t('seo.services.title'));
const description = computed(() => t('seo.services.description'));
useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
      tagPriority: 0
    },
  ],
});

const defaultState = {
  digital: false,
  development: false,
  design: false,
};

const activeSection = ref(defaultState);

const updateActiveSection = (section, isIntersecting) => {
  activeSection.value = {
    ...activeSection.value,
    [section]: isIntersecting,
  };
};

const onIntersectingDigital = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('digital', isIntersecting);
};

const onIntersectingDevelopment = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('development', isIntersecting);
};

const onIntersectingDesign = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('design', isIntersecting);
};

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  el.scrollIntoView({ behavior: 'smooth' });
};
const { locale } = useI18n();
const digitalMarketingData = computed(() => {
  return locale.value === 'de' ? digitalMarketingDE : digitalMarketingEN;
});
const developmentData = computed(() => {
  return locale.value === 'de' ? developmentDE : developmentEN;
});
const designData = computed(() => {
  return locale.value === 'de' ? designDE : designEN;
});
</script>

<template>
  <div>
    <ServicesHeader />
    <main class="main">
      <div :id="$t('services.heading.scrollPathId')" class="main-hidden"></div>
      <div class="intersection-box">
        <ServicesNavigation
          class="side-nav"
          :active-section="activeSection"
          @on-scroll-to-section="scrollToSection"
        />
      </div>
      <div class="services-sections">
        <ServicesServiceSection
          v-intersection-observer="[onIntersectingDigital]"
          :section-data="digitalMarketingData"
          :hidden-id="'servicesDigitalMarketing'"
          :section-title="$t('digital.header.title')"
        />
        <ServicesServiceSection
          v-intersection-observer="[onIntersectingDevelopment]"
          :section-data="developmentData"
          :hidden-id="'servicesDevelopment'"
          :section-title="$t('pagePath.development')"
        />
        <ServicesServiceSection
          v-intersection-observer="[onIntersectingDesign]"
          :section-data="designData"
          :hidden-id="'servicesDesign'"
          :section-title="$t('pagePath.design')"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main {
  overflow-x: clip;
  position: relative;
  max-width: var(--max-width-with-sidebar);
  margin: auto;
}

.main-hidden {
  position: absolute;
  top: -100px;
}

.intersection-box {
  position: absolute;
  top: 100px;
  bottom: 320px;
  left: 0;
  z-index: 5;
  width: 2px;
}

.side-nav {
  position: sticky;
  top: 100px;
  left: 0;
  width: fit-content;
  z-index: 5;
}

.services-sections {
  padding: 0 20px;
}

@media (min-width: 768px) {
  .services-sections {
    padding: 0 32px;
  }

  .intersection-box {
    top: 200px;
  }

  .side-nav {
    top: 200px;
  }
}

@media (min-width: 1024px) {
  .services-sections {
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding: 0 64px;
  }
  .intersection-box {
    top: 320px;
  }

  .side-nav {
    top: 320px;
  }
}
</style>
