<script setup>
import { visionTextsDE, visionTextsEN } from '~/data/servicesVision.js';
import { reviewFahrwerk } from '~/assets/images/about_images';
import { headerImage } from '~/assets/images/digital_images';

const { locale } = useI18n();
const localePath = useLocalePath();
const visionTexts = computed(() =>
  locale.value === 'en' ? visionTextsEN : visionTextsDE,
);
</script>

<template>
  <CommonHeader
    :header-hidden-id="'header'"
    :background-image="headerImage"
    :title="$t('digital.header.title')"
    :sub-title="$t('digital.header.subtitle')"
    :text="$t('digital.header.text')"
    :scroll-path="$t('digital.header.scrollPathId')"
  >
    <template #header-vision>
      <CommonMissionCard
        :title="$t('common.headerApproach')"
        :texts="visionTexts"
      />
    </template>
    <template #header-testimonial>
      <CommonReviewSmallCard
        :name="'Niklas Rotter'"
        :comment="$t('about.review.designReview_6')"
        :logo="reviewFahrwerk"
        :rating="'5.0'"
        :path="`${localePath($t('home.reviews.linkPath'))}/#${$t(
          'home.reviews.linkPathId',
        )}`"
      />
    </template>
  </CommonHeader>
</template>
