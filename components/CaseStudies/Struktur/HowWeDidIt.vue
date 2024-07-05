<template>
  <div class="struktur-container">
    <div :id="idForHidden" class="struktur-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="struktur-conten">
      <div class="struktur-content item">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.struktur.how-we-did-it.text") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.struktur.how-we-did-it.text_1") }}
        </p>
      </div>
      <div class="img-content item">
        <div class="img-overlay"></div>
        <img :src="image3" alt="laptop image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { image3 } from '~/assets/images/caseStudies_images/ahouse_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.struktur-container {
  padding: 30px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.struktur-hidden {
  position: absolute;
  top: -100px;
}
.struktur-content {
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
  margin: 10px 0px;
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
.did-it-heading {
  margin-bottom: 80px;
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
  .struktur-container {
    padding: 30px 64px 100px;
  }
}
@media (min-width: 1200px) {
  .struktur-container {
    display: flex;
    gap: 48px;
  }
  .did-it-heading {
    width: 25%;
  }
  .struktur-conten {
    width: 70%;
  }

  .img-content {
    max-height: 530px;
  }
  .img-content img {
    max-height: 530px;
  }
}
@media (min-width: 1500px) {
  .struktur-content {
    margin: 0px 0px 20px;
  }
}
</style>
