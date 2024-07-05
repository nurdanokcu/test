<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div class="success">
    <div class="success-texts">
      <h2 class="success-title">
        {{ $t("unsubscribe.unsubscribeSuccess") }}
      </h2>
      <p class="success-text">
        {{ $t("unsubscribe.unsubscribeSuccessText") }}
      </p>
    </div>
    <CommonButtonGradientFilled
      class="subscription-button"
      :text="$t('subscriptions.goHome')"
      :padding="'12px'"
      :is-link="true"
      :border-radius="'0px 0px 16px 0px'"
      :path="localePath('/')"
    >
      <template #icon>
        <IconsGeneralHome color="white" />
      </template>
      <template #icon-gradient>
        <IconsGeneralHome />
      </template>
    </CommonButtonGradientFilled>
  </div>
</template>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 800px;
}
.success-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  background: var(
    --Gradient-Logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.success-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media (min-width: 768px) {
  .success-title {
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    text-transform: uppercase;
  }
}
</style>
