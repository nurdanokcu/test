<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const inputName = ref();
const emits = defineEmits(['update:modelValue', 'onRemoveFilter']);
const updateInput = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value);
};
onMounted(() => {
  inputName.value.focus();
});
</script>

<template>
  <div class="name">
    <p class="name-text">
      {{ $t("admin.blog.name") }}
    </p>
    <input
      ref="inputName"
      :value="modelValue"
      class="name-input"
      :placeholder="$t('admin.manageUser.enterName')"
      type="text"
      @input="updateInput($event)"
    />
    <button
      class="name-delete-button"
      type="button"
      :aria-label="$t('admin.blog.removeFilter')"
      :title="$t('admin.blog.removeFilter')"
      @click="$emit('onRemoveFilter')"
    >
      <IconsGeneralDelete class="name-delete-icon" />
    </button>
  </div>
</template>

<style scoped>
.name {
  display: flex;
  width: 206px;
  height: 38px;
  padding-left: 8px;
  align-items: center;
  border-radius: 600px;
  background: var(--primary-almost-white);
}

.name-text {
  display: flex;
  height: 22px;
  padding: 2px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 24px;
  background: #fff;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.name-input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 4px 8px;
  border-radius: 2px;
  background: var(--primary-almost-white);
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  transition: all 0.3s;
}
.name-delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.name-delete-icon {
  width: 16px;
  height: 16px;
}
</style>
