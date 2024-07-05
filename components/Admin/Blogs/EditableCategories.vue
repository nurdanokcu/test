<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import {
  type TypeDropdownOption,
  type TypeEditableCategory,
} from '~/types/privateBlog';

const { fetchAllCategories } = blogApi();
const { createCategory } = privateBlogApi();
defineProps({
  selectedOption: {
    type: Object as PropType<TypeDropdownOption>,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  errorMessage: {
    type: String,
    required: false,
    default: '',
  },
});

const emits = defineEmits(['onSelect']);
const { locale } = useI18n();

const showDropdown = ref(false);
const isLoading = ref(false);
const isLoadingNewCategory = ref(false);
const errorSave = ref('');
const optionsEn = ref<TypeDropdownOption[]>([]);
const optionsDe = ref<TypeDropdownOption[]>([]);
const isAdding = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleSelect = (value: TypeEditableCategory) => {
  const newName = locale.value === 'en' ? value.nameEn : value.nameDe;
  emits('onSelect', { id: value.id, name: newName });
  showDropdown.value = false;
};

const dropdownHandler = () => {
  showDropdown.value = false;
};
const handleFetchCategories = async (locale: string) => {
  isLoading.value = true;
  try {
    const response = await fetchAllCategories(locale);
    isLoading.value = false;
    return response.data;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorSave.value = 'Something went wrong. Please try again later.';
      return;
    }
    errorSave.value = error.data?.message;
  }
};

const finalOptions = computed(() => {
  if (optionsEn.value.length > 0) {
    const newOptions = optionsEn.value.map((option) => {
      const optionDe = optionsDe.value.find(
        deOption => deOption.id === option.id,
      );
      return {
        id: option.id,
        nameEn: option.name,
        nameDe: optionDe?.name || '',
      };
    });
    return newOptions;
  } else {
    return [];
  }
});

const handleEdit = (id: number, newOption: TypeEditableCategory) => {
  const index = optionsDe.value.findIndex(option => option.id === id);
  optionsDe.value[index] = {
    id: newOption.id,
    name: newOption.nameDe,
  };
  const indexEn = optionsEn.value.findIndex(option => option.id === id);
  optionsEn.value[indexEn] = {
    id: newOption.id,
    name: newOption.nameEn,
  };
};

const toggleAdding = () => {
  isAdding.value = !isAdding.value;
};
const handleAddCategory = async (nameEn: string, nameDe: string) => {
  isLoadingNewCategory.value = true;
  try {
    const response = await createCategory({
      name: {
        en: nameEn,
        de: nameDe,
      },
    });
    optionsEn.value.unshift({
      id: response.data.id,
      name: nameEn,
    });
    optionsDe.value.unshift({
      id: response.data.id,
      name: nameDe,
    });
    isAdding.value = false;
    isLoadingNewCategory.value = false;
  } catch (error: any) {
    isLoadingNewCategory.value = false;
    if (error.statusCode === 500) {
      errorSave.value = 'Something went wrong. Please try again later.';
      return;
    }
    errorSave.value = error.data?.message;
  }
};

onMounted(async () => {
  if (optionsEn.value.length > 0) {
    isLoading.value = false;
    return;
  }
  if (optionsEn.value.length === 0) {
    optionsEn.value = (await handleFetchCategories('en')) || [];
    optionsDe.value = (await handleFetchCategories('de')) || [];
  }
});
</script>

<template>
  <div class="dropdown">
    <div class="dropdown-content">
      <div
        :class="[
          'dropdown-button-wrapper',
          {
            'dropdown-button-wrapper--error': errorMessage !== '',
          },
        ]"
      >
        <div class="toggle-wrapper">
          <button
            name="dropdown-toggle"
            type="button"
            aria-label="toggle dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="dropdown-toggle-button"
            @click.stop="toggleDropdown"
          >
            <span v-if="selectedOption.name">
              {{ selectedOption.name }}
            </span>
            <span v-else class="dropdown-toggle-placeholder">
              {{ placeholder }}
            </span>
            <IconsGeneralCollapseExpand
              :is-rotated="showDropdown"
              :is-gradient="true"
              :size="'24'"
            />
          </button>
        </div>
      </div>
      <CommonTransitionDropdown>
        <div
          v-if="showDropdown"
          v-on-click-outside.bubble="dropdownHandler"
          class="dropdown-wrapper"
        >
          <div class="dropdown-options">
            <CommonTransitionError>
              <CommonErrorMessage
                v-if="errorSave !== ''"
                class="error-message"
                :error-message="errorSave"
              />
            </CommonTransitionError>
            <TransitionGroup name="fade">
              <AdminBlogsEditCategory
                v-for="option in finalOptions"
                :key="option.id"
                :option="option"
                @on-edit="handleEdit"
                @on-select="handleSelect"
              />
            </TransitionGroup>
          </div>
          <div class="add-more-wrapper">
            <AdminBlogsEditCategoryInputs
              v-if="isAdding"
              :is-loading="isLoadingNewCategory"
              @on-save="handleAddCategory"
              @on-back="toggleAdding"
            />
            <button
              v-else
              class="add-button"
              type="button"
              @click="toggleAdding"
            >
              {{ `${$t("admin.newBlog.addMore")} +` }}
            </button>
          </div>
        </div>
      </CommonTransitionDropdown>
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage !== ''"
        :class="['input-error', 'input-error--absolute']"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-content {
  position: relative;
  width: 100%;
}

.dropdown-button-wrapper {
  padding-bottom: 2px;
  border-radius: 3px;
  background: var(--gradient-logo);
}

.dropdown-button-wrapper--error {
  background: var(--red-error);
}
.toggle-wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: var(--primary-almost-white);
  border-radius: 2px;
  padding: 8px 16px;
}

.dropdown-toggle-button {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

.dropdown-toggle-placeholder {
  opacity: 0.35;
}
.dropdown-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  z-index: 5;
  width: 100%;
  border-radius: 8px;
}
.dropdown-options {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
}

.input-error {
  padding-top: 8px;
}
.input-error--absolute {
  position: absolute;
  top: 100%;
}
.add-button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.add-button:hover {
  background: #eee5f4;
}
.add-more-wrapper {
  padding: 8px 0;
}
.error-message {
  padding: 4px 16px;
}

/* Styles for the scrollbar */
.dropdown-options::-webkit-scrollbar {
  width: 10px;
}

.dropdown-options::-webkit-scrollbar-track {
  background: var(--primary-almost-white);
}
.dropdown-options::-webkit-scrollbar-thumb {
  background-color: #b8a9c9;
  border-radius: 4px;
  border: 2px solid var(--primary-almost-white);
}

.dropdown-options::-webkit-scrollbar-thumb:hover {
  background: #a394b9;
}
</style>
