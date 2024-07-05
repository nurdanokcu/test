<script setup lang="ts">
import { articles } from '~/data/articles';
import { type TypeBlog } from '~/types/blog';

const isLoading = ref(true);
const mediaArticles = ref<TypeBlog[]>([]);
const localePath = useLocalePath();
onMounted(() => {
  isLoading.value = false;
  mediaArticles.value = articles.data.slice(0, 6);
});
</script>

<template>
  <div class="articles">
    <h2 class="articles-title">
      {{ $t("admin.resources.articles") }}
    </h2>
    <div class="posts-lists">
      <div v-if="isLoading" class="drafts-loading">
        <AdminLoadingBoxes :amount="6" height="72px" />
      </div>
      <TransitionGroup
        v-if="mediaArticles.length > 0"
        tag="ul"
        name="fade"
        class="articles-list"
      >
        <AdminResourcesListItem
          v-for="item in mediaArticles"
          :key="String(item.id)"
          :item="item"
          :edit-path="localePath(`/admin/dashboard`)"
        />
      </TransitionGroup>
    </div>
    <CommonButtonGradientFilled
      :text="$t('admin.resources.allArticles')"
      :padding="'16px'"
      :border-radius="'0px 0px 16px 16px'"
      :font-options="{ textTransform: 'uppercase' }"
      :is-link="true"
      :path="localePath('/admin/resources/articles')"
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
.articles {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
  height: 100%;
}

.articles-title {
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

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
}
</style>
