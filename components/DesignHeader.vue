<template>
  <div class="design-header-wrapper">
    <div class="design-container">
      <div id="header" class="design-header-hidden"></div>
      <div class="design-content">
        <h1 class="header">
          {{ $t("design.heading.title") }} <br />
          {{ $t("design.heading.subtitle1") }}
        </h1>
        <p class="sub-heading">
          {{ $t("design.heading.subtitle") }}
        </p>
        <p class="text">
          {{ $t("design.heading.text") }}
        </p>
        <div class="header-scroll mobile">
          <CommonScrollForMore :path-id="$t('design.heading.scrollPathId')" />
        </div>
      </div>
    </div>
    <CommonGradientLine />
  </div>
</template>

<style scoped>
.design-header-wrapper {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--nav-top-height));
}
.design-container {
  display: flex;
  background: linear-gradient(
      134deg,
      rgba(36, 0, 255, 0.6) 0%,
      rgba(235, 111, 14, 0.6) 100%
    ),
    url("~/assets/images/design_images/header-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  flex-grow: 1;
  position: relative;
}
.design-header-hidden {
  position: absolute;
  top: -100px;
}

.design-content {
  padding: 80px 24px;
  max-width: var(--max-width-content);
  margin: auto;
  flex-grow: 1;
}

.header {
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  text-transform: uppercase;
  color: var(--primary-white);
}

.sub-heading {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary-white);
  padding: 24px 0px;
}

.text {
  color: var(--primary-white);
  font-size: 14px;
  padding-bottom: 24px;
}

@media (min-width: 768px) {
  .design-content {
    padding: 150px 32px;
  }

  .header {
    font-size: 100px;
    font-weight: 700;
    line-height: 80.2%;
  }

  .sub-heading {
    padding: 30px 0px 60px 0px;
  }

  .text {
    padding-bottom: 80px;
    width: 667px;
  }
}

@media (min-width: 1024px) {
  .design-content {
    padding: 80px 64px;
  }
}

@media (min-width: 1500px) {
  .header {
    font-size: 128px;
  }
}
</style>
