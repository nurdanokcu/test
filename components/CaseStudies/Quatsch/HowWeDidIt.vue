<template>
  <div class="quatsch-container">
    <div :id="idForHidden" class="quatsch-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="quatsch-content">
      <div class="quatsch-info item">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <div class="arrow-text">
          <IconsGeneralCircleArrow theme="white" class="icon" />
          <p class="text">
            {{ $t("case_studies.quatsch.how-we-did-it.text") }}
          </p>
        </div>
        <div class="arrow-text">
          <IconsGeneralCircleArrow theme="white" class="icon" />
          <p class="text">
            {{ $t("case_studies.quatsch.how-we-did-it.text_1") }}
          </p>
        </div>
        <div class="arrow-text">
          <IconsGeneralCircleArrow theme="white" class="icon" />
          <p class="text">
            {{ $t("case_studies.quatsch.how-we-did-it.text_2") }}
          </p>
        </div>
        <div class="arrow-text">
          <IconsGeneralCircleArrow theme="white" class="icon" />
          <p class="text">
            {{ $t("case_studies.quatsch.how-we-did-it.text_3") }}
          </p>
        </div>
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
.quatsch-container {
  padding: 30px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.quatsch-hidden {
  position: absolute;
  top: -100px;
}
.quatsch-info {
  background-color: var(--primary-magenta);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  margin: 20px 0px;
}
.title {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 10px 0px;
}
.text-title {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px 0px 25px;
}
.arrow-text {
  display: grid;
  grid-template-columns: 8% 88%;
  gap: 20px;
  align-items: center;
  margin: 15px 0px 0px;
}
.text {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.did-it-heading {
  overflow-wrap: break-word;
}

.img-content {
  position: relative;
  height: 100%;
}
.img-content img {
  width: 100%;
  height: 100%;
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
  .quatsch-container {
    padding: 30px 64px 100px;
  }
}
@media (min-width: 1200px) {
  .quatsch-container {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
    justify-content: space-between;
  }
  .did-it-heading {
    overflow-wrap: break-word;
  }
}
@media (min-width: 1500px) {
  .quatsch-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 24px;
  }
  .quatsch-info {
    margin: 0;
    padding: 64px 20px;
    width: 50%;
  }
  .img-content {
    width: 50%;
  }
}
</style>
