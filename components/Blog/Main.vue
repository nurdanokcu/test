<script setup lang="ts">
import {
  type TypeBlog,
  type TypeCategory,
  TypeKeysForSort,
  type PaginationLink,
} from '~/types/blog';

const { fetchAllBlogs, fetchAllCategoriesPublic, fetchBlogsByCategory }
  = blogApi();
const route = useRoute();
const router = useRouter();
const { locale, t } = useI18n();

const defaultCategory = {
  id: 0,
  name: t('theblog.viewAll'),
  slug: 'view_all',
};

type SortOption = {
  name: string;
  keyValue: TypeKeysForSort | '';
};

const sortOptions: SortOption[] = [
  {
    name: t('theblog.sortOption1'),
    keyValue: TypeKeysForSort.NAME,
  },
  {
    name: t('theblog.sortOption2'),
    keyValue: TypeKeysForSort.OLDEST,
  },
  {
    name: t('theblog.sortOption3'),
    keyValue: TypeKeysForSort.LATEST,
  },
];

// States
const blogs = ref<TypeBlog[]>([]);
const errorMessage = ref('');
const isLoading = ref(false);
const isLoadingInitial = ref(true);
const isLoadingCategories = ref(false);
const categories = ref<TypeCategory[]>([defaultCategory]);
const paginationLinks = ref<PaginationLink[]>([]);
const prevLink = ref<string | null>('');
const nextLink = ref<string | null>('');

// Computed Properties
const selectedCategory = computed<TypeCategory>(() => {
  const categoryQuery = route.query.category_id || 0;
  if (categoryQuery === 0) {
    return defaultCategory;
  }

  return (
    categories.value.find((item) => {
      return item.id === parseInt(categoryQuery as string, 10);
    }) || defaultCategory
  );
});

const blogsLocaleParam = computed(() => (locale.value === 'de' ? 'de' : ''));

const selectedSort = computed<SortOption>(() => {
  const sortQuery = route.query.sort || '';
  if (sortQuery === '') {
    return {
      name: t('theblog.sortOption3'),
      keyValue: TypeKeysForSort.LATEST,
    };
  }
  return (
    sortOptions.find(item => item.keyValue === sortQuery) || {
      name: '',
      keyValue: '',
    }
  );
});

const currentPage = computed(() => {
  const pageQuery = route.query.page || '1';
  return parseInt(pageQuery as string, 10);
});

// Functions
const getAllCategories = async () => {
  isLoadingCategories.value = true;
  categories.value = [defaultCategory];
  try {
    const response = await fetchAllCategoriesPublic(blogsLocaleParam.value);
    categories.value = [defaultCategory, ...response.data];
  } catch (error: any) {
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
      return;
    }
    errorMessage.value = error.data?.message;
  } finally {
    isLoadingCategories.value = false;
  }
};

const getBlogContent = async ({
  sort = '',
  page = 1,
  locale = blogsLocaleParam.value,
}) => {
  isLoading.value = true;
  try {
    const response = await fetchAllBlogs({
      sort,
      page,
      locale,
    });
    isLoading.value = false;
    blogs.value = response.data;
    paginationLinks.value = response.meta.links;
    prevLink.value = response.links.prev;
    nextLink.value = response.links.next;
  } catch (error: any) {
    isLoading.value = false;
    errorMessage.value = error.data?.message || error.message;
  }
};

const getBlogsByCategory = async ({
  id = 0,
  sort = '',
  page = 1,
  locale = blogsLocaleParam.value,
}) => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const response = await fetchBlogsByCategory({
      id,
      sort,
      page,
      locale,
    });
    isLoading.value = false;
    blogs.value = response.data;
    paginationLinks.value = response.meta.links;
    prevLink.value = response.links.prev;
    nextLink.value = response.links.next;
    if (response.data.length === 0) {
      errorMessage.value = 'No blogs found in this category';
    }
  } catch (error: any) {
    isLoading.value = false;
    errorMessage.value = error.data?.message || error.message;
  }
};

