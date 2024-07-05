<script setup>
const handleClick = () => {
  window.open("https://www.google.com/partners/agency?id=1359740678", "_blank");
};
</script>

<template>
  <div class="partners">
    <p class="partners-text">
      {{ $t("common.partners") }}
    </p>
    <button
      type="button"
      class="partners-icon-container"
      aria-label="Google"
      @click="handleClick"
    >
      <IconsSocialPlatformsGoogleWhite />
      <span class="partners-icon-text"> Google </span>
    </button>
    <div class="partners-icon-container">
      <IconsSocialPlatformsFacebookWhite />
      <p class="partners-icon-text">
        Facebook
      </p>
    </div>
  </div>
</template>

<style>
.partners {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
}

.partners-text {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
}

.partners-icon-container {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
}

.partners-icon-text {
  font-size: 20px;
  line-height: 25px;
}

@media screen and (min-width: 768px) {
  .partners {
    flex-direction: row;
  }
}
</style>
