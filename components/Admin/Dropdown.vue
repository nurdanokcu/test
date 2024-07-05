<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { type TypeDropdownOption } from '~/types/privateBlog';

defineProps({
  selectedOption: {
    type: Object as PropType<TypeDropdownOption>,
    required: true,
  },
  options: {
    type: Array as PropType<TypeDropdownOption[]>,
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
  isErrorAbsolute: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emits = defineEmits(['onSelect']);
const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleSelect = (value: TypeDropdownOption) => {
  emits('onSelect', value);
  showDropdown.value = false;
};

const dropdownHandler = () => {
  showDropdown.value = false;
};
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
          <slot></slot>
        </div>
      </div>
      <CommonTransitionDropdown>
        <div
          v-if="showDropdown"
          v-on-click-outside.bubble="dropdownHandler"
          role="menu"
          class="dropdown-options"
        >
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
            {{ option.name }}
          </button>
        </div>
      </CommonTransitionDropdown>
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage !== ''"
        :class="[
          'input-error',
          {
            'input-error--absolute': isErrorAbsolute,
          },
        ]"
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

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  z-index: 5;
  max-height: 172px;
  overflow-y: auto;
  border: 1px solid #e5e5e5;
}

.dropdown-option {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  text-align: left;
  transition: all 0.3s ease;
  padding: 8px 16px;
}

.dropdown-option:hover {
  background: var(--primary-almost-white);
}

.input-error {
  padding-top: 8px;
}
.input-error--absolute {
  position: absolute;
  top: 100%;
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
