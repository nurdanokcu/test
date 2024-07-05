<script setup>
import { visionTextsDE, visionTextsEN } from '~/data/servicesVision.js';
import { headerimage } from '~/assets/images/development_images';
import { strukturLogo } from '~/assets/images/home_images';

const { locale } = useI18n();
const localePath = useLocalePath();

const visionTexts = computed(() =>
  locale.value === 'en' ? visionTextsEN : visionTextsDE,
);
</script>

<template>
  <CommonHeader
    :header-hidden-id="'header'"
    :background-image="headerimage"
    :title="$t('development.heading.title')"
    :sub-title="$t('development.heading.subtitle')"
    :text="$t('development.heading.text')"
    :scroll-path="$t('development.heading.scrollPathId')"
  >
    <template #header-vision>
      <CommonMissionCard
        :title="$t('common.headerApproach')"
        :texts="visionTexts"
      />
    </template>
    <template #header-testimonial>
      <CommonReviewSmallCard
        :name="'John Farrell'"
        :comment="$t('about.review.socialReview_3')"
        :logo="strukturLogo"
        :rating="'5.0'"
        :path="`${localePath($t('home.reviews.linkPath'))}/#${$t(
          'home.reviews.linkPathId',
        )}`"
      />
    </template>
  </CommonHeader>
</template>
