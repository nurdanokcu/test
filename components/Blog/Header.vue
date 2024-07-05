<script setup lang="ts">
import { visionTextsDE, visionTextsEN } from '~/data/servicesVision.js';
import { blogHeader } from '~/assets/images/general';
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
    :background-image="blogHeader"
    :title="$t('theblog.heading.title')"
    :text="$t('theblog.heading.text')"
    :has-scroll="false"
  >
    <template #header-text>
      <BlogSubscribe />
    </template>
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
