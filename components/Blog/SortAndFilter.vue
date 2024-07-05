<script setup lang="ts">
// Global Imports
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { vOnClickOutside } from '@vueuse/components';

// Local Imports
import { collapseSection, expandSection } from '~/utils/collapseExpand';
import { type TypeCategory } from '~/types/blog';

const route = useRoute();
const router = useRouter();

type TypeSortOption = {
  name: string;
  keyValue: string;
};
const props = defineProps({
  categories: {
    type: Array as PropType<TypeCategory[]>,
    required: true,
  },
  selectedCategory: {
    type: Object as PropType<TypeCategory>,
    required: true,
  },
  selectedSort: {
    type: Object as PropType<TypeSortOption>,
    required: true,
  },
  sortOptions: {
    type: Array as PropType<TypeSortOption[]>,
    required: true,
  },
});

// Emits
const emits = defineEmits(['onSortBlogs', 'onSelectCategory']);

// States
const isOpen = ref(false);
const optionsRef = ref<HTMLElement | null>(null);

// Functions
const toggleDropdown = () => {
  if (isOpen.value) {
    collapseSection(optionsRef.value!);
  } else {
    expandSection(optionsRef.value!);
  }
  isOpen.value = !isOpen.value;
};

const collapseDropdown = () => {
  collapseSection(optionsRef.value!);
  isOpen.value = false;
};

/**
 * Handles the sorting of blogs based on a selected sort option. It updates the URL query parameters to reflect the new sort order and resets the page to the first one.
 * It also emits an event with the selected sort criteria.
 * @param {TypeSortOption} option - The selected sort option, containing a key-value pair to define the sorting criteria.
 */
const handleSortBlogs = (option: TypeSortOption) => {
  const newQuery = { ...route.query };
  delete newQuery.page;
  router.push({
    query: {
      ...newQuery,
      sort: option.keyValue,
    },
  });
  collapseDropdown();
  emits('onSortBlogs', props.selectedCategory.id, option.keyValue);
};
</script>

<template>
  <div class="content-filter">
    <div class="categories">
      <button
        id="blog-categories-prev"
        class="swiper-prev"
        type="button"
        :aria-label="$t('theblog.previous')"
        :title="$t('theblog.previous')"
      >
        <IconsGeneralArrowForward
          :direction="'left'"
          :color="'#000'"
          :width="20"
          :height="20"
        />
      </button>
      <button
        id="blog-categories-next"
        class="swiper-next"
        type="button"
        :aria-label="$t('theblog.next')"
        :title="$t('theblog.next')"
      >
        <IconsGeneralArrowForward
          :color="'#000'"
          :width="20"
          :height="20"
        />
      </button>
      <swiper
        slides-per-view="auto"
        :space-between="30"
        :grab-cursor="true"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '#blog-categories-next',
          prevEl: '#blog-categories-prev',
        }"
        class="blog-swiper"
      >
        <swiper-slide v-for="item in categories" :key="item.id">
          <button
            type="button"
            name="category"
            :class="[
              'category-button',
              {
                'category-button--selected': item.id === selectedCategory.id,
              },
            ]"
            @click="emits('onSelectCategory', item.id, item.name)"
          >
            {{ item.name }}
          </button>
        </swiper-slide>
      </swiper>
    </div>
    <div class="sort-wrapper">
      <div class="sort">
        <div class="sort-title">
          <IconsGeneralSortby />
          <p class="sort-title-text">
            {{ $t("theblog.sortBy") }}
          </p>
        </div>
        <div v-on-click-outside="collapseDropdown" class="sort-content">
          <button
            class="sort-header"
            name="button"
            type="button"
            @click="toggleDropdown()"
          >
            <span v-if="selectedSort?.name === ''">
              {{ $t("theblog.sortOption0") }}
            </span>
            <span v-else class="sort-header--selected">
              {{ selectedSort?.name }}
            </span>
            <IconsGeneralArrowForward
              :color="'#919191'"
              :width="20"
              :height="20"
              :direction="isOpen ? 'up' : 'down'"
            />
          </button>
          <div ref="optionsRef" class="sort-options-wrapper">
            <div class="sort-line" />
            <div class="sort-options">
              <button
                v-for="(option, index) in sortOptions"
                :key="index"
                type="button"
                name="option"
                aria-label="option"
                class="sort-option"
                @click="handleSortBlogs(option)"
              >
                {{ option.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.blog-swiper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blog-swiper .swiper-slide {
  box-sizing: border-box;
  width: auto !important;
  flex-shrink: 0 !important;
}
</style>

<style scoped>
.content-filter {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.categories {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
}
.blog-swiper::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 1px;
  height: 1px;
  width: 100%;
  background: #b9b8b8;
  z-index: -1;
}
.swiper-next,
.swiper-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.swiper-next {
  right: 0;
}
.swiper-prev {
  left: 0;
}
.swiper-next:disabled,
.swiper-prev:disabled {
  opacity: 0.5;
  cursor: initial;
}
.categories-carousel {
  width: 90%;
}
.category-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #787878;
  font-size: 16px;
  font-style: normal;
  text-align: left;
  font-weight: 400;
  padding: 0 0px 15px 0px;
  line-height: normal;
}

.category-button--selected {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  line-height: normal;
  position: relative;
}
.category-button--selected::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  border-radius: 4px;
  z-index: 3;
  background: var(--gradient-logo);
  transition: 3s ease-in-out;
}

.sort-wrapper {
  position: relative;
  width: 100%;
  height: 44px;
}
.sort {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
}

.sort-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 44px;
  background: var(--gradient-logo);
  border-radius: 16px 0px 0px 16px;
  padding: 0 16px;
}

.sort-title-text {
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.sort-content {
  border: 1px solid #a1a1a1;
  border-radius: 0px 16px 16px 0px;
  background-color: white;
  flex-grow: 1;
  z-index: 4;
}

.sort-header {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  height: 42px;
  padding: 0 16px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
}
.sort-header--selected {
  color: #919191;
}

.sort-line {
  width: 100%;
  height: 2px;
  background: var(--gradient-logo);
  opacity: 0.7;
}
.sort-options-wrapper {
  overflow: hidden;
  transition: height 0.3s ease-out;
  height: 0;
  border-radius: 0px 0 16px 0px;
}
.sort-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px 12px;
  cursor: pointer;
  background: #fff;
}
.sort-option {
  color: #919191;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  padding: 0;
}
.sort-option:hover,
.sort-option:focus,
.category-button:hover {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
  .sort-wrapper {
    height: 50px;
  }
  .sort-title {
    height: 50px;
  }

  .sort-title-text {
    font-size: 16px;
  }

  .sort-header {
    height: 48px;
    font-size: 16px;
  }

  .sort-option {
    font-size: 16px;
  }
  .category-button {
    white-space: nowrap;
  }
}

@media (min-width: 1200px) {
  .content-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .categories {
    width: 54%;
  }
  .sort-wrapper {
    width: 42%;
  }
}
</style>
