<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';

type TypeItem = {
  title: string;
  description: string;
};

const props = defineProps({
  pageName: {
    type: String,
    required: true,
  },
  facts: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  processItems: {
    type: Array as PropType<TypeItem[]>,
    required: true,
  },
  themeColor: {
    type: String,
    required: false,
    default: 'var(--primary-blue)',
  },
});
const { locale, t } = useI18n();
const isFactVisible = ref(false);
const isAboutVisible = ref(false);

const factBoxTitle = computed(() => {
  return `${props.pageName} ${t('digital.content.strategy')}`;
});
const onIntersectionObserverFact = (entries: IntersectionObserverEntry[]) => {
  const { isIntersecting } = entries[0];
  if (isIntersecting) {
    isFactVisible.value = true;
  }
};
const onIntersectionObserverAbout = (entries: IntersectionObserverEntry[]) => {
  const { isIntersecting } = entries[0];
  if (isIntersecting) {
    isAboutVisible.value = true;
  }
};
</script>

<template>
  <div :class="['services', { 'services--de': locale === 'de' }]">
    <p class="services-title">
      {{ $t("digital.content.services") }}
    </p>
    <div class="services-content">
      <div class="services-facts">
        <div class="services-fact">
          <h5 class="services-subtitle">
            {{ $t("digital.content.facts") }}
          </h5>
          <CommonFactBox
            v-intersection-observer="[
              onIntersectionObserverFact,
              { rootMargin: '-80px 0px' },
            ]"
            :theme-color="themeColor"
            :title="factBoxTitle"
            :text="facts"
            :class="['services-fact-box', { show: isFactVisible }]"
          />
        </div>
        <div class="services-fact">
          <h5 class="services-subtitle">
            {{ $t("digital.content.about") }}
          </h5>
          <CommonAboutBox
            v-intersection-observer="[
              onIntersectionObserverAbout,
              { rootMargin: '-80px 0px' },
            ]"
            :theme-color="themeColor"
            :text="about"
            :class="['services-about-box', { show: isAboutVisible }]"
          />
        </div>
      </div>
      <div class="services-process">
        <h5 class="services-subtitle services-subtitle--process">
          {{ process }}
        </h5>

        <div class="services-process-items">
          <CommonProcess
            :theme-color="themeColor"
            :items="processItems"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-fact-box {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 1s ease;
  transition-delay: 0.1s;
}

.services-fact-box.show {
  opacity: 1;
  transform: translateX(0);
}

.services-about-box {
  opacity: 0;
  transform: translateX(20px);
  transition: all 1s ease;
  transition-delay: 0.1s;
}

.services-about-box.show {
  opacity: 1;
  transform: translateX(0);
}

.services-title {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.services-content {
  padding: 32px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 64px;
}

.services--de .services-title {
  word-break: break-word;
}

.services-fact {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
}

.services-subtitle--process {
  margin-bottom: 30px;
}

.services-subtitle {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media (min-width: 1500px) {
  .services-facts {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .services-fact {
    width: calc(50% - 15px);
  }
}
</style>
