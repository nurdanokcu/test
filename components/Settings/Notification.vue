<template>
  <div class="notification">
    <div class="notification-title">
      {{ text }}
    </div>
    <slot></slot>
    <CommonTransitionError>
      <CommonErrorMessage
        v-if="errorMessage"
        class="notification-error"
        :error-message="errorMessage"
      />
    </CommonTransitionError>
  </div>
</template>

<script setup lang="ts">
defineProps({
  errorMessage: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.notification {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
  min-width: 304px;
  max-width: 500px;
}

.notification-title {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.notification-error {
  margin: 0 0 0 auto;
  width: fit-content;
}
</style>
