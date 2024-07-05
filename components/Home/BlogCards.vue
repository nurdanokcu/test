<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const { locale } = useI18n();
const { fetchFeaturedBlogs } = blogApi();

const isLoading = ref(true);
const errorMessage = ref('');
const blogs = ref<TypeBlog[]>([]);
const blogsLocaleParam = computed(() => {
  return locale.value === 'en' ? '' : 'de';
});

const getBlogContent = async () => {
  isLoading.value = true;
  const { data, error } = await fetchFeaturedBlogs(blogsLocaleParam.value);

  if (error.value) {
    isLoading.value = false;
    errorMessage.value = error.value.data.message;
    return;
  }
  if (data.value) {
    isLoading.value = false;
    blogs.value = data.value.data.slice(0, 2);
  }
};
await getBlogContent();
</script>

<template>
  <div class="blogs-cards-wrapper">
    <div v-if="isLoading" class="loading-items">
      <AdminLoadingBoxes
        class="loading-box"
        :height="'600px'"
        :amount="1"
      />
      <AdminLoadingBoxes
        class="loading-box"
        :height="'600px'"
        :amount="1"
      />
    </div>
    <div v-if="blogs.length > 0 && !isLoading" class="blog-cards">
      <HomeBlogCard
        v-for="blog in blogs"
        :key="String(blog.id)"
        class="blog-card"
        :blog="blog"
      />
    </div>
  </div>
</template>

<style scoped>
.blogs-cards-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.loading-items {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.loading-box {
  max-width: 380px;
}

.blog-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
}

.blog-card:nth-child(2),
.loading-box:nth-child(2) {
  display: none;
}

@media (min-width: 768px) {
  .blog-card:nth-child(2),
  .loading-box:nth-child(2) {
    display: block;
  }

  .blog-card {
    width: calc(50% - 12px);
  }
}

@media (min-width: 1024px) {
  .blog-cards {
    margin-bottom: 0;
  }

  .blog-card:nth-child(2),
  .loading-box:nth-child(2) {
    display: none;
  }
  .blog-card {
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .blog-card:nth-child(2),
  .loading-box:nth-child(2) {
    display: block;
  }

  .blog-card {
    width: calc(50% - 12px);
  }
}
</style>
