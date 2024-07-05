<script setup>
defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  hasError: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  ariaLabel: {
    type: String,
    required: false,
    default: '',
  },
});

defineEmits(['update:checked']);
</script>

<template>
  <label class="checkbox--label" :for="id">
    <span class="checkbox-wrapper">
      <span :class="['common-checkbox', { 'checkbox-error': hasError }]">
        <input
          :id="id"
          :class="['input', { error: hasError }, { checked: checked }]"
          type="checkbox"
          tabindex="0"
          :aria-label="ariaLabel"
          :aria-checked="checked"
          :checked="checked"
          :disabled="disabled"
          @change="$emit('update:checked', $event.target.checked)"
        />
        <span class="checkmark"></span>
      </span>
    </span>
    <slot />
  </label>
</template>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  padding: 2px;
  background: var(--gradient-logo);
  border-radius: 2px;
}
.checkbox--label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.common-checkbox {
  display: block;
  position: relative;
  padding-left: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.common-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: var(--primary-white);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.checkbox:hover input ~ .checkmark {
  border: 1px solid var(--primary-white);
}
.checkbox-error input ~ .checkmark {
  border: 1px solid var(--red-error);
}

.common-checkbox input.checked ~ .checkmark {
  background: var(--gradient-logo);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.common-checkbox input.checked ~ .checkmark:after {
  display: block;
}

.common-checkbox .checkmark:after {
  left: 4px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
