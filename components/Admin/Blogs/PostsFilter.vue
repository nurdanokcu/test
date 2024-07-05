<script setup lang="ts">
import { TypeFilterOptions, TypePostStatus } from '~/types/privateBlog';

defineProps({
  name: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: [String, Date],
    required: false,
    default: '',
  },
  status: {
    type: String as PropType<TypePostStatus>,
    required: false,
    default: TypePostStatus.NONE,
  },
});
const emits = defineEmits(['onUpdateName', 'onUpdateDate', 'onUpdateStatus']);
const selectedOptions = ref<TypeFilterOptions[]>([]);
const isDateDropdownOpen = ref(false);
const isStatusDropdownOpen = ref(false);
const route = useRoute();

if (route.query.name) {
  selectedOptions.value.push(TypeFilterOptions.NAME);
}
if (route.query.date) {
  selectedOptions.value.push(TypeFilterOptions.DATE);
}
if (route.query.status) {
  selectedOptions.value.push(TypeFilterOptions.STATUS);
}

const expandDropdownDate = () => {
  isDateDropdownOpen.value = true;
};
const collapseDropdownDate = () => {
  isDateDropdownOpen.value = false;
};
const expandDropdownStatus = () => {
  isStatusDropdownOpen.value = true;
};
const collapseDropdownStatus = () => {
  isStatusDropdownOpen.value = false;
};
const handleSelect = (value: TypeFilterOptions) => {
  if (selectedOptions.value.includes(value)) {
    return;
  }
  selectedOptions.value = [...selectedOptions.value, value];
  if (value === TypeFilterOptions.DATE) {
    isDateDropdownOpen.value = true;
  }
  if (value === TypeFilterOptions.STATUS) {
    isStatusDropdownOpen.value = true;
  }
};
const handleRemove = (value: TypeFilterOptions) => {
  selectedOptions.value = selectedOptions.value.filter(
    option => option !== value,
  );
};
const handleUpdateName = (value: string) => {
  emits('onUpdateName', value);
};
const handleUpdateDate = (value: string) => {
  emits('onUpdateDate', value);
};
const handleUpdateStatus = (value: TypePostStatus) => {
  emits('onUpdateStatus', value);
};

const removeNameFilter = () => {
  emits('onUpdateName', '');
  handleRemove(TypeFilterOptions.NAME);
};
const removeDateFilter = () => {
  emits('onUpdateDate', '');
  handleRemove(TypeFilterOptions.DATE);
};

const removeStatusFilter = () => {
  emits('onUpdateStatus', TypePostStatus.NONE);
  handleRemove(TypeFilterOptions.STATUS);
};
</script>

<template>
  <div class="filter">
    <div class="filter-options">
      <AdminBlogsPostsFilterName
        v-if="selectedOptions.includes(TypeFilterOptions.NAME)"
        key="filter-name"
        :model-value="name"
        @update:model-value="handleUpdateName"
        @on-remove-filter="removeNameFilter"
      />
      <AdminBlogsPostsFilterDate
        v-if="selectedOptions.includes(TypeFilterOptions.DATE)"
        key="filter-date"
        :selected-date="selectedDate"
        :show-dropdown="isDateDropdownOpen"
        @on-expand="expandDropdownDate"
        @on-collapse="collapseDropdownDate"
        @update:selected-date="handleUpdateDate"
        @on-remove-filter="removeDateFilter"
      />
      <AdminBlogsPostsFilterStatus
        v-if="selectedOptions.includes(TypeFilterOptions.STATUS)"
        key="filter-status"
        :status="status"
        :show-dropdown="isStatusDropdownOpen"
        @on-expand="expandDropdownStatus"
        @on-collapse="collapseDropdownStatus"
        @update:status="handleUpdateStatus"
        @on-remove-filter="removeStatusFilter"
      />
    </div>
    <AdminBlogsPostsFilterOptions
      :selected-options="selectedOptions"
      @on-select="handleSelect"
    />
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
}
.filter-options {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(10px, 0);
}
</style>
