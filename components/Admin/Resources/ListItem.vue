<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  editPath: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['onDelete']);
const isNotificationVisible = ref(false);

const localePath = useLocalePath();
const handleEdit = () => {
  navigateTo(localePath(props.editPath));
};
const toggleNotification = () => {
  isNotificationVisible.value = !isNotificationVisible.value;
};
const handleDeletePost = () => {
  emits('onDelete', props.item.id);
  isNotificationVisible.value = false;
};
</script>

<template>
  <li class="post-wrapper">
    <div class="post">
      <div class="post-left">
        <AdminBlogsPostStatus :status="item.status" />
        <div class="post-content">
          <p class="post-title">
            {{ item.title }}
          </p>
          <p class="post-description">
            {{ item.excerpt }}
          </p>
          <p class="post-last-edited">
            <span>{{ $t("admin.blog.lastEdited") }}</span>
            {{ item.last_edited_date }}
          </p>
        </div>
      </div>
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
              :linear-id="String(item.id)"
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
      <AdminDeleteNotification
        v-if="isNotificationVisible"
        :status="item.status"
        :excerpt="item.excerpt"
        :title="item.title"
        :is-loading="isLoading"
        :question="$t('admin.newBlog.deleteNotification')"
        :last-edited="item.last_edited_date || ''"
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
  box-sizing: border-box;
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
  width: calc(100% - 34px);
}
.post-buttons {
  display: flex;
  flex-direction: column;
}
.post-content {
  padding: 16px 8px;
  width: calc(100% - 96px);
}
.post-title,
.post-description,
.post-last-edited {
  white-space: normal;
  overflow-wrap: break-word;
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
.notification-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
}

.notification-delete {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--secondary-orange-dark);
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: all 0.2s ease;
}
.notification-delete:hover {
  background: var(--red-error);
}
.notification-delete--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.error-message {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>
