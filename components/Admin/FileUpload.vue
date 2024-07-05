<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
  accept: {
    type: String,
    required: false,
    default: '',
  },
  isMultiple: {
    type: Boolean,
    required: false,
    default: false,
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
  errorMessage: {
    type: String,
    required: false,
    default: '',
  },
});
defineEmits(['onFileChange']);
</script>

<template>
  <div>
    <div
      :class="[
        'button',
        {
          'button--disabled': disabled || isLoading,
          'button--error': errorMessage !== '',
        },
      ]"
    >
      <input
        :id="id"
        class="hide-file-input"
        type="file"
        :accept="accept"
        :multiple="isMultiple"
        :disabled="disabled"
        @change="$emit('onFileChange', $event)"
      />
      <label class="file-label" :for="id">
        <span class="file-label-text">
          {{ text }}
        </span>
        <span class="icon">
          <slot name="icon" />
        </span>
        <span class="gradient-icon">
          <slot name="gradient-icon" />
        </span>
      </label>
    </div>
    <CommonTransitionError>
      <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
    </CommonTransitionError>
  </div>
</template>

<style scoped>
.button {
  width: 100%;
  box-sizing: border-box;
  gap: 8px;
  height: 48px;
  width: 100%;
  border-radius: 2px 2px 16px 2px;
  padding: 3px;
  background: var(--gradient-logo);
  cursor: pointer;
  margin-bottom: 8px;
  transition: all 0.5s ease;
}
.button--error {
  background: var(--red-error);
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  border-radius: 2px 2px 16px 2px;
  background-color: #fff;
  cursor: pointer;
}

.file-label-text {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button:hover .file-label {
  background: var(--primary-white-hover);
}
.button--disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.button:active .file-label {
  background: var(--gradient-logo);
}
.button:active .file-label-text {
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.icon {
  display: none;
}
.button:active .icon {
  display: block;
}
.button:active .gradient-icon {
  display: none;
}
</style>
