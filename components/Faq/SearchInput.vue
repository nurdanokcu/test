<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="search-input-wrapper">
    <input
      :id="id"
      :value="modelValue"
      type="text"
      class="search-input"
      name="text"
      :placeholder="$t('faq.searchPlaceholder')"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      type="button"
      :aria-label="$t('faq.searchPlaceholder')"
      class="search-btn"
      @click="getFilteredSections"
    >
      <IconsServiceSearch
        :width="'32'"
        :height="'32'"
        :color="'var(--primary-white)'"
      />
    </button>
  </div>
</template>

<style scoped>
.search-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4px;
  border-radius: 12px;
  background: var(--gradient-logo);
}
.search-input {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: none;
  border-radius: 12px;
  background: var(--primary-white);
  color: var(--primary-black);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: background-color 0.3s ease-in-out;
}
.search-input::placeholder {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
}
.search-input:focus {
  outline: none;
}
.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-text-fill-color: var(--primary-black) !important;
  background-color: var(--primary-white) !important;
}
</style>
