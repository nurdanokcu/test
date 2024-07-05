<script setup lang="ts">
import { type TypeDropdownOption } from '~/types/privateBlog';

const { fetchAllCategories } = blogApi();
const { user } = useAuth();

const props = defineProps({
  selectedCategory: {
    type: Object as PropType<TypeDropdownOption>,
    required: true,
  },
  errorRequired: {
    type: String,
    required: false,
    default: '',
  },
  selectedLanguage: {
    type: String,
    required: true,
  },
  completedDe: {
    type: Boolean,
    required: false,
    default: false,
  },
  completedEn: {
    type: Boolean,
    required: false,
    default: false,
  },
  selectedDate: {
    type: [String, Date],
    required: false,
    default: '',
  },
});

const emits = defineEmits(['onSelect', 'onSelectLanguage', 'onSelectDate']);
const options = ref<TypeDropdownOption[]>([]);
const isLoading = ref(true);
const errorMessage = ref('');
const localePath = useLocalePath();
const { locale } = useI18n();

const languageItems = computed(() => [
  {
    label: 'English',
    value: 'en',
    isActive: props.selectedLanguage === 'en',
    isCompleted: props.completedEn,
  },
  {
    label: 'Deutsch',
    value: 'de',
    isActive: props.selectedLanguage === 'de',
    isCompleted: props.completedDe,
  },
]);
const handleFetchCategories = async (locale: string) => {
  isLoading.value = true;
  try {
    const response = await fetchAllCategories(locale);
    options.value = response.data;
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
      return;
    }
    errorMessage.value = error.data?.message;
  }
};

const handleSelect = (value: TypeDropdownOption) => {
  emits('onSelect', value);
};
const handleSelectDate = (value: string) => {
  emits('onSelectDate', value);
};
onMounted(async () => {
  if (!user.value) {
    return;
  }
  if (options.value.length > 0) {
    isLoading.value = false;
    return;
  }
  if (options.value.length === 0 && user.value.role !== 'admin') {
    await handleFetchCategories(locale.value);
  }
});
const handleBack = () => {
  navigateTo(localePath('/admin/dashboard'));
};
</script>

<template>
  <div class="header">
    <div class="header-left">
      <button
        type="button"
        :aria-label="$t('admin.login.back')"
        :title="$t('admin.login.back')"
        class="header-back"
        @click="handleBack"
      >
        <IconsGeneralArrow
          class="arrow-icon"
          :direction="'left'"
          :is-gradient="true"
        />
      </button>
      <h1 class="header-title">
        {{ $t("admin.newBlog.addNew") }}
      </h1>
    </div>
    <div class="header-language">
      <button
        v-for="item in languageItems"
        :key="item.value"
        :class="[
          'header-language-button',
          {
            'header-language-button-active': item.isActive,
            'header-language--incomplete': !item.isCompleted,
            'header-language--complete': item.isCompleted,
          },
        ]"
        type="button"
        @click="$emit('onSelectLanguage', item.value)"
      >
        <span>
          {{ item.label }}
        </span>
        <span
          :class="[
            'header-language-line',
            {
              'header-language-line--active': item.isActive,
            },
          ]"
        ></span>
      </button>
    </div>
    <div class="header-category">
      <p class="header-category-text">
        {{ $t("admin.newBlog.dateOfPosting") }}:
      </p>
      <AdminDatePicker
        class="header-category-dropdown"
        :selected-date="selectedDate"
        @on-update="handleSelectDate"
      />
      <p class="header-category-text">
        {{ $t("admin.newBlog.topic") }}:
      </p>
      <AdminBlogsEditableCategories
        v-if="user?.role === 'admin'"
        class="header-category-dropdown"
        :options="options"
        :selected-option="selectedCategory"
        :error-message="errorRequired || errorMessage"
        :is-error-absolute="true"
        :placeholder="$t('admin.newBlog.chooseTopic')"
        @on-select="handleSelect"
      />
      <AdminDropdown
        v-else
        class="header-category-dropdown"
        :options="options"
        :selected-option="selectedCategory"
        :error-message="errorRequired || errorMessage"
        :is-error-absolute="true"
        :placeholder="$t('admin.newBlog.chooseTopic')"
        @on-select="handleSelect"
      />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-back {
  padding: 12px;
}
.header-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: var(
    --Gradient-Logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header-category {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-category-text {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.header-category-dropdown {
  width: 240px;
}
.header-language {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-language-button {
  color: var(--secondary-dark-blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.header-language--incomplete {
  color: var(--primary-orange);
}
.header-language-button-active {
  color: var(--secondary-dark-blue);
}
.header-language-line {
  display: block;
  width: 0;
  height: 3px;
  background: var(--gradient-logo);
  transition: width 0.3s ease-in-out;
}
.header-language-line--active {
  width: 100%;
}
.header-language--complete {
  color: var(--primary-green);
}
</style>
