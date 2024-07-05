<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  isEyeVisible: {
    type: Boolean,
    required: false,
    default: false,
  },
  errorMessage: {
    type: String,
    required: false,
    default: '',
  },
  isPasswordInput: {
    type: Boolean,
    required: false,
    default: false,
  },
  name: {
    type: String,
    required: false,
    default: '',
  },
  inputId: {
    type: String,
    required: false,
    default: '',
  },
});
defineEmits(['update:modelValue', 'onSubmit', 'onToggleVisibility']);
</script>

<template>
  <div>
    <div
      :class="[
        'input-wrapper',
        { 'input-wrapper--error': errorMessage !== '' },
      ]"
    >
      <input
        :id="inputId"
        class="input"
        :type="type"
        :name="name ? name : type"
        :placeholder="placeholder"
        :value="modelValue"
        autocomplete="on"
        @keydown.enter.prevent="$emit('onSubmit')"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        v-if="isPasswordInput && modelValue !== ''"
        class="input-eye-button"
        type="button"
        aria-label="Toggle password visibility"
        :aria-pressed="isEyeVisible"
        @click="$emit('onToggleVisibility')"
      >
        <IconsAdminEyeGradient :has-line="isEyeVisible" class="input-eye" />
      </button>
    </div>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage !== ''"
        class="input-error"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  padding-bottom: 2px;
  background: var(--gradient-logo);
  border-radius: 2px;
  width: 100%;
}
.input-wrapper--error {
  background: var(--red-error, #ff0000);
}
.input {
  box-sizing: border-box;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  width: 100%;
  border: none;
  background: var(--primary-almost-white);
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
}
.input::placeholder {
  opacity: 0.35;
}
.input-error {
  padding-top: 12px;
}
.input-eye-button {
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
}
.input-eye {
  width: 24px;
  height: 24px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  background: var(--primary-almost-white);
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
