<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const { deleteBlogPost, toggleFeatured } = privateBlogApi();
const localePath = useLocalePath();
const props = defineProps({
  post: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
  featuredPostLength: {
    type: Number,
    required: true,
  },
});
const errorMessage = ref('');
const isLoading = ref(false);
const isLoadingFeatured = ref(false);
const isNotificationVisible = ref(false);
const emits = defineEmits(['onFetchBlogs']);
const { t } = useI18n();

const isFeatured = computed(() => {
  return props.post.is_featured ? 1 : 0;
});

const toggleNotification = () => {
  isNotificationVisible.value = !isNotificationVisible.value;
};

const handleEdit = () => {
  navigateTo(`${localePath('/admin/blog-edit')}?id=${props.post.id}`);
};
const handleDeletePost = async () => {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    await deleteBlogPost(props.post.id || 0);
    emits('onFetchBlogs');
    isLoading.value = false;
    isNotificationVisible.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
const updateFeatured = async (newValue: 0 | 1) => {
  errorMessage.value = '';
  isLoadingFeatured.value = true;
  const blogId = props.post.id || 0;
  try {
    await toggleFeatured(blogId, newValue);
    isLoadingFeatured.value = false;
    emits('onFetchBlogs');
  } catch (error: any) {
    isLoadingFeatured.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
const handleSetFeatured = async () => {
  errorMessage.value = '';
  const length = props.featuredPostLength;

  if (length >= 2 && !isFeatured.value) {
    errorMessage.value = t('admin.blog.featuredNotification');
    return;
  }
  if (isFeatured.value) {
    await updateFeatured(0);
  } else {
    await updateFeatured(1);
  }
};

watch(
  () => props.post,
  () => {
    isNotificationVisible.value = false;
    errorMessage.value = '';
  },
);
watch(
  () => props.featuredPostLength,
  () => {
    errorMessage.value = '';
  },
);
</script>

<template>
  <li class="post-wrapper">
    <div class="post">
      <div class="post-left">
        <AdminBlogsPostStatus :status="post.status" />
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
      </div>
      <div class="post-right">
        <button
          type="button"
          :aria-label="
            isFeatured
              ? $t('admin.blog.removeFeatured')
              : $t('admin.blog.setFeatured')
          "
          :title="
            isFeatured
              ? $t('admin.blog.removeFeatured')
              : $t('admin.blog.setFeatured')
          "
          class="post-star"
          @click="handleSetFeatured"
        >
          <IconsLoading v-if="isLoadingFeatured" />
          <IconsAdminStarGradient v-else :is-filled="Boolean(isFeatured)" />
        </button>
        <div class="post-buttons">
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
          <button
            type="button"
            :aria-label="$t('admin.manageUser.delete')"
            :title="$t('admin.manageUser.delete')"
            class="post-delete"
            @click="toggleNotification"
          >
            <IconsGeneralDeleteSweep class="delete-icon" />
          </button>
        </div>
      </div>
      <AdminDeleteNotification
        v-if="isNotificationVisible"
        :status="post.status"
        :excerpt="post.excerpt"
        :title="post.title"
        :is-loading="isLoading"
        :question="$t('admin.newBlog.deleteNotification')"
        :last-edited="post.last_edited_date || ''"
        @on-close="toggleNotification"
        @on-delete="handleDeletePost"
      />
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage"
        class="error-message"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
  </li>
</template>

<style scoped>
.post-wrapper {
  list-style: none;
  width: 100%;
}
.post {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
}
.post-left {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 8px;
  width: calc(100% - 74px);
}
.post-right {
  display: flex;
  gap: 8px;
}
.post-buttons {
  display: flex;
  flex-direction: column;
}
.post-content {
  width: calc(100% - 96px);
  padding: 16px 8px;
}
.post-notification {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
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
  border-radius: 0 8px 0 0;
}
.edit-button-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2px;
  background: #fff;
  border-radius: 0 8px 0 0;
  transition: all 0.2s ease;
}
.edit-button:hover .edit-button-inner {
  background: var(--primary-white-hover);
}
.edit-button:active .edit-button-inner {
  background: var(--gradient-logo);
}
.edit-button-icon,
.edit-button:active .edit-button-icon-gradient {
  display: none;
}

.edit-button:active .edit-button-icon {
  display: block;
}
.post-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0 0 8px 0px;
  background: rgba(221, 61, 12, 0.2);
  padding: 0 4px;
  transition: all 0.2s ease;
}

.post-delete:hover {
  background-color: rgba(221, 61, 12, 0.35);
}

.post-delete:active {
  background-color: rgba(221, 61, 12, 0.5);
}

.delete-icon {
  width: 24px;
  height: 24px;
}
.error-message {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>
