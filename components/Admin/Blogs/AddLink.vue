<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';

const linkUrl = ref('');
const linkPopup = ref(false);
const errorMessage = ref('');
const emits = defineEmits(['onSubmit']);

const togglePopup = () => {
  linkPopup.value = !linkPopup.value;
};
const handleBack = () => {
  linkPopup.value = false;
  linkUrl.value = '';
};

const handleAddVideo = () => {
  emits('onSubmit', linkUrl.value);
  togglePopup();
  linkUrl.value = '';
  errorMessage.value = '';
};
const dropdownHandler = () => {
  linkPopup.value = false;
};
</script>

<template>
  <div v-on-click-outside="dropdownHandler" class="youtube-video">
    <button
      type="button"
      :title="$t('admin.newBlog.addVideo')"
      :aria-label="$t('admin.newBlog.addVideo')"
      class="video-button"
      @click="togglePopup"
    >
      <i class="custom-link-icon"></i>
    </button>
    <CommonTransitionDropdown>
      <div v-if="linkPopup" class="video-popup">
        <p class="video-popup-title">
          {{ $t("admin.newBlog.addVideo") }}
        </p>
        <AdminInput
          v-model="linkUrl"
          type="url"
          name=""
          :error-message="errorMessage"
        />
        <div class="notification-buttons">
          <SettingsBackButton @on-click="handleBack" />
          <button
            type="button"
            class="notification-save"
            :aria-label="$t('admin.newBlog.add')"
            :title="$t('admin.newBlog.add')"
            @click="handleAddVideo"
          >
            <span>
              {{ $t("admin.newBlog.add") }}
            </span>
            <IconsGeneralAdd color="white" />
          </button>
        </div>
      </div>
    </CommonTransitionDropdown>
  </div>
</template>

<style scoped>
.youtube-video {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-popup {
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 8px;
  padding: 8px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
.video-popup-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--secondary-dark-blue);
}
.notification-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
}

.notification-save {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--primary-green);
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.notification-save:hover {
  background: var(--primary-green-hover);
}
</style>
