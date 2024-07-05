<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';
import { type TypeArgsFilterPosts } from '~/types/privateBlog';

const { filterPosts, getFeaturedPosts } = privateBlogApi();

const posts = ref<TypeBlog[]>([]);
const featuredBlogs = ref<TypeBlog[]>([]);
const isLoading = ref(true);
const errorMessage = ref('');
const { locale } = useI18n();
const localePath = useLocalePath();

const handleFetchBlogs = async (args: TypeArgsFilterPosts) => {
  isLoading.value = true;
  try {
    const response = await filterPosts(args);
    posts.value = response.data.filter((post: TypeBlog) => !post.is_featured);
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
const handleFetchFeaturedBlogs = async (locale: string) => {
  try {
    const response = await getFeaturedPosts(locale);
    featuredBlogs.value = response.data;
  } catch (error: any) {
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
const handleFetchAllBlogs = async () => {
  await handleFetchBlogs({
    locale: locale.value,
    limit: '6',
  });
  await handleFetchFeaturedBlogs(locale.value);
};
onMounted(async () => {
  await handleFetchAllBlogs();
});
</script>

<template>
  <div class="blogs">
    <h2 class="blogs-title">
      {{ $t("admin.blog.blogPosts") }}
    </h2>
    <div class="posts-lists">
      <div v-if="isLoading" class="drafts-loading">
        <AdminLoadingBoxes :amount="6" height="72px" />
      </div>
      <TransitionGroup
        v-if="featuredBlogs.length > 0"
        tag="ul"
        name="fade"
        class="blogs-list"
      >
        <AdminBlogsPostsListItem
          v-for="post in featuredBlogs"
          :key="String(post.id)"
          :post="post"
          :featured-post-length="featuredBlogs.length"
          @on-fetch-blogs="handleFetchAllBlogs"
        />
      </TransitionGroup>
      <TransitionGroup
        v-if="posts.length > 0"
        tag="ul"
        name="fade"
        class="blogs-list"
      >
        <AdminBlogsPostsListItem
          v-for="post in posts"
          :key="String(post.id)"
          :post="post"
          :featured-post-length="featuredBlogs.length"
          @on-fetch-blogs="handleFetchAllBlogs"
        />
      </TransitionGroup>
    </div>
    <CommonButtonGradientFilled
      :text="$t('admin.resources.allBlogs')"
      :padding="'16px'"
      :border-radius="'0px 0px 16px 16px'"
      :font-options="{ textTransform: 'uppercase' }"
      :is-link="true"
      :path="localePath('/admin/resources/blog')"
    >
      <template #icon>
        <IconsGeneralAddCircled />
      </template>
      <template #icon-gradient>
        <IconsGeneralAddCircled />
      </template>
    </CommonButtonGradientFilled>
  </div>
</template>

<style scoped>
.blogs {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
  height: 100%;
}

.blogs-title {
  padding: 8px 16px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
}

.posts-lists {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 16px 16px;
  flex-grow: 1;
}

.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
}
</style>
