<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const { getScheduledPosts } = privateBlogApi();
const posts = ref<TypeBlog[]>([]);
const { locale } = useI18n();

const isLoading = ref(true);
const errorMessage = ref('');

const handleFetchPosts = async (blogLocale: string) => {
  isLoading.value = true;
  try {
    const response = await getScheduledPosts(blogLocale);
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

const updateSpecificPost = (post: TypeBlog) => {
  const index = posts.value.findIndex(p => p.id === post.id);
  if (index !== -1) {
    posts.value[index] = post;
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
  <div class="scheduled">
    <p class="scheduled-title">
      {{ $t("admin.blog.scheduled") }}
    </p>
    <AdminLoadingBoxes
      v-if="isLoading"
      :amount="5"
      :height="'132px'"
    />
    <CommonTransitionError>
      <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
    </CommonTransitionError>
    <div v-if="posts.length > 0 && !isLoading" class="scheduled-content">
      <div class="scheduled-actions">
        <AdminBlogsScheduledPost
          v-for="post in posts"
          :key="String(post.id)"
          :post="post"
          @on-update="updateSpecificPost"
        />
      </div>
    </div>
    <div v-if="!isLoading && posts.length === 0" class="no-scheduled">
      <p>
        {{ $t("admin.blog.noScheduled") }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.scheduled {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 16px;
  background: var(--gradient-logo);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.scheduled-title {
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.scheduled-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.no-scheduled {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.5;
}
</style>
