<script setup>
import { reviewCardsEn, reviewCardsDe } from '~/data/homeReview.js';

const { locale } = useI18n();

const reviewCards = computed(() => {
  if (locale.value === 'en') {
    return reviewCardsEn;
  } else {
    return reviewCardsDe;
  }
});

const localePath = useLocalePath();
</script>

<template>
  <div class="review-cards">
    <CommonReviewSmallCard
      v-for="review in reviewCards"
      :key="review.id"
      class="review-card"
      :logo="review.logo"
      :name="review.name"
      :company="review.company"
      :comment="review.comment"
      :rating="review.rating"
      :path="`${localePath($t('home.reviews.linkPath'))}/#${$t('home.reviews.linkPathId')}`"
    />
  </div>
</template>

<style scoped>
.review-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
}

.review-card:nth-child(2) {
  margin-top: -8px;
  z-index: 2;
}

.review-card:nth-child(3) {
  margin-top: -8px;
  z-index: 3;
}

@media screen and (min-width: 768px) {
  .review-cards {
    width: fit-content;
    margin: 0 auto 130px;
    align-items: flex-start;
  }

  .review-card:nth-child(2) {
    margin-left: 90px;
  }

  .review-card:nth-child(3) {
    margin-left: 180px;
  }
}
@media screen and (min-width: 768px) {
  .review-cards {
    width: fit-content;
    margin: 0 auto;
    align-items: flex-start;
  }
}

@media screen and (min-width: 1500px) {
  .review-card:nth-child(2) {
    margin-left: 170px;
  }

  .review-card:nth-child(3) {
    margin-left: 340px;
  }
}
</style>
