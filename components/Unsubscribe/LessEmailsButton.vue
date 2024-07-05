<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { TypeFrequency, type DataUnsubscribe } from '~/types/unsubscribe';

const { unsubscribe } = subscriptionApi();
const emits = defineEmits(['onUpdateFrequency']);
const { t } = useI18n();
const options = [
  {
    id: 'option-1',
    name: TypeFrequency.DAILY,
    label: t('unsubscribe.frequencyOption1'),
  },
  {
    id: 'option-2',
    name: TypeFrequency.WEEKLY,
    label: t('unsubscribe.frequencyOption2'),
  },
  {
    id: 'option-3',
    name: TypeFrequency.MONTHLY,
    label: t('unsubscribe.frequencyOption3'),
  },
];
type TypeDropdownOption = {
  id: string;
  name: TypeFrequency;
  label: string;
};

// State
const isDropdownVisible = ref(false);
const route = useRoute();
const errorMessage = ref('');
const isLoading = ref(false);
const token = route.query.confirmation_token as string;

// Functions
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
const dropdownHandler = () => {
  isDropdownVisible.value = false;
};

const handleSelect = async (option: TypeDropdownOption) => {
  isLoading.value = true;
  const finalData: DataUnsubscribe = {
    confirmation_token: token,
    frequency: option.name,
    allow_notification: true,
  };
  try {
    await unsubscribe(finalData);
  } catch (error: any) {
    errorMessage.value = error.data?.message || error.message;
  } finally {
    isLoading.value = false;
    isDropdownVisible.value = false;
    emits('onUpdateFrequency', true);
  }
};
</script>

<template>
  <div v-on-click-outside.bubble="dropdownHandler" class="less-email">
    <button
      :class="[
        'button-unsubscribe',
        { 'button-unsubscribe--loading': isLoading },
      ]"
      type="button"
      :disabled="isLoading"
      @click="toggleDropdown"
    >
      <span class="button-unsubscribe-text">
        {{ $t("unsubscribe.lessEmails") }}
      </span>
      <IconsLoading v-if="isLoading" color="var(--secondary-orange-dark)" />
      <IconsGeneralUnsubscribe v-else :color="'var(--secondary-orange-dark)'" />
    </button>
    <CommonTransitionDropdown>
      <div
        v-if="isDropdownVisible"
        role="menu"
        class="dropdown-options"
      >
        <p class="dropdown-text">
          {{ $t("unsubscribe.frequencyText") }}
        </p>
        <button
          v-for="(option, index) in options"
          :key="`${option}-${index}`"
          type="button"
          name="dropdown-option"
          role="menuitem"
          aria-label="dropdown-option"
          class="dropdown-option"
          @click="handleSelect(option)"
        >
          {{ option.label }}
        </button>
      </div>
    </CommonTransitionDropdown>
  </div>
</template>

<style scoped>
.less-email {
  position: relative;
}
.button-unsubscribe {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 16px;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  border-radius: 0px 2px 16px 0px;
  border: 1px solid var(--secondary-orange-dark, #dd3d0c);
  background-color: #fcebe6;
  z-index: 2;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}
.button-unsubscribe--loading {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-unsubscribe:hover {
  background-color: #f8d8ce;
}

.button-unsubscribe:active {
  background-color: #f5c4b6;
}

.button-unsubscribe-text {
  color: var(--secondary-orange-dark, #dd3d0c);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.dropdown-options {
  position: absolute;
  top: calc(100% - 8px);
  right: 0;
  left: 0;
  display: flex;
  padding: 16px 0px 0px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  border-radius: 0 0 8px 8px;
  background-color: #fcebe6;
  overflow: hidden;
}
.dropdown-text {
  color: var(--secondary-dark-blue, #000b58);
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  padding: 8px;
}
.dropdown-option {
  color: var(--secondary-dark-blue, #000b58);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: left;
  padding: 8px;
  transition: background-color 0.3s ease;
}
.dropdown-option:hover {
  background-color: #f8d8ce;
}
</style>
