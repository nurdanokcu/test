<script setup lang="ts">
const isModalVisible = ref(true);
const handleForgotPassword = () => {
  isModalVisible.value = true;
};
const isLinkSent = ref(true);
const handleLinkSent = () => {
  isLinkSent.value = true;
};
</script>

<template>
  <div class="forgot-password">
    <button
      type="button"
      class="forgot-password-button"
      :aria-label="$t('admin.login.forgot')"
      @click="handleForgotPassword"
    >
      {{ $t("admin.login.forgot") }}
    </button>
    <CommonPopup v-if="isModalVisible" @on-close="isModalVisible = false">
      <div class="modal">
        <p class="modal-title">
          {{ $t("admin.login.forgot") }}
        </p>
        <LoginSendLink v-if="!isLinkSent" @on-link-sent="handleLinkSent" />
        <LoginNewPassword v-else @on-success="isModalVisible = false" />
      </div>
    </CommonPopup>
  </div>
</template>

<style scoped>
.forgot-password-button {
  color: #000;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  text-align: left;
  padding: 0;
}
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  padding: 48px;
  gap: 36px;
  border-radius: 8px;
  background: #fdfafa;
}
.modal-title {
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
}
</style>
