<script setup>
import { ellipse } from '~/assets/images/general';
import { strukturLogo } from '~/assets/images/home_images';
import { visionTextsDE, visionTextsEN } from '~/data/servicesVision.js';

const { locale } = useI18n();
const visionTexts = computed(() =>
  locale.value === 'en' ? visionTextsEN : visionTextsDE,
);
</script>

<template>
  <div class="header-outer">
    <header class="header-wrapper">
      <div id="header" class="header-hidden"></div>
      <div class="header">
        <div class="header-gradient-mobile">
          <img
            width="800"
            height="391"
            class="header-gradient-img"
            :src="ellipse"
            alt="gradient-ring"
          />
        </div>
        <div class="header-content">
          <h1
            :class="['header-title', { 'header-title--de': locale === 'de' }]"
          >
            {{ $t("services.heading.title") }}
          </h1>
          <div class="header-texts">
            <p class="header-subtitle">
              {{ $t("services.heading.subtitle") }}
            </p>
            <p class="header-text">
              {{ $t("about.header.text") }}
            </p>
          </div>
          <div class="header-scroll desktop">
            <CommonScrollForMore
              :path-id="$t('services.heading.scrollPathId')"
            />
          </div>
        </div>
        <div class="header-cards">
          <div class="header-vision">
            <div class="header-gradient-desktop">
              <img
                width="800"
                height="391"
                class="header-gradient-img"
                :src="ellipse"
                alt="gradient-ring"
              />
            </div>
            <CommonMissionCard
              :title="$t('common.headerApproach')"
              :texts="visionTexts"
            />
          </div>
          <div class="header-testimonial">
            <p class="header-testimonial-text">
              {{ $t("services.heading.review") }}
            </p>
            <CommonReviewSmallCard
              :name="'John Farrell'"
              :comment="$t('services.heading.reviewComment')"
              :logo="strukturLogo"
              :rating="'5.0'"
              :path="`${localePath($t('home.reviews.linkPath'))}/#${$t(
                'home.reviews.linkPathId',
              )}`"
            />
          </div>
          <div class="header-scroll mobile">
            <CommonScrollForMore
              :path-id="$t('services.heading.scrollPathId')"
            />
          </div>
        </div>
      </div>
    </header>
    <CommonGradientLine class="header-line-container" />
  </div>
</template>

<style scoped>
.header-outer {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: calc(100vh - var(--nav-top-height));
}
.header-wrapper {
  background: var(--gradient-logo);
  position: relative;
  flex-grow: 1;
  display: flex;
}
.header-hidden {
  position: absolute;
  top: -100px;
}

.header {
  position: relative;
  z-index: 0;
  flex-grow: 1;
}

.header-gradient-mobile {
  position: absolute;
  top: -6%;
  left: 70%;
  width: 800px;
  transform: rotate(-93deg);
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.header-gradient-desktop {
  display: none;
}

.header-gradient-img {
  width: 100%;
}

.header-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  padding: 24px 24px 0px;
}

.header-title {
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  margin-bottom: 80px;
  text-transform: uppercase;
}
.header-title--de {
  word-break: break-all;
}

.header-subtitle {
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.header-text {
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 24px;
}

.header-scroll.desktop {
  display: none;
}

.header-cards {
  padding: 0 24px;
  max-width: 466px;
}

.header-vision {
  margin-bottom: 80px;
}

.header-testimonial {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.header-testimonial-text {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
}

.header-scroll.mobile {
  margin-bottom: 32px;
}

.header-line-container {
  display: none;
}

@media (min-width: 768px) {
  .header {
    display: flex;
    gap: 32px;
  }

  .header-content {
    flex: 0 0 42%;
    padding: 32px 0 0 32px;
  }

  .header-title {
    font-size: 64px;
    line-height: 64px;
  }

  .header-text {
    margin-bottom: 100px;
  }

  .header-cards {
    flex: 0 1 70%;
    padding: 32px 32px 0 0;
    margin: 0 0 0 auto;
  }

  .header-scroll.mobile {
    display: none;
  }

  .header-scroll.desktop {
    display: block;
    margin-bottom: 32px;
  }

  .header-gradient-mobile {
    top: 0%;
    left: 45%;
  }
}

@media (min-width: 1024px) {
  .header-content {
    padding: 32px 0 0 64px;
  }

  .header-cards {
    padding: 32px 64px 0 0;
  }
}

@media (min-width: 1200px) {
  .header {
    max-width: var(--max-width-content);
    padding: 0 64px;
    margin: 0 auto;
  }

  .header-content {
    padding: 104px 0 0 0;
    flex: 0 0 50%;
  }

  .header-cards {
    padding: 104px 0 0 0;
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 80px;
    max-width: 600px;
  }

  .header-title {
    font-size: 128px;
    line-height: 80.2%;
  }

  .header-subtitle {
    font-size: 64px;
    line-height: 64px;
  }

  .header-scroll.desktop {
    margin-bottom: 80px;
  }

  .header-vision {
    position: relative;
  }

  .header-gradient-mobile {
    display: none;
  }

  .header-gradient-desktop {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 760px;
    height: 460px;
    z-index: -1;
  }

  .header-gradient-img {
    height: 100%;
  }

  .header-line-container {
    display: flex;
  }

  .header-line {
    width: 100%;
    height: 4px;
    background: var(--gradient-logo);
  }
}
</style>
