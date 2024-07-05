<script setup lang="ts">
// Imports
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { type TypeCategory } from '~/types/services';
import 'swiper/css';

const route = useRoute();
const props = defineProps({
  isSticky: {
    type: Boolean,
    required: true,
  },
  categories: {
    type: Array as PropType<TypeCategory[]>,
    required: true,
  },
  sideNavColor: {
    type: String,
    default: 'var(--primary-blue)',
  },
  pageName: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(['onUpdateSubCategory']);
const localePath = useLocalePath();
const { locale } = useI18n();

// Computed properties
const currentCategorySlug = computed(() => route.params.category);
const currentCategory = computed(
  () =>
    props.categories.find(
      category => category.slug === currentCategorySlug.value,
    ) || props.categories[0],
);
const currentSubCategory = computed(() => route.params.subcategory);

// Functions
const checkIfActive = (category: string | string[]) => {
  return currentCategorySlug.value === category;
};

const handleCategoryClick = (category: TypeCategory) => {
  if (checkIfActive(category.slug)) {
    return;
  }
  emits('onUpdateSubCategory', category.subCategories[0]);
};

const getCategoryPath = (category: TypeCategory) => {
  const targetCategoryPath = category.slug;
  const targetSubCategoryPath = category.subCategories[0].slug;
  if (locale.value === 'de') {
    return `${localePath('/de/' + props.pageName)}/${targetCategoryPath}/${targetSubCategoryPath}#sub`;
  } else  {
    return  `${localePath('/' + props.pageName)}/${targetCategoryPath}/${targetSubCategoryPath}#sub`;
  }
};

const handleSubCategoryClick = (targetSlug: string | string[]) => {
  if (currentSubCategory.value === targetSlug) {
    return;
  }

  const targetSubCategory = currentCategory.value.subCategories.find(
    subCategory => subCategory.slug === targetSlug,
  );
  emits('onUpdateSubCategory', targetSubCategory);
};

const getSubCategoryPath = () => {
  if (locale.value === 'de') {
    return `${localePath('/de/' + props.pageName)}/${currentCategorySlug.value}`;
  } else {
    return `${localePath('/' + props.pageName)}/${currentCategorySlug.value}`;
  }
};
const sections = computed(() => {
  if (!currentCategory.value) {
    return [];
  }
  return currentCategory.value.subCategories.map((subCategory) => {
    return {
      id: subCategory.slug,
      slug: subCategory.slug,
      title: subCategory.navTitle,
      iconColored: subCategory.iconColored,
      iconWhite: subCategory.iconWhite,
      color: props.sideNavColor,
      isActive: currentSubCategory.value === subCategory.slug,
    };
  });
});
</script>

<template>
  <div
    id="digital-categories"
    :class="['categories', { 'categories--sticky': isSticky }]"
  >
    <div class="categories-select">
      <button
        id="categories-button-prev"
        class="categories-direction-button"
        type="button"
        :aria-label="$t('theblog.previous')"
        :title="$t('theblog.previous')"
      >
        <IconsGeneralArrowForward
          :direction="'left'"
          :is-gradient="true"
          :width="32"
          :height="32"
        />
    </button>
      <swiper
        :slides-per-view="'auto'"
        :space-between="30"
        class="services-categories-swiper"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '#categories-button-next',
          prevEl: '#categories-button-prev',
        }"
      >
        <swiper-slide v-for="category in categories" :key="category.slug">
          <CommonServicesCategoryBox
            :is-small="isSticky"
            :is-active="checkIfActive(category.slug)"
            :category-text="category.category"
            :path="getCategoryPath(category)"
            @on-click="handleCategoryClick(category)"
          />
        </swiper-slide>
      </swiper>
      <button
        id="categories-button-next"
        class="categories-direction-button"
        type="button"
        :aria-label="$t('theblog.next')"
        :title="$t('theblog.next')"
      >
        <IconsGeneralArrowForward
          :is-gradient="true"
          :width="32"
          :height="32"
        />
      </button>
    </div>
    <CommonServicesSideNavigation
      class="categories-nav"
      :sections="sections"
      :nav-expand-background="sections[0].color"
      :path="getSubCategoryPath()"
      @on-click="handleSubCategoryClick"
    />
  </div>
</template>

<style>
.services-categories-swiper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}

.services-categories-swiper .swiper-slide {
  box-sizing: border-box;
  width: auto !important;
  flex-shrink: 0 !important;
  padding: 16px 0;
}
</style>

<style scoped>
.categories {
  position: relative;
  max-width: var(--max-width-with-sidebar);
  margin: 0 auto;
  background-color: white;
  z-index: 4;
}

.categories-select {
  max-width: calc(var(--max-width-content));
  margin: 0 auto;
  display: flex;
  padding: 40px 8px 16px 8px;
  width: 100%;
  transition: padding 0.3s ease-in-out;
}

.categories-nav {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
}

.categories--sticky .categories-select {
  padding-top: 0px;
}

@media (min-width: 768px) {
  .categories-select {
    padding: 56px 24px 16px 24px;
  }
}

@media (min-width: 1024px) {
  .categories-select {
    padding: 56px 58px 16px 58px;
  }
}
</style>
