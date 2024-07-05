<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const props = defineProps({
  post: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
});
const localePath = useLocalePath();
const handleEdit = () => {
  navigateTo(localePath(`/admin/blog-edit?id=${props.post.id}`));
};
</script>

<template>
  <div class="post">
    <div class="post-content">
      <p class="post-title">
        {{ post.title }}
      </p>
      <p class="post-description">
        {{ post.excerpt }}
      </p>
      <p class="post-last-edited">
        <span>{{ $t("admin.blog.lastEdited") }}</span>
        {{ post.last_edited_date }}
      </p>
    </div>
    <button
      type="button"
      aria-label="Edit"
      :title="$t('admin.blog.edit')"
      class="edit-button"
      @click="handleEdit"
    >
      <span class="edit-button-inner">
        <IconsAdminEdit class="edit-button-icon" :color="'white'" />
        <IconsAdminEditGradient
          :linear-id="String(post.id)"
          class="edit-button-icon-gradient"
        />
      </span>
    </button>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
}
.post-content {
  width: 90%;
  padding: 4px 8px;
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

.post-last-edited {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.3;
}
.edit-button {
  height: 100%;
  border: none;
  padding: 3px;
  background: var(--gradient-logo);
  border-radius: 0 8px 8px 0;
}
.edit-button:hover {
  background: var(--gradient-logo-hover);
}
.edit-button-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2px;
  border-radius: 0 8px 8px 0;
}
.edit-button:active .edit-button-inner {
  background: #fff;
}
.edit-button:active .edit-button-icon,
.edit-button-icon-gradient {
  display: none;
}
.edit-button:active .edit-button-icon-gradient {
  display: block;
}
</style>
