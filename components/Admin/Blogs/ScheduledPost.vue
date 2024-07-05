<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import { type TypeBlog } from '~/types/blog';

const { updatePublishedDate } = privateBlogApi();

const props = defineProps({
  post: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
});
const emits = defineEmits(['onUpdate']);
const localePath = useLocalePath();

const selectedDate = ref(
  props.post.published_at
    ? new Date(props.post.published_at).toISOString()
    : new Date().toISOString(),
);
const showDropdown = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const openTimePicker = () => {
  showDropdown.value = true;
};
const closeTimePicker = () => {
  showDropdown.value = false;
};

const handleEdit = () => {
  navigateTo(localePath(`/admin/blog-edit?id=${props.post.id}`));
};

const croppedDescription = computed(() => {
  if (props.post.excerpt.length > 100) {
    return props.post.excerpt.slice(0, 100) + '...';
  } else {
    return props.post.excerpt;
  }
});

const formattedDate = computed(() => {
  if (!props.post.published_at) {
    return '';
  }
  const date = new Date(props.post.published_at);
  if (date.toString() === 'Invalid Date') {
    return '';
  }
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
});
const handleUpdateDate = (date: string) => {
  selectedDate.value = date;
};

const handleReschedule = async () => {
  const finalDate = convertToCustomFormat(selectedDate.value);
  const blogId = props.post.id || 0;
  isLoading.value = true;
  try {
    await updatePublishedDate(blogId, finalDate);
    isLoading.value = false;
    showDropdown.value = false;
    emits('onUpdate', {
      ...props.post,
      published_at: finalDate,
    });
    showDropdown.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
</script>

<template>
  <div class="post">
    <div class="post-content">
      <div class="post-text">
        <p class="post-title">
          {{ post.title }}
        </p>
        <p class="post-description">
          {{ croppedDescription }}
        </p>
      </div>
      <p v-if="formattedDate" class="post-time">
        <span>
          {{ $t("admin.blog.scheduledFor") }}
        </span>
        {{ formattedDate }}
      </p>
    </div>
    <div v-on-click-outside="closeTimePicker" class="post-buttons">
      <button
        type="button"
        aria-label="Edit"
        :title="$t('admin.blog.edit')"
        class="scheduled-post-edit-button"
        @click="handleEdit"
      >
        <IconsAdminEdit :color="'white'" />
      </button>
      <button
        type="button"
        :aria-label="$t('admin.blog.reschedule')"
        :title="$t('admin.blog.reschedule')"
        class="time-button"
        @click="openTimePicker"
      >
        <IconsAdminTimer
          class="time-button-icon"
          :is-gradient="false"
          :color="'#000B58'"
        />
      </button>
      <CommonTransitionDropdown>
        <div v-if="showDropdown" class="date-picker-dropdown">
          <div class="date-picker-content">
            <div class="date-picker-header">
              <p class="date-picker-dropdown-title">
                {{ $t("admin.newBlog.scheduleFor") }}
              </p>
              <IconsAdminTimer class="timer-icon" :is-gradient="true" />
            </div>
            <AdminDatePicker
              :error-message="errorMessage"
              :dropdown-top="true"
              :selected-date="selectedDate"
              @on-update="handleUpdateDate"
            />
          </div>
          <CommonButtonGradientFilled
            :text="$t('admin.newBlog.schedule')"
            :is-disabled="isLoading"
            :is-loading="isLoading"
            :border-radius="'0px 0px 8px 8px'"
            @on-click="handleReschedule"
          >
            <template #icon>
              <IconsLoading v-if="isLoading" color="white" />
              <IconsAdminCalendar v-else color="white" />
            </template>
            <template #icon-gradient>
              <IconsAdminCalendar />
            </template>
          </CommonButtonGradientFilled>
        </div>
      </CommonTransitionDropdown>
    </div>
  </div>
</template>

<style>
.scheduled-post-edit-button:active svg path {
  fill: var(--secondary-dark-blue);
}
.time-button:active svg path {
  fill: white;
}
</style>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  min-height: 132px;
}
.post-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  color: var(--secondary-dark-blue);
}
.post-text {
  margin-bottom: 16px;
}

.post-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.post-description {
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.post-time {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.post-buttons {
  position: relative;
  display: flex;
  flex-direction: column;
}

.scheduled-post-edit-button {
  padding: 0 4px;
  height: 50%;
  background-color: var(--secondary-dark-blue);
  border-radius: 0 8px 0 0;
  border: 3px solid var(--secondary-dark-blue);
  transition: all 0.2s ease-in-out;
}
.scheduled-post-edit-button:hover {
  background-color: var(--secondary-darker-blue);
}
.scheduled-post-edit-button:active {
  background-color: #fff;
  border: 3px solid var(--secondary-dark-blue);
}

.time-button {
  padding: 0 4px;
  height: 50%;
  border: 3px solid var(--secondary-dark-blue);
  border-radius: 0 0 8px 0;
}
.time-button:hover {
  background-color: var(--admin-page-white);
}
.time-button:active {
  background-color: var(--secondary-dark-blue);
}
.time-button-icon {
  width: 24px;
  height: 24px;
}
.date-picker-dropdown {
  position: absolute;
  top: 0;
  right: 100%;
  width: 350px;
  background: #fff;
  z-index: 2;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
}
.date-picker-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 4px 16px 16px;
}
.date-picker-header {
  position: relative;
}
.date-picker-row {
  display: flex;
  gap: 8px;
}
.date-picker-dropdown-title {
  color: var(--Blue-2, #000b58);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.timer-icon {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.2;
}
</style>
