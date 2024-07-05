<script setup lang="ts">
import { type TypeEditableCategory } from '~/types/privateBlog';

const { t } = useI18n();
const { updateCategory } = privateBlogApi();
const props = defineProps({
  option: {
    type: Object as PropType<TypeEditableCategory>,
    required: true,
  },
});
const emits = defineEmits(['onSelect', 'onEdit']);
const isEditing = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const toggleEdit = () => {
  isEditing.value = !isEditing.value;
};

const handleSave = async (nameEn: string, nameDe: string) => {
  isLoading.value = true;
  try {
    await updateCategory(props.option.id, {
      name: {
        en: nameEn,
        de: nameDe,
      },
    });
    isLoading.value = false;
    isEditing.value = false;
    emits('onEdit', props.option.id, {
      id: props.option.id,
      nameEn,
      nameDe,
    });
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = t('admin.login.serverError');
      return;
    }
    errorMessage.value = error.data?.message;
  }
};
</script>

<template>
  <div class="option-wrapper">
    <div v-if="!isEditing" class="option-content">
      <button
        type="button"
        name="option"
        role="menuitem"
        aria-label="option"
        class="option"
        @click="$emit('onSelect', option)"
      >
        <span class="name-primary">
          {{ option.nameEn }}
        </span>
        <span class="name-secondary">
          {{ option.nameDe }}
        </span>
      </button>
      <button
        type="button"
        name="edit-button"
        aria-label="edit-button"
        class="edit-button"
        @click="toggleEdit"
      >
        <IconsAdminEdit :is-filled="true" class="edit-icon" />
      </button>
    </div>
    <AdminBlogsEditCategoryInputs
      v-else
      :name-en="option.nameEn"
      :is-loading="isLoading"
      :name-de="option.nameDe"
      @on-save="handleSave"
      @on-back="toggleEdit"
    />
  </div>
</template>

<style scoped>
.option-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.option {
  display: flex;
  flex-direction: column;
  line-height: normal;
  text-transform: capitalize;
  text-align: left;
  transition: all 0.3s ease;
  padding: 8px 16px;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-grow: 1;
}

.name-secondary {
  opacity: 0.3;
}

.option:hover {
  background: #eee5f4;
}
.edit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0;
  height: 20px;
}

.edit-icon {
  width: 20px;
  height: 20px;
  opacity: 0.3;
}
</style>
