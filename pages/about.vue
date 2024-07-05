<script setup>
import { vIntersectionObserver } from '@vueuse/components';

const { t } = useI18n();
const title = computed(() => t('seo.about.title'));
const description = computed(() => t('seo.about.description'));
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
      tagPriority: 0,
    },
    {
      property: 'og:title',
      content: title.value,
      tagPriority: 0,
    },
    {
      property: 'og:description',
      content: description.value,
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: title.value,
      tagPriority: 0,
    },
    {
      name: 'twitterDescription',
      content: description.value,
      tagPriority: 0,
    },
    ...head.value.meta.map(meta => ({
      ...meta,
      tagPriority: 0,
    })),
  ],
  link: head.value.link.map(link => ({
    ...link,
    tagPriority: 0,
  })),
});
const defaultState = {
  review: false,
  team: false,
  history: false,
};
const activeSection = ref(defaultState);
const updateActiveSection = (section, isIntersecting) => {
  activeSection.value = {
    ...activeSection.value,
    [section]: isIntersecting,
  };
};
const onIntersectingReview = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('review', isIntersecting);
};
const onIntersectingTeam = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('team', isIntersecting);
};
const onIntersectingHistory = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('history', isIntersecting);
};
const scrollToSection = (section) => {
  navigateTo(`#${section.id}`);
};
</script>

<template>
  <div class="content">
    <AboutHeader />
    <main class="main">
      <div class="intersection-box">
        <AboutNavigation
          class="nav"
          :active-section="activeSection"
          @on-scroll-to-section="scrollToSection"
        />
      </div>
      <AboutReviews
        v-intersection-observer="[
          onIntersectingReview,
          { rootMargin: '-250px 0px' },
        ]"
      />
      <ClientOnly>
        <AboutTeam
          v-intersection-observer="[
            onIntersectingTeam,
            { rootMargin: '-250px 0px' },
          ]"
        />
      </ClientOnly>
      <AboutVisionMission />
      <AboutHistory
        v-intersection-observer="[
          onIntersectingHistory,
          { rootMargin: '-250px 0px' },
        ]"
      />
      <AboutLocation />
    </main>
    <AboutWeCanDo />
  </div>
</template>

<style scoped>
.main {
  overflow-x: clip;
  position: relative;
  max-width: var(--max-width-with-sidebar);
  margin: auto;
}
.intersection-box {
  position: absolute;
  top: 9%;
  left: 0;
  bottom: 4%;
  z-index: 5;
  width: 2px;
}
.nav {
  position: sticky;
  top: 60%;
  left: 0;
  width: fit-content;
  z-index: 5;
}
</style>(: any)(: any): string: any: { isIntersecting: any; }[]: { isIntersecting: any; }[]: { isIntersecting: any; }[]: { id: any; }
