<template>
  <div class="what-client-think-content">
    <div :id="idForHidden" class="what-client-think-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.client-think.title')"
      class="client-think-heading"
    />
    <div class="text-container">
      <div class="image">
        <img
          :src="miaJohnson"
          alt="mia-johnson"
          width="100"
        />
      </div>
      <p class="name">
        Mia Johnson <span class="company">from Sektor</span>
      </p>
      <p class="text">
        {{ $t("case_studies.sektor.client-think.text") }}
      </p>
      <div class="ratings">
        <CommonSektorRating
          :text="$t('case_studies.sektor.client-think.budget')"
        />
        <CommonSektorRating
          :text="$t('case_studies.sektor.client-think.quality')"
        />
        <CommonSektorRating
          :text="$t('case_studies.sektor.client-think.schedule')"
        />
        <CommonSektorRating
          :text="$t('case_studies.sektor.client-think.collaboration')"
        />
      </div>
    </div>
    <IconsCaseStudiesSektorGradientRing2 class="desktop" />
  </div>
</template>

<script setup>
import { miaJohnson } from '~/assets/images/caseStudies_images/cityCampus_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.what-client-think-content {
  padding: 30px 24px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.what-client-think-hidden {
  position: absolute;
  top: -130px;
}

.text-container {
  text-align: center;
  margin: auto;
  text-align: center;
  max-width: 335px;
}

.client-think-heading {
  margin-bottom: 30px;
}

.name {
  color: var(--primary-black);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 5px auto 20px;
}

.company {
  color: var(--primary-black);
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

.text {
  color: var(--primary-black);
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  text-align: start;
}

.desktop {
  display: none;
}

@media (min-width: 768px) {
  .what-client-think-content {
    padding: 0px 32px 30px;
  }

  .client-think-heading {
    margin-bottom: 80px;
  }
}

@media (min-width: 1024px) {
  .what-client-think-content {
    padding: 0px 64px 180px;
  }
}

@media (min-width: 1200px) {
  .what-client-think-content {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
    justify-content: space-between;
  }
}

@media (min-width: 1500px) {
  .desktop {
    right: -294px;
    z-index: -999;
    bottom: -138px;
    display: block;
    transform: rotate(249deg);
    position: absolute;
  }
}

@media (min-width: 1600px) {
  .what-client-think-content {
    padding: 0 80px 180px;
  }
}
</style>
