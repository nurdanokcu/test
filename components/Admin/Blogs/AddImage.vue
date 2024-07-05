<script setup lang="ts">
const { t } = useI18n();
const { uploadImageForBlogs } = privateBlogApi();

const emits = defineEmits(['onSubmit']);
const isLoading = ref(false);
const errorUpload = ref('');

const handleAddImage = async (imageFile: File) => {
  const formData = new FormData();
  formData.append('photo', imageFile);
  try {
    const response = await uploadImageForBlogs(formData);
    emits('onSubmit', response.data);
  } catch (error: any) {
    errorUpload.value = error.data?.message || error.message;
    isLoading.value = false;
  }
};
async function handleFileUpload(event: Event) {
  isLoading.value = true;
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
    errorUpload.value = `${t('admin.newBlog.exceededSize')} ${maxSizeInMegabytes.toFixed(2)} MB.`;
    isLoading.value = false;
    return;
  }

  // Check image type (allowed extensions: .jpg, .jpeg, .png, .svg)
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'svg', 'gif'];
  const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

  if (!allowedExtensions.includes(fileExtension)) {
    errorUpload.value = t('admin.newBlog.allowedExtensions');
    isLoading.value = false;
    return;
  }
  await handleAddImage(file);
  isLoading.value = false;
}
</script>

<template>
  <div class="file-input-wrapper">
    <input
      id="image-upload-blog"
      class="hide-file-input"
      type="file"
      :aria-label="$t('admin.newBlog.addImage')"
      :title="$t('admin.newBlog.addImage')"
      @change="handleFileUpload($event)"
    />
    <label class="file-label" for="image-upload-blog">
      <i class="custom-picture-icon"></i>
    </label>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorUpload !== ''"
        class="input-error"
        :error-message="errorUpload"
      />
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.file-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hide-file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border-width: 0;
}
.file-label {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 2px;
  min-width: 20px;
  border-radius: 2px;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
}
.input-error {
  position: absolute;
  top: 100%;
  z-index: 10;
  width: 200px;
  background-color: #fff;
  padding: 8px;
  border-radius: 4%;
}
</style>
