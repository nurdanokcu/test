<script setup lang="ts">
// Imports
import { designEN, designDE } from '~/data/design';
import { type TypeSubCategory } from '~/types/services';
import {
  caseStudiesItemsEn,
  caseStudiesItemsDe,
} from '~/data/caseStudiesItems.js';
import { ellipse } from '~/assets/images/general';

const { designSubCategory, findSubcategory } = useServices();
const { t } = useI18n();
const title = computed(() => t('seo.design.title'));
const description = computed(() => t('seo.design.description'));
definePageMeta({
  scrollToTop: false,
  middleware: ['design'],
});

// Reactive variables and Computed properties
const { locale } = useI18n();
const route = useRoute();
const main = ref();
const categoriesRef = ref();
const isCategoriesSticky = ref(false);

// Computed properties
const categoryPath = computed(() => route.params.category as string);
const subCategoryPath = computed(() => route.params.subcategory as string);
const categories = computed(() =>
  locale.value === 'en' ? designEN : designDE,
);
const carouselItems = computed(() => {
  if (locale.value === 'en') {
    return caseStudiesItemsEn;
  } else {
    return caseStudiesItemsDe;
  }
});

const handleScroll = () => {
  if (!main.value) {
    return;
  }
  const stickyPoint = main.value.offsetTop - 80;
  if (window.scrollY >= stickyPoint) {
    isCategoriesSticky.value = true;
  } else {
    isCategoriesSticky.value = false;
  }
};

const updateSubCategory = (subCategory: TypeSubCategory) => {
  designSubCategory.value = subCategory;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

designSubCategory.value = findSubcategory({
  categoryPath: categoryPath.value,
  subCategoryPath: subCategoryPath.value,
  categories: categories.value,
}) || categories.value[0].subCategories[0];
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta
        name="description"
        :content="description"
      />
    </Head>
    <DesignHeader />
    <main
      ref="main"
      class="main"
    >
      <div
        :id="$t('design.heading.scrollPathId')"
        class="main-hidden"
      ></div>
      <CommonServicesCategories
        ref="categoriesRef"
        class="categories"
        :side-nav-color="'var(--primary-magenta)'"
        :page-name="'design'"
        :categories="categories"
        :is-sticky="isCategoriesSticky"
        @on-update-sub-category="updateSubCategory"
      />
      <NuxtPage />
    </main>
    <div class="case-studies-wrapper">
      <div class="case-studies">
        <div class="case-studies-content">
          <p class="case-studies-title">
            {{ $t("common.caseStudies") }}
          </p>
          <ClientOnly>
            <CommonPrevWorks
              :pagination-color="'#E8F3FF'"
              :pagination-active-color="'#006FEC'"
              :data="carouselItems"
            />
          </ClientOnly>
        </div>
        <div class="gradient-wrapper">
          <div class="gradient-desktop">
            <img
              class="gradient-img"
              :src="ellipse"
              alt="gradient-ring"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  overflow-x: clip;
  max-width: var(--max-width-with-sidebar);
  margin: 0 auto;
}

.main-hidden {
  position: absolute;
  top: -80px;
}

.sticky-wrapper {
  position: absolute;
  top: 0px;
  bottom: 10%;
  z-index: 5;
  width: 1px;
}

.categories {
  position: sticky;
  top: var(--nav-top-height);
  z-index: 6;
}

.case-studies-wrapper {
  overflow: hidden;
  max-width: 100%;
}

.case-studies {
  display: flex;
  position: relative;
  padding: 24px;
  margin: 0 auto 48px auto;
}

.case-studies-title {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.gradient-wrapper {
  display: none;
}

@media (min-width: 768px) {
  .case-studies {
    padding: 0 48px;
  }

  .case-studies-title {
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .case-studies {
    padding: 0 64px;
  }
}

@media (min-width: 1200px) {
  .case-studies-wrapper {
    overflow: hidden;
    max-width: 100%;
  }

  .case-studies {
    padding: 64px 180px 64px calc(var(--digital-side-nav-width) + 100px);
    max-width: var(--max-width-content);
  }

  .gradient-wrapper {
    display: block;
    width: 1px;
    position: relative;
  }

  .gradient-desktop {
    display: block;
    position: absolute;
    transform: rotate(258deg) translate(-30%, 100%);
    width: 720px;
    right: -160px;
    bottom: 0;
    z-index: -1;
  }

  .gradient-img {
    width: 100%;
    height: 100%;
  }
}
</style>