const handleSelectCategory = async (
  categoryId: number,
  categoryName: string,
) => {
  errorMessage.value = '';
  const formattedCategoryName = categoryName.toLowerCase().replace(' ', '_');

  if (categoryId === 0) {
    router.push({});
    await getBlogContent({
      locale: blogsLocaleParam.value,
      sort: selectedSort.value.keyValue,
    });
    return;
  }
  router.push({
    query: {
      category_id: categoryId,
      category: formattedCategoryName,
    },
  });
  await getBlogsByCategory({
    id: categoryId,
    sort: selectedSort.value.keyValue,
    locale: blogsLocaleParam.value,
  });
  const element = document.getElementById('blog-main-hidden');
  if (!element) {
    return;
  }
  element.scrollIntoView({ behavior: 'smooth' });
};

const handleSort = async (categoryId = 0, sortingKey: TypeKeysForSort) => {
  if (categoryId === 0) {
    await getBlogContent({
      sort: sortingKey,
      locale: blogsLocaleParam.value,
    });
  } else {
    await getBlogsByCategory({
      id: categoryId,
      sort: sortingKey,
      locale: blogsLocaleParam.value,
    });
  }
};

const loadPage = async (pageNumber: number) => {
  if (selectedCategory.value.id === 0) {
    await getBlogContent({
      sort: selectedSort.value.keyValue,
      page: pageNumber,
      locale: blogsLocaleParam.value,
    });
  } else {
    await getBlogsByCategory({
      id: selectedCategory.value.id,
      sort: selectedSort.value.keyValue,
      page: pageNumber,
      locale: blogsLocaleParam.value,
    });
  }
  const element = document.getElementById('blog-main-hidden');
  if (!element) {
    return;
  }
  element.scrollIntoView({ behavior: 'smooth' });
};
onMounted(async () => {
  if (blogs.value.length === 0) {
    isLoadingInitial.value = true;
    await getAllCategories();
    if (selectedCategory.value.id === 0) {
      await getBlogContent({
        sort: selectedSort.value.keyValue,
        page: currentPage.value,
        locale: blogsLocaleParam.value,
      });
    } else {
      await getBlogsByCategory({
        id: selectedCategory.value.id,
        sort: selectedSort.value.keyValue,
        page: currentPage.value,
        locale: blogsLocaleParam.value,
      });
    }
    isLoadingInitial.value = false;
  }
});

watch(
  () => locale.value,
  async () => {
    await getBlogContent({
      sort: selectedSort.value.keyValue,
      page: currentPage.value,
      locale: blogsLocaleParam.value,
    });
    await getAllCategories();
  },
);
</script>

<template>
  <main class="main">
    <div id="blog-main-hidden" class="main-hidden"></div>
    <BlogSortAndFilter
      class="main-filter"
      :categories="categories"
      :selected-category="selectedCategory"
      :selected-sort="selectedSort"
      :sort-options="sortOptions"
      @on-select-category="handleSelectCategory"
      @on-sort-blogs="handleSort"
    />
    <BlogLoadingScreen v-if="isLoadingInitial" />
    <div v-if="blogs.length > 0" class="main-content">
      <BlogBlogs
        :blogs="blogs"
        :all-categories="categories"
        @on-click-category="handleSelectCategory"
      />
      <BlogPagination
        :pagination-links="paginationLinks"
        :prev-link="prevLink"
        :next-link="nextLink"
        @on-click-page="loadPage"
      />
    </div>
    <button
      v-if="errorMessage"
      type="button"
      class="error-content"
    >
      <IconsGeneralError />
      {{ errorMessage }}
    </button>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  padding: 64px 24px 80px;
  max-width: var(--max-width-content);
  margin: auto;
}
.main-hidden {
  position: absolute;
  top: -100px;
}
.error-content {
  display: flex;
  align-items: center;
  gap: 16px;
}
.main-filter {
  margin-bottom: 64px;
}
.main-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
@media (min-width: 768px) {
  .main {
    padding: 30px 32px 80px;
  }
}

@media (min-width: 1024px) {
  .main {
    padding: 64px;
  }
  .main-filter {
    margin-bottom: 80px;
  }
}
</style>
