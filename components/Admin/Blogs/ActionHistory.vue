<script setup lang="ts">
import { type TypeActionHistories } from '~/types/privateBlog';

const { getActionHistory } = privateBlogApi();

const isLoading = ref(true);
const errorMessage = ref('');
const actionHistory = ref<TypeActionHistories | null>(null);

const handleFetchHistory = async () => {
  isLoading.value = true;
  try {
    const response = await getActionHistory('5');
    actionHistory.value = response;
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};

onMounted(async () => {
  if (actionHistory.value !== null) {
    isLoading.value = false;
  }
  if (actionHistory.value === null) {
    await handleFetchHistory();
  }
});
</script>

<template>
  <div class="history">
    <p class="history-title">
      {{ $t("admin.manageUser.actionHistory") }}
    </p>
    <AdminLoadingBoxes v-if="isLoading" :height="'48px'" />
    <CommonTransitionError>
      <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
    </CommonTransitionError>
    <div v-if="actionHistory !== null && !isLoading" class="history-content">
      <div
        v-for="(value, key) in actionHistory"
        :key="key"
        class="history-group"
      >
        <p class="history-date">
          {{ key }}
        </p>
        <div class="history-actions">
          <AdminActionItem
            v-for="action in value"
            :key="action.id"
            :action="action"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.history-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}
.history-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.history-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.history-date {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}
.history-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
