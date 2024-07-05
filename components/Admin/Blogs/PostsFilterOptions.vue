<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { TypeFilterOptions } from '~/types/privateBlog';

defineProps({
  selectedOptions: {
    type: Object as PropType<TypeFilterOptions[]>,
    required: true,
  },
});
const emits = defineEmits(['onSelect']);
const showDropdown = ref(false);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
const dropdownHandler = () => {
  showDropdown.value = false;
};
const handleSelect = (value: TypeFilterOptions) => {
  showDropdown.value = false;
  emits('onSelect', value);
};
</script>

<template>
  <div v-on-click-outside="dropdownHandler" class="dropdown">
    <button
      type="button"
      class="dropdown-button"
      :aria-expanded="showDropdown"
      @click="toggleDropdown"
    >
      <span class="dropdown-button-content">
        <span class="dropdown-button-text">{{
          $t("admin.blog.addFilter")
        }}</span>
        <IconsAdminFilter />
      </span>
    </button>
    <CommonTransitionDropdown>
      <div v-if="showDropdown" class="dropdown-options">
        <button
          :class="[
            'dropdown-option',
            {
              'dropdown-option--active': selectedOptions.includes(
                TypeFilterOptions.NAME,
              ),
            },
          ]"
          type="button"
          @click="handleSelect(TypeFilterOptions.NAME)"
        >
          <IconsAdminLeftAlign />
          {{ $t("admin.blog.name") }}
        </button>
        <button
          :class="[
            'dropdown-option',
            {
              'dropdown-option--active': selectedOptions.includes(
                TypeFilterOptions.DATE,
              ),
            },
          ]"
          type="button"
          @click="handleSelect(TypeFilterOptions.DATE)"
        >
          <IconsAdminDate />
          {{ $t("admin.blog.date") }}
        </button>
        <button
          :class="[
            'dropdown-option',
            {
              'dropdown-option--active': selectedOptions.includes(
                TypeFilterOptions.STATUS,
              ),
            },
          ]"
          type="button"
          @click="handleSelect(TypeFilterOptions.STATUS)"
        >
          <IconsAdminCheck />
          {{ $t("admin.blog.status") }}
        </button>
      </div>
    </CommonTransitionDropdown>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-button {
  display: flex;
  padding: 0 0 2px 0;
  background: var(--gradient-logo);
  border-radius: 4px;
}
.dropdown-button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 2px;
  padding: 8px 16px;
  background: #f7f1ff;
}
.dropdown-button-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.2;
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
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.dropdown-option:hover {
  background: var(--primary-almost-white-darker);
}
.dropdown-option--active {
  background: var(--primary-almost-white);
}
</style>
