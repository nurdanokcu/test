<script setup lang="ts">
defineProps({
  question: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  lastEdited: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(['onClose', 'onDelete']);
const closeNotification = () => {
  emits('onClose');
};

const handleDeletePost = () => {
  emits('onDelete');
};
</script>

<template>
  <CommonPopup>
    <SettingsNotification :text="question">
      <div class="post-notification">
        <AdminBlogsPostStatus :status="status" />
        <p class="post-title">
          {{ title }}
        </p>
        <p class="post-description">
          {{ excerpt }}
        </p>
        <p class="post-last-edited">
          <span>{{ $t("admin.blog.lastEdited") }}</span>
          {{ lastEdited }}
        </p>
      </div>
      <div class="notification-buttons">
        <SettingsBackButton @on-click="closeNotification" />
        <button
          type="button"
          :class="[
            'notification-delete',
            { 'notification-delete--disabled': isLoading },
          ]"
          :disabled="isLoading"
          :aria-label="$t('admin.manageUser.delete')"
          :title="$t('admin.manageUser.delete')"
          @click="handleDeletePost"
        >
          <span v-if="isLoading">
            {{ $t("admin.manageUser.deleting") }}
          </span>
          <span v-else>
            {{ $t("admin.manageUser.delete") }}
          </span>
          <IconsLoading v-if="isLoading" color="white" />
          <IconsGeneralDelete v-else color="white" />
        </button>
      </div>
    </SettingsNotification>
  </CommonPopup>
</template>

<style scoped>
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
</style>
