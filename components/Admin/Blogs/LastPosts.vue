<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const { getLastPostedPosts } = privateBlogApi();
const { locale } = useI18n();

const isLoading = ref(true);
const errorMessage = ref('');
const posts = ref<TypeBlog[]>([]);

const handleFetchPosts = async (blogLocale: string) => {
  isLoading.value = true;
  try {
    const response = await getLastPostedPosts(blogLocale);
    posts.value = response.data;
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

onMounted(async () => {
  if (posts.value.length > 0) {
    isLoading.value = false;
    return;
  }
  if (posts.value.length === 0) {
    await handleFetchPosts(locale.value);
  }
});
</script>

<template>
  <div class="posts">
    <p class="posts-title">
      {{ $t("admin.blog.lastPosted") }}
    </p>
    <AdminLoadingBoxes
      v-if="isLoading"
      :amount="5"
      height="72px"
    />
    <CommonTransitionError>
      <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
    </CommonTransitionError>
    <div v-if="posts.length > 0 && !isLoading" class="posts-content">
      <AdminBlogsPostedItem
        v-for="post in posts"
        :key="String(post.id)"
        :post="post"
      />
    </div>
  </div>
</template>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.posts-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: fit-content;
  background: var(
    --Gradient-Logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.posts-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>
