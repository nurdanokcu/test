<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { TypePostStatus } from '~/types/privateBlog';

const props = defineProps({
  status: {
    type: String as PropType<TypePostStatus>,
    required: false,
    default: TypePostStatus.NONE,
  },
  showDropdown: {
    type: Boolean,
    required: true,
  },
});
const { t } = useI18n();
const emits = defineEmits([
  'update:status',
  'onRemoveFilter',
  'onExpand',
  'onCollapse',
]);
const expand = () => {
  emits('onExpand');
};
const dropdownHandler = () => {
  emits('onCollapse');
};
const updateStatus = (value: TypePostStatus) => {
  emits('onCollapse');
  emits('update:status', value);
};
const options = computed(() => {
  return [
    {
      label: t('admin.blog.draftLabel'),
      value: TypePostStatus.DRAFT,
    },
    {
      label: t('admin.blog.publishedLabel'),
      value: TypePostStatus.PUBLISHED,
    },
    {
      label: t('admin.blog.scheduledLabel'),
      value: TypePostStatus.SCHEDULED,
    },
  ];
});
const selectedLabel = computed(() => {
  return options.value.find(option => option.value === props.status)?.label;
});
</script>

<template>
  <div class="status">
    <p class="status-text">
      {{ $t("admin.blog.status") }}
    </p>
    <div v-on-click-outside="dropdownHandler" class="status-picker">
      <div class="toggle-wrapper">
        <button
          type="button"
          aria-label="toggle dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="dropdown-toggle-button"
          @click.stop="expand"
        >
          <span v-if="status !== TypePostStatus.NONE">
            {{ selectedLabel }}
          </span>
          <span v-else class="dropdown-toggle-placeholder">
            {{ $t("admin.blog.chooseStatus") }}
          </span>
          <IconsGeneralCollapseExpand
            :is-rotated="showDropdown"
            :is-gradient="true"
            :size="'24'"
          />
        </button>
      </div>

      <CommonTransitionDropdown>
        <div v-if="showDropdown" class="status-dropdown">
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            class="dropdown-option"
            @click="updateStatus(option.value)"
          >
            <span :class="['post-status']">
              {{ option.label }}
            </span>
          </button>
        </div>
      </CommonTransitionDropdown>
    </div>
    <button
      class="status-delete-button"
      type="button"
      :aria-label="$t('admin.blog.removeFilter')"
      :title="$t('admin.blog.removeFilter')"
      @click="$emit('onRemoveFilter')"
    >
      <IconsGeneralDelete class="status-delete-icon" />
    </button>
  </div>
</template>

<style scoped>
.status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  border-radius: 600px;
  width: 240px;
  height: 38px;
  background: var(--primary-almost-white);
}
.status-picker {
  position: relative;
}

.status-text {
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
.status-input {
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
.status-delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.status-delete-icon {
  width: 16px;
  height: 16px;
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

.status-dropdown {
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  width: 100px;
  padding: 4px 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dropdown-option {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 4px 8px;
}
.dropdown-option:hover {
  background: var(--primary-almost-white-darker);
}
.post-status {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
.post-status--draft {
  background: var(--primary-orange);
}
.post-status--published {
  background: var(--primary-blue);
}
.post-status--scheduled {
  background: var(--primary-magenta);
}
</style>
