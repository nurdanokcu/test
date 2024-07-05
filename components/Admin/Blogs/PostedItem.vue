<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const props = defineProps({
  post: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
});

const themeColor = computed(() => {
  if (props.post.category && props.post.category.name) {
    return decidePostTheme(props.post.category?.name);
  } else {
    return 'gradient';
  }
});
const styleObjectText = computed(() => {
  if (themeColor.value === 'gradient') {
    return `background: var(--Gradient-Logo, linear-gradient(112deg, #2400FF 0.23%, #EB6F0E 101.08%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`;
  } else {
    return {
      color: themeColor.value,
    };
  }
});

const publishDate = computed(() => {
  if (!props.post.published_at) {
    return '';
  }
  const date = new Date(props.post.published_at);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
});
</script>

<template>
  <div class="post">
    <div class="post-content">
      <div class="post-first-row">
        <p class="post-time">
          <span v-if="publishDate">
            {{ `${$t("admin.blog.posted")} ${publishDate}` }}
          </span>
        </p>
        <p
          v-if="post.category"
          :style="styleObjectText"
          class="post-category"
        >
          {{ post.category.name }}
        </p>
      </div>
      <p class="post-title">
        {{ post.title }}
      </p>
      <p class="post-description">
        {{ post.excerpt }}
      </p>
    </div>
    <AdminBlogsViews
      class="post-views"
      :border-radius="'0 8px 8px 0'"
      :views="post.total_views || 0"
      :color="themeColor"
      :has-chart-icon="false"
    />
  </div>
</template>

<style scoped>
.post {
  display: flex;
  border-radius: 8px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
}
.post-content {
  width: calc(100% - 110px);
  padding: 4px 8px;
}
.post-views {
  width: 110px;
}
.post-first-row {
  display: flex;
  gap: 8px;
  justify-content: space-between;
}
.post-time {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.3;
}
.post-category {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.post-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.post-description {
  color: var(--secondary-dark-blue);
  width: 100%;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
</style>
