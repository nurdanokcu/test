<script setup>
import { faqSectionsEn, faqSectionsDe } from '~/data/faq';

const { locale } = useI18n();
const faqSections = computed(() => {
  if (locale.value === 'en') {
    return faqSectionsEn;
  } else {
    return faqSectionsDe;
  }
});

const { t } = useI18n();
const title = computed(() => t('seo.faq.title'));
const description = computed(() => t('seo.faq.description'));
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

const searchQuery = ref('');
const filteredSections = ref([...faqSections.value]);

/**
 * @description
 * This function filters the sections based on the search query.
 * */
const getFilteredSections = () => {
  const query = searchQuery.value.toLowerCase().trim();

  if (query.length === 0) {
    return faqSections.value;
  }

  const newSections = faqSections.value
    .map((section) => {
      const filteredQuestions = section.questions.filter((question) => {
        return question.question.toLowerCase().includes(query);
      });
      if (filteredQuestions.length > 0) {
        return { ...section, questions: filteredQuestions };
      } else {
        return null;
      }
    })
    .filter(section => section !== null);

  filteredSections.value = newSections;
};

/**
 * @description
 * This function debounces the search query. When user stops typing for 500ms, the search function is called. It prevents the search function from being called on every key stroke.
 */
const debouncedSearch = useDebounceFn(getFilteredSections, 500);

watch(
  () => searchQuery.value,
  () => {
    if (searchQuery.value.length === 0) {
      filteredSections.value = [...faqSections.value];
      return;
    }
    debouncedSearch();
  },
);
</script>

<template>
  <div>
    <FaqHeader />
    <main class="faq-main">
      <div class="faq-search">
        <FaqSearchInput
          :id="'faq-search'"
          v-model="searchQuery"
          @on-click-button="getFilteredSections"
        />
      </div>
      <div v-if="filteredSections.length > 0" class="faq-sections">
        <FaqSection
          v-for="section in filteredSections"
          :key="section.title"
          :section="section"
          :search-query="searchQuery"
        />
      </div>
      <div v-else class="faq-sections">
        <p>No results found.</p>
      </div>
    </main>
    <CommonContactUs
      :title="$t('design.contactForm.title')"
      :subtitles="[$t('design.contactForm.subtitle')]"
      :side-text-1="$t('design.contactForm.text')"
      :side-text-2="$t('design.contactForm.text_1')"
    />
  </div>
</template>

<style scoped>
.main {
  max-width: var(--max-width-with-sidebar);
  margin: auto;
  overflow-x: clip;
  position: relative;
}
.faq-main {
  padding: 48px 24px 24px;
  max-width: var(--max-width-content);
  margin: 0 auto;
}
.faq-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.faq-search {
  max-width: 800px;
  margin: 0 0 48px;
}

@media (min-width: 768px) {
  .faq-main {
    padding: 48px 32px 24px;
  }
}
@media (min-width: 1024px) {
  .faq-main {
    padding: 48px 64px 24px;
  }
}
</style>
