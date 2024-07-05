<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const { getDraftPosts } = privateBlogApi();
const { locale } = useI18n();

const isLoading = ref(true);
const errorMessage = ref('');
const drafts = ref<TypeBlog[]>([]);
const localePath = useLocalePath();

const handleFetchDrafts = async (blogLocale: string) => {
  isLoading.value = true;
  try {
    const response = await getDraftPosts(blogLocale);
    drafts.value = response.data;
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
  if (drafts.value.length > 0) {
    isLoading.value = false;
    return;
  }

  if (drafts.value.length === 0) {
    await handleFetchDrafts(locale.value);
  }
});
</script>

<template>
  <div class="drafts">
    <p class="drafts-title">
      {{ $t("admin.blog.drafts") }}
    </p>
    <div v-if="isLoading" class="drafts-loading">
      <AdminLoadingBoxes
        v-if="isLoading"
        :amount="3"
        height="72px"
      />
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage"
        class="drafts-error"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
    <div v-if="drafts.length > 0 && !isLoading" class="drafts-content">
      <AdminBlogsDraftItem
        v-for="post in drafts"
        :key="String(post.id)"
        :post="post"
      />
    </div>
    <p v-if="drafts.length === 0 && !isLoading" class="no-drafts">
      {{ $t("admin.blog.noDrafts") }}
    </p>
    <CommonButtonGradientFilled
      :text="$t('admin.blog.createNew')"
      :padding="'16px'"
      :is-link="true"
      :border-radius="'0px 0px 16px 16px'"
      :path="localePath('/admin/blog-new')"
    >
      <template #icon>
        <IconsGeneralAdd color="white" />
      </template>
      <template #icon-gradient>
        <IconsGeneralAdd :is-gradient="true" />
      </template>
    </CommonButtonGradientFilled>
  </div>
</template>

<style scoped>
.drafts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding-top: 8px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.drafts-title {
  padding: 0 16px;
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
.drafts-loading {
  padding: 16px;
}
.drafts-error {
  padding: 0 16px;
}
.drafts-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  width: 100%;
  padding: 0 16px 16px;
}
.no-drafts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: rgba(0, 0, 0, 0.2);
}
</style>
