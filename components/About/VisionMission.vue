<script setup>
import { ellipse } from '~/assets/images/general';
import {
  missionTextsDE,
  missionTextsEN,
  visionTextsDE,
  visionTextsEN,
} from '~/data/aboutVisionMission.js';

const { locale } = useI18n();

const missionTexts = computed(() => {
  if (locale.value === 'en') {
    return missionTextsEN;
  } else {
    return missionTextsDE;
  }
});
const visionTexts = computed(() =>
  locale.value === 'en' ? visionTextsEN : visionTextsDE,
);
</script>

<template>
  <div class="our-views-containers">
    <div class="into-change">
      <CommonIntro
        :title="$t('about.visionMission.titleMobile')"
        class="mobile"
      />
      <CommonIntro
        :title="$t('about.visionMission.titleDesktop')"
        class="desktop"
      />
    </div>
    <div class="mission-value-content">
      <div class="mission-content">
        <div class="box">
          <CommonMissionCard
            :title="$t('about.visionMission.visionTitle')"
            :is-small-font="true"
            :texts="visionTexts"
          />
        </div>
        <div class="box">
          <CommonMissionCard
            :title="$t('about.visionMission.missionTitle')"
            :is-small-font="true"
            :texts="missionTexts"
          />
        </div>
      </div>
      <AboutVisionValue />
      <div class="gradient-desktops">
        <img
          class="gradient-img"
          :src="ellipse"
          alt="gradient-ring"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-views-containers {
  padding: 80px 24px 0;
  margin: auto;
}

.mission-content {
  margin: 40px 0px 20px;
  display: grid;
  gap: 10px;
}

.desktop {
  display: none;
}

.gradient-desktops {
  display: none;
}

@media (min-width: 768px) {
  .our-views-containers {
    padding: 80px 32px 0;
  }
  .mission-content {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .our-views-containers {
    padding: 80px 64px 0;
  }
}

@media (min-width: 1200px) {
  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  .our-views-containers {
    display: flex;
    gap: 80px;
  }
  .into-change {
    margin-bottom: 0;
    text-align: left;
    width: var(--about-section-title-width);
  }
  .mission-value-content {
    width: calc(100% - var(--about-section-title-width) - 80px);
  }

  .mission-content {
    grid-template-columns: 1.15fr 1.15fr;
    gap: 16px;
    margin: 0px 0px 20px;
  }
}

@media (min-width: 1500px) {
  .our-views-containers {
    max-width: var(--max-width-content);
    position: relative;
    z-index: 1;
  }

  .gradient-desktops {
    display: block;
    position: absolute;
    transform: rotate(258deg);
    width: 720px;
    right: -427px;
    bottom: -52px;
    z-index: 1;
  }

  .gradient-img {
    width: 100%;
    height: 100%;
  }
}
</style>
