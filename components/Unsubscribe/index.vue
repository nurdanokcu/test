<script setup lang="ts">
import { type DataUnsubscribe } from '~/types/unsubscribe';

const { t } = useI18n();
const { unsubscribe } = subscriptionApi();
const emits = defineEmits(['onUpdateUnsubscribe', 'onUpdateFrequency']);

// State
const options = ref([
  {
    id: 'option-1',
    label: t('unsubscribe.option_1'),
    checked: false,
  },
  {
    id: 'option-2',
    label: t('unsubscribe.option_2'),
    checked: false,
  },
  {
    id: 'option-3',
    label: t('unsubscribe.option_3'),
    checked: false,
  },
  {
    id: 'option-4',
    label: t('unsubscribe.option_4'),
    checked: false,
  },
]);
const other = ref('');
const errorMessage = ref('');
const route = useRoute();
const token = route.query.confirmation_token as string;
const isLoading = ref(false);

// Methods
const handleUpdateChecked = (id: string, value: boolean) => {
  options.value = options.value.map((option) => {
    if (option.id === id) {
      return {
        ...option,
        checked: value,
      };
    } else {
      return {
        ...option,
        checked: false,
      };
    }
  });
};
const handleUnsubscribe = async () => {
  const selectedOption = options.value.find(option => option.checked);
  isLoading.value = true;
  let reason = '';
  if (selectedOption?.id === 'option-4') {
    reason = other.value;
  } else {
    reason = selectedOption?.label || '';
  }
  const finalData: DataUnsubscribe = {
    confirmation_token: token,
    allow_notification: false,
  };
  if (reason) {
    finalData.reason = reason;
  }
  try {
    await unsubscribe(finalData);
    emits('onUpdateUnsubscribe', true);
  } catch (error: any) {
    errorMessage.value = error.data?.message || error.message;
  } finally {
    isLoading.value = false;
  }
};
const handleUpdateFrequency = (value: boolean) => {
  emits('onUpdateFrequency', value);
};
</script>

<template>
  <div class="notification">
    <div class="content">
      <div class="content-header">
        <h2 class="content-title">
          {{ $t("unsubscribe.title") }}
        </h2>
        <p class="content-subtitle">
          {{ $t("unsubscribe.subtitle") }}
        </p>
      </div>
      <div class="content-body">
        <p>
          {{ $t("unsubscribe.text_1") }}
        </p>
        <p>
          {{ $t("unsubscribe.text_2") }}
        </p>
      </div>
    </div>
    <div class="notification-interactive">
      <div class="notification-radio-buttons">
        <UnsubscribeRadio
          v-for="option in options"
          :key="option.label"
          :option="option"
          @update:checked="handleUpdateChecked"
        />
        <AdminInput
          v-model="other"
          type="text"
          name="text"
          :placeholder="$t('unsubscribe.feedback')"
        />
      </div>
      <div class="notification-buttons">
        <UnsubscribeButton
          :is-loading="isLoading"
          @unsubscribe="handleUnsubscribe"
        />
        <CommonTransitionError>
          <CommonErrorMessage
            v-if="errorMessage !== ''"
            class="notification-error"
            :error-message="errorMessage"
          />
        </CommonTransitionError>
        <UnsubscribeLessEmailsButton
          @on-update-frequency="handleUpdateFrequency"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification {
  display: flex;
  flex-direction: column;
  gap: 74px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 660px;
}

.content-title {
  width: fit-content;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.content-subtitle {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--Black, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.notification-interactive {
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex-shrink: 0;
  width: 440px;
}

.notification-radio-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.notification-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (min-width: 768px) {
  .content-title {
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    text-transform: uppercase;
  }
}

@media (min-width: 1024px) {
  .notification {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }

  .content {
    justify-content: space-between;
  }
}
@media (min-width: 1200px) {
  .notification {
    gap: 80px;
  }
}
</style>
