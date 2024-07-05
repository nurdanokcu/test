<script setup>
import { vIntersectionObserver } from '@vueuse/components';

const { t } = useI18n();
const title = computed(() => t('seo.caseStudies.quatsch.title'));
const description = computed(() => t('seo.caseStudies.quatsch.description'));

definePageMeta({
  middleware: ['route'],
});

const defaultState = {
  approach: false,
  results: false,
  feedback: false,
};

const activeSection = ref(defaultState);

const updateActiveSection = (section, isIntersecting) => {
  activeSection.value = {
    ...activeSection.value,
    [section]: isIntersecting,
  };
};

const onIntersectingApproach = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('approach', isIntersecting);
};

const onIntersectingResults = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('results', isIntersecting);
};

const onIntersectingFeedback = (entries) => {
  const { isIntersecting } = entries[0];
  updateActiveSection('feedback', isIntersecting);
};

const scrollToSection = (section) => {
  const el = document.getElementById(section.id);
  el.scrollIntoView({ behavior: 'smooth' });
};
const ids = ['quatschApproach', 'quatschResults', 'quatschFeedback'];
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
    <CaseStudiesQuatschHeader />
    <main class="main">
      <div
        :id="$t('case_studies.quatsch.heading.scrollPathId')"
        class="main-hidden"
      ></div>
      <div class="intersection-box">
        <CommonCaseStudyNavigation
          class="side-nav"
          :active-section="activeSection"
          :section-ids="ids"
          @on-scroll-to-section="scrollToSection"
        />
      </div>
      <CaseStudiesQuatschHowWeDidIt
        v-intersection-observer="[
          onIntersectingApproach,
          { rootMargin: '-250px 0px' },
        ]"
        :id-for-hidden="ids[0]"
      />
      <CaseStudiesQuatschHowWeSolvedIt
        v-intersection-observer="[
          onIntersectingResults,
          { rootMargin: '-250px 0px' },
        ]"
        :id-for-hidden="ids[1]"
      />
      <CaseStudiesQuatschGetFromIt
        v-intersection-observer="[
          onIntersectingFeedback,
          { rootMargin: '-250px 0px' },
        ]"
        :id-for-hidden="ids[2]"
      />
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
  top: 9%;
  left: 0;
  bottom: 4%;
  z-index: 5;
  width: 2px;
}

.side-nav {
  position: sticky;
  top: 60%;
  left: 0;
  width: fit-content;
  z-index: 5;
}
</style>
