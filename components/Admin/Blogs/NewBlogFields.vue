<script setup lang="ts">
import { Collapse } from 'vue-collapsed';

const props = defineProps({
  headline: {
    type: String,
    required: false,
    default: '',
  },
  errorHeadline: {
    type: String,
    required: false,
    default: '',
  },
  errorImage: {
    type: String,
    required: false,
    default: '',
  },
  imagePreview: {
    type: Object as PropType<{ src: string; alt: string }>,
    required: false,
    default: () => {
      return {
        src: '',
        alt: '',
      };
    },
  },
  url: {
    type: String,
    required: false,
    default: '',
  },
  errorUrl: {
    type: String,
    required: false,
    default: '',
  },
  metaTitle: {
    type: String,
    required: false,
    default: '',
  },
  metaDescription: {
    type: String,
    required: false,
    default: '',
  },
});
const emits = defineEmits([
  'onUpdate',
  'onUpdateImagePreview',
  'onUpdateImage',
]);

const isLoading = ref(false);
const isMetaCollapsed = ref(false);
const errorUpload = ref('');
const croppedFileName = computed(() => {
  const fileName = props.imagePreview.alt;
  const fileNameLength = fileName.length;
  const croppedFileNameLength = 20;
  if (fileNameLength > croppedFileNameLength) {
    return `${fileName.slice(0, croppedFileNameLength)}...`;
  }
  return fileName;
});

const generateSlug = useDebounceFn((headline: string) => {
  const slug = headline
    .normalize('NFKD')
    .replace(/[\u0300-\u036F]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  emits('onUpdate', {
    url: slug,
  });
}, 500);
const updateMetaTitle = useDebounceFn((headline: string) => {
  emits('onUpdate', {
    metaTitle: headline,
  });
}, 500);

const updateHeadline = (value: string) => {
  emits('onUpdate', {
    headline: value,
  });
  updateMetaTitle(value);
  generateSlug(value);
};
const updateUrl = (value: string) => {
  emits('onUpdate', {
    url: value,
  });
};

const updateTitle = (value: string) => {
  emits('onUpdate', {
    metaTitle: value,
  });
};

const updateDescription = (value: string) => {
  emits('onUpdate', {
    metaDescription: value,
  });
};

const toggleMeta = () => {
  isMetaCollapsed.value = !isMetaCollapsed.value;
};

const handleUploadImage = (event: Event) => {
  isLoading.value = true;

  emits('onUpdateImage', null);
  emits('onUpdateImagePreview', {
    src: '',
    alt: '',
  });
  errorUpload.value = '';

  const inputElement = event.target as HTMLInputElement;
  const file = inputElement.files?.[0];

  if (!file) {
    isLoading.value = false;
    return;
  }
  // Check if the file size exceeds 5048 kilobytes (1 KB = 1024 bytes)
  const maxSizeInKilobytes = 2048;
  const maxSizeInMegabytes = maxSizeInKilobytes / 1024;
  if (file.size / 1024 > maxSizeInKilobytes) {
    errorUpload.value = `The file size must not exceed ${maxSizeInMegabytes.toFixed(2)} MB.`;
    isLoading.value = false;
    return;
  }

  // Check image type (allowed extensions: .jpg, .jpeg, .png, .svg)
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'svg'];
  const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

  if (!allowedExtensions.includes(fileExtension)) {
    errorUpload.value
      = 'Invalid file type. Please upload a .jpg, .jpeg, .png, or .svg file.';
    isLoading.value = false;
    return;
  }

  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        emits('onUpdateImage', file);
        emits('onUpdateImagePreview', {
          src: reader.result as string,
          alt: file.name,
        });
        isLoading.value = false;
      };
    };
    reader.onerror = (error) => {
      isLoading.value = false;
      errorUpload.value = error.toString();
    };
  }
  isLoading.value = false;
};
const finalImageError = computed(() => {
  if (errorUpload.value) {
    return errorUpload.value;
  }
  if (props.errorImage) {
    return props.errorImage;
  }
  return '';
});
</script>

