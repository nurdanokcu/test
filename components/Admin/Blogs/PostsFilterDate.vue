<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
  selectedDate: {
    type: [String, Date],
    required: true,
  },
  showDropdown: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits([
  'update:selectedDate',
  'onRemoveFilter',
  'onExpand',
  'onCollapse',
]);
const { locale } = useI18n();

const expand = () => {
  emits('onExpand');
};
const dropdownHandler = () => {
  emits('onCollapse');
};
const handleUpdateDate = (date: Date) => {
  emits('onCollapse');
  const formattedDate = new Date(date).toISOString().split('T')[0];
  emits('update:selectedDate', formattedDate);
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
</script>

<template>
  <div class="name">
    <p class="name-text">
      {{ $t("admin.blog.date") }}
    </p>
    <div v-on-click-outside="dropdownHandler" class="date-picker">
      <div class="toggle-wrapper">
        <button
          name="dropdown-toggle"
          type="button"
          aria-label="toggle dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="dropdown-toggle-button"
          @click.stop="expand"
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

      <CommonTransitionDropdown>
        <div v-if="showDropdown" class="date-picker-dropdown">
          <VueDatePicker
            :model-value="selectedDate"
            :inline="true"
            :enable-time-picker="false"
            auto-apply
            :locale="locale"
            :six-weeks="true"
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
  padding-left: 8px;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 600px;
  width: 270px;
  height: 38px;
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
  padding: 8px 8px 8px 4px;
}
.name-delete-icon {
  width: 16px;
  height: 16px;
}

.date-picker {
  position: relative;
}

.toggle-wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: var(--primary-almost-white);
  border-radius: 2px;
}

.dropdown-toggle-button {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 4px;
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
  right: 50%;
  transform: translateX(50%);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  padding: 8px;
}
</style>
