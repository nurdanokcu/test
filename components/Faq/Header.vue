<template>
  <div class="header">
    <div class="header"></div>
    <div class="header-content">
      <h1 class="header-title">
        {{ $t("faq.header.title") }}
      </h1>
      <h2 class="header-subtitle">
        {{ $t("faq.header.subtitle") }}
      </h2>
      <p class="header-text">
        {{ $t("design.heading.text") }}
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  background: linear-gradient(
      134deg,
      rgba(36, 0, 255, 0.6) 0%,
      rgba(235, 111, 14, 0.6) 100%
    ),
    url("~/assets/images/design_images/header-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.header-hidden {
  position: absolute;
  top: -120px;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 24px;
  max-width: var(--max-width-content);
  margin: auto;
  color: var(--primary-white);
}
.header-title {
  font-size: 128px;
  font-weight: 700;
  line-height: 80.2%;
  text-transform: uppercase;
}
.header-subtitle {
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.header-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 1200px;
}

@media (min-width: 768px) {
  .header-content {
    padding: 40px 32px;
  }
}
@media (min-width: 1024px) {
  .header-content {
    padding: 40px 64px;
  }
}
</style>
