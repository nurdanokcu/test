<script setup lang="ts">
import { type TypeBlog, type PaginationLink } from '~/types/blog';
import { articles } from '~/data/articles';

const localePath = useLocalePath();
// States
const isLoadingInitial = ref(true);
const paginationLinks = ref<PaginationLink[]>([]);
const mediaArticles = ref<TypeBlog[]>([]);
const prevLink = ref<string | null>('');
const nextLink = ref<string | null>('');
const featuredBlogs = ref<TypeBlog[]>([]);
const loadPage = () => {};
onMounted(() => {
  paginationLinks.value = articles.meta.links;
  prevLink.value = articles.links.prev;
  nextLink.value = articles.links.next;
  isLoadingInitial.value = false;
  mediaArticles.value = articles.data.slice(0, 6);
});
</script>

<template>
  <div class="posts-wrapper">
    <div id="admin-blog-posts-hidden" class="posts-hidden"></div>
    <div class="posts">
      <div class="posts-header">
        <h1 class="posts-title">
          {{ $t("admin.resources.educational") }}
        </h1>
      </div>
      <div v-if="isLoadingInitial" class="drafts-loading">
        <AdminLoadingBoxes :amount="6" height="72px" />
      </div>
      <div class="posts-content">
        <div class="posts-lists">
          <TransitionGroup
            v-if="mediaArticles.length > 0"
            tag="ul"
            name="fade"
            class="list"
          >
            <AdminBlogsPostsListItem
              v-for="post in mediaArticles"
              :key="String(post.id)"
              :post="post"
              :featured-post-length="featuredBlogs.length"
            />
          </TransitionGroup>
        </div>
        <BlogPagination
          :pagination-links="paginationLinks"
          :prev-link="prevLink"
          :next-link="nextLink"
          @on-click-page="loadPage"
        />
      </div>
    </div>
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
.posts-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #ffffff;
  width: 100%;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  min-height: calc(100vh - var(--nav-top-height) - 48px);
}
.posts-hidden {
  position: absolute;
  top: -80px;
  opacity: 0;
  pointer-events: none;
}
.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
}
.posts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.posts-content,
.posts-lists {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}
.posts-title {
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
  width: fit-content;
  text-transform: capitalize;
}
.list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 0;
  margin: 0;
}
.separator-line {
  width: 100%;
  height: 1px;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  opacity: 0.2;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
.fade-leave-active {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
