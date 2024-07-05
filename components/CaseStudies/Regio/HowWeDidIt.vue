<template>
  <div class="how-we-did-it-container">
    <div :id="idForHidden" class="how-we-did-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="text-container">
      <div class="text-content">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <p class="text">
          {{ $t("case_studies.regio.how-we-did-it.text") }}
        </p>
        <p class="text">
          {{ $t("case_studies.regio.how-we-did-it.text_1") }}
        </p>
      </div>
      <div class="img-content item">
        <div class="img-overlay"></div>
        <img :src="regioimage" alt="laptop image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { regioimage } from '~/assets/images/caseStudies_images/regio_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.how-we-did-it-container {
  padding: 20px 32px 60px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.how-we-did-it-hidden {
  position: absolute;
  top: -80px;
}

.text-content {
  border-radius: 15px;
  background: var(--primary-magenta);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 60px 0px 20px;
}

.title {
  color: var(--primary-white);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.did-it-heading {
  overflow-wrap: break-word;
}

.text {
  color: var(--primary-white);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px 0px;
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

@media (min-width: 1024px) {
  .how-we-did-it-container {
    padding: 20px 64px 60px;
  }
}

@media (min-width: 1200px) {
  .how-we-did-it-container {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
    justify-content: space-between;
    padding: 60px 64px 60px;
  }

  .text-content {
    margin: 0px 0px 30px;
  }
  .img-content {
    max-height: 530px;
  }
  .img-content img {
    max-height: 530px;
  }
}
</style>
