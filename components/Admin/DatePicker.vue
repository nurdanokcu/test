<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
  selectedDate: {
    type: [String, Date],
    required: false,
    default: '',
  },
  errorMessage: {
    type: String,
    required: false,
    default: '',
  },
});

const emits = defineEmits(['onUpdate']);
const { locale } = useI18n();

const showDropdown = ref(false);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
const dropdownHandler = () => {
  showDropdown.value = false;
};
const handleUpdateDate = (date: Date) => {
  showDropdown.value = false;
  const formattedDate = new Date(date).toISOString();
  emits('onUpdate', formattedDate);
};
const formattedDate = computed(() => {
  const localeFormat = locale.value === 'en' ? 'en-GB' : 'de-DE';
  if (props.selectedDate) {
    return new Date(props.selectedDate).toLocaleDateString(localeFormat, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return '';
});
const styleObject = ref({});
function adjustDropdownPosition(triggerElement: {
  getBoundingClientRect: () => any;
}) {
  const triggerRect = triggerElement.getBoundingClientRect();
  const spaceAbove = triggerRect.top;
  const spaceBelow = window.innerHeight - triggerRect.bottom;
  if (spaceBelow >= 400 || spaceBelow >= spaceAbove) {
    // There's enough space below or more space below than above
    styleObject.value = {
      top: '100%',
      bottom: 'auto',
    };
  } else {
    // Not enough space below, place above
    styleObject.value = {
      top: 'auto',
      bottom: '100%',
    };
  }
}
const trigger = ref();
onMounted(() => {
  adjustDropdownPosition(trigger.value);
});
</script>

<template>
  <div class="date-picker-wrapper">
    <div v-on-click-outside="dropdownHandler" class="date-picker">
      <div
        ref="trigger"
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
            <span v-if="formattedDate">
              {{ formattedDate }}
            </span>
            <span v-else class="dropdown-toggle-placeholder">
              {{ $t("admin.newBlog.placeholderDate") }}
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
          :style="styleObject"
          class="date-picker-dropdown"
        >
          <VueDatePicker
            :model-value="selectedDate"
            :inline="true"
            :enable-time-picker="false"
            auto-apply
            :locale="locale"
            prevent-min-max-navigation
            :six-weeks="true"
            :min-date="new Date()"
            @update:model-value="handleUpdateDate"
          >
            <template #arrow-left>
              <IconsGeneralArrowForward
                :is-gradient="true"
                :direction="'left'"
              />
            </template>
            <template #arrow-right>
              <IconsGeneralArrowForward
                :is-gradient="true"
                :direction="'right'"
              />
            </template>
          </VueDatePicker>
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
.date-picker-wrapper {
  width: 100%;
  position: relative;
}
.date-picker {
  position: relative;
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
  white-space: nowrap;
}

.dropdown-toggle-placeholder {
  opacity: 0.35;
}

.date-picker-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  padding: 8px;
}
.input-error {
  padding-top: 8px;
}
.input-error--absolute {
  position: absolute;
  top: 100%;
}
</style>
