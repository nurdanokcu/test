<script setup>
import { headerSektor } from '~/assets/images/about_images';
import { ellipse } from '~/assets/images/general';
import {
  headerMissionTextsDE,
  headerMissionTextsEN,
} from '~/data/aboutVisionMission.js';

const { locale } = useI18n();
const localePath = useLocalePath();
const missionTexts = computed(() => {
  if (locale.value === 'en') {
    return headerMissionTextsEN;
  } else {
    return headerMissionTextsDE;
  }
});
</script>

<template>
  <header class="about-header-wrapper">
    <div class="about-header">
      <div id="header" class="about-header-hidden"></div>
      <div class="header">
        <div class="header-texts">
          <div class="header-title-container">
            <div class="gradient">
              <img
                class="gradient-img"
                :src="ellipse"
                alt="gradient-ring"
                width="650"
                height="318"
                loading="lazy"
              />
            </div>
            <h1 class="header-title">
              {{ $t("about.header.title") }}
            </h1>
          </div>
          <p class="header-subtitle">
            {{ $t("about.header.subtitle") }}
          </p>
          <p class="header-text">
            {{ $t("about.header.text") }}
          </p>
          <div class="header-scroll--desktop">
            <CommonScrollForMore :path-id="$t('about.header.scrollPathId')" />
          </div>
        </div>
        <div class="header-cards">
          <CommonMissionCard
            class="header-mission-card"
            :title="$t('about.header.missionTitle')"
            :texts="missionTexts"
          />
          <div class="header-testimonial">
            <p class="header-testimonial-text">
              {{ $t("about.header.reviewCase") }}
            </p>
            <CommonReviewSmallCard
              :name="$t('about.header.reviewTitle')"
              :comment="$t('about.header.reviewText')"
              :logo="headerSektor"
              :has-rating="false"
              :path="localePath($t('pagePath.caseStudy.sektor'))"
            />
          </div>
          <div class="header-scroll--mobile">
            <CommonScrollForMore :path-id="$t('about.header.scrollPathId')" />
          </div>
        </div>
      </div>
    </div>
    <CommonGradientLine />
  </header>
</template>

<style scoped>
.about-header-wrapper {
  position: relative;
  min-height: calc(100vh - var(--nav-top-height));
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.about-header {
  display: flex;
  align-items: center;
  background: var(--gradient-logo);
  flex-grow: 1;
}

.about-header-hidden {
  position: absolute;
  top: -100px;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 80px 24px 40px;
  max-width: 840px;
  margin: 0 auto;
}

.header-texts,
.header-text,
.header-subtitle {
  color: white;
  position: relative;
  z-index: 2;
}

.header-subtitle {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
}

.header-title-container {
  position: relative;
  z-index: 2;
  margin-bottom: 44px;
}

.header-title {
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  text-transform: uppercase;
}

.header-scroll--desktop {
  display: none;
}

.header-cards {
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: relative;
  z-index: 3;
}

.header-testimonial {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.header-testimonial-text {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: fit-content;
}

.gradient {
  position: absolute;
  top: -80px;
  left: 10%;
  width: 650px;
  height: 318px;
  z-index: -1;
}

.gradient-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -1;
}

.header-mission-card {
  height: fit-content;
}

@media (min-width: 768px) {
  .header {
    padding: 80px 32px 40px;
  }

  .header-title-container {
    width: fit-content;
  }

  .header-title {
    font-size: 128px;
    font-weight: 700;
    line-height: 80.2%;
  }

  .header-subtitle {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  .gradient {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 340px;
    z-index: -1;
  }
}

@media (min-width: 1024px) {
  .header {
    width: 100%;
    padding: 80px 64px 40px;
    max-width: var(--max-width-content);
  }
}

@media (min-width: 1200px) {
  .header {
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: space-between;
  }

  .header-texts,
  .header-cards {
    width: 50%;
    max-width: 630px;
  }

  .header-scroll--desktop {
    display: block;
  }

  .header-scroll--mobile {
    display: none;
  }

  .header-title {
    margin-bottom: 80px;
  }

  .header-text {
    margin-bottom: 80px;
  }

  .header-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