<template>
  <div class="fields">
    <div class="field-title">
      <IconsAdminContentText />
      <p class="field-title-text">
        {{ $t("admin.newBlog.headline") }}
      </p>
    </div>
    <AdminInput
      :model-value="headline"
      class="field-input"
      :type="'text'"
      :name="'headline'"
      :placeholder="$t('admin.newBlog.placeholder')"
      :error-message="errorHeadline"
      @update:model-value="updateHeadline"
    />
    <div class="meta-tags">
      <div class="field-title">
        <button
          type="button"
          aria-label="toggle meta"
          class="meta-toggle-button"
          @click="toggleMeta"
        >
          <span class="field-title-text"> Meta </span>
          <IconsGeneralCollapseExpand
            :is-rotated="isMetaCollapsed"
            :is-gradient="true"
            :size="'24'"
          />
        </button>
      </div>
      <Collapse :when="!isMetaCollapsed">
        <div class="meta-content">
          <div class="field-title">
            <IconsAdminResearch />
            <p class="field-title-text">
              {{ $t("admin.newBlog.url") }}
            </p>
          </div>
          <AdminInput
            :model-value="url"
            class="meta-input"
            :type="'text'"
            :name="'slug'"
            :placeholder="$t('admin.newBlog.placeholder')"
            :error-message="errorUrl"
            @update:model-value="updateUrl"
          />
          <div class="field-title">
            <IconsAdminResearch />
            <p class="field-title-text">
              {{ $t("admin.newBlog.metaTitle") }}
            </p>
          </div>
          <AdminInput
            :model-value="metaTitle"
            class="meta-input"
            :type="'text'"
            :name="'title'"
            :placeholder="$t('admin.newBlog.placeholder')"
            @update:model-value="updateTitle"
          />
          <div class="field-title">
            <IconsAdminResearch />
            <p class="field-title-text">
              {{ $t("admin.newBlog.metaDescription") }}
            </p>
          </div>
          <AdminInput
            :model-value="metaDescription"
            class="meta-input"
            :type="'text'"
            :name="'description'"
            :placeholder="$t('admin.newBlog.placeholder')"
            @update:model-value="updateDescription"
          />
        </div>
      </Collapse>
    </div>
    <div class="field-title">
      <IconsAdminImage :is-gradient="true" />
      <p class="field-title-text">
        {{ $t("admin.newBlog.mainImage") }}
      </p>
    </div>
    <AdminFileUpload
      :id="'new-blog-image'"
      :text="$t('admin.newBlog.uploadImage')"
      :accept="'.jpg, .jpeg, .png, .svg'"
      :is-loading="isLoading"
      :disabled="isLoading"
      :error-message="finalImageError"
      @on-file-change="handleUploadImage"
    >
      <template #icon>
        <IconsAdminImage color="white" />
      </template>
      <template #gradient-icon>
        <IconsLoading v-if="isLoading" />
        <IconsAdminImage v-else :is-gradient="true" />
      </template>
    </AdminFileUpload>

    <div class="field-image-wrapper">
      <p v-if="imagePreview.src" class="field-image-name">
        {{ croppedFileName }}
      </p>
      <img
        v-if="imagePreview.src"
        class="field-image"
        :src="imagePreview.src"
        :alt="imagePreview.alt"
      />
    </div>
  </div>
</template>

<style scoped>
.fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
}

.field-title {
  display: flex;
  align-items: center;
  gap: 16px;
}

.field-title-text {
  font-size: 20px;
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
}

.field-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background: #d9d9d9;
  height: 300px;
}

.field-image-name {
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 4px 8px;
  border-radius: 60px;
  background: #fff;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.field-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate3d(0, 0, 1px);
  width: 100%;
  border-radius: 8px;
}
.meta-tags {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
}
.meta-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.meta-toggle-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
