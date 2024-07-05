<template>
  <div class="fahrwerk-container">
    <div :id="idForHidden" class="fahrwerk-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="fahrwerk-conten">
      <div class="fahrwerk-content item">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.fahrwerk.how-we-did-it.text") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.fahrwerk.how-we-did-it.text_1") }}
        </p>
      </div>
      <div class="img-content item">
        <div class="img-overlay"></div>
        <img :src="image1" alt="laptop image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { image1 } from '~/assets/images/caseStudies_images/fahrwerk_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.fahrwerk-container {
  padding: 30px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.fahrwerk-hidden {
  position: absolute;
  top: -100px;
}

.fahrwerk-content {
  background-color: var(--primary-magenta);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  margin: 20px 0px;
}

.title {
  color: var(--primary-white);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 10px 0px 0px;
}

.text-title {
  color: var(--primary-white);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
}

.arrow-text {
  display: grid;
  grid-template-columns: 8% 88%;
  gap: 20px;
  align-items: center;
  margin: 15px 0px 0px;
}

.text {
  color: var(--primary-white);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.img-content {
  position: relative;
  height: 100%;
  max-height: 400px;
}
.img-content img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 15px;
}
.img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(116, 15, 73, 0.2);
  border-radius: 15px;
}

@media (min-width: 768px) {
  .arrow-text {
    display: grid;
    grid-template-columns: 4% 88%;
    gap: 20px;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .fahrwerk-container {
    padding: 30px 64px;
  }
}

@media (min-width: 1200px) {
  .fahrwerk-container {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
  }

  .did-it-heading {
    overflow-wrap: break-word;
  }
  .img-content {
    max-height: 520px;
  }
  .img-content img {
    max-height: 520px;
  }
}

@media (min-width: 1500px) {
  .fahrwerk-content {
    margin: 0px 0px 20px;
  }
}
</style>
