<template>
  <div class="get-from-it-container">
    <div :id="idForHidden" class="get-from-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.got-it.title')"
      class="get-from-it-heading"
    />
    <div class="text-container">
      <div class="text-content">
        <p class="title">
          {{ $t("case_studies.a-house.get-from-it.title_1") }}
        </p>
        <p class="text">
          {{ $t("case_studies.a-house.get-from-it.text_1") }}
        </p>
      </div>
      <div class="text-content griditem2">
        <p class="title">
          {{ $t("case_studies.a-house.get-from-it.title_2") }}
        </p>
        <p class="text">
          {{ $t("case_studies.a-house.get-from-it.text_2") }}
        </p>
      </div>
      <div class="text-content griditem3">
        <div class="image-content">
          <img :src="image5" alt="A picture of a laptop showing analysis" />
        </div>
        <p class="title-text">
          {{ $t("case_studies.a-house.get-from-it.text_3") }}
        </p>
        <div class="check-text">
          <IconsGeneralFluentCheck />
          <p class="small-text">
            {{ $t("case_studies.a-house.get-from-it.text_4") }}
          </p>
        </div>
        <div class="check-text">
          <IconsGeneralFluentCheck />
          <p class="small-text">
            {{ $t("case_studies.a-house.get-from-it.text_5") }}
          </p>
        </div>
        <div class="check-text">
          <IconsGeneralFluentCheck />
          <p class="small-text">
            {{ $t("case_studies.a-house.get-from-it.text_6") }}
          </p>
        </div>
        <div class="check-text">
          <IconsGeneralFluentCheck />
          <p class="small-text">
            {{ $t("case_studies.a-house.get-from-it.text_7") }}
          </p>
        </div>
        <div class="check-text">
          <IconsGeneralFluentCheck />
          <p class="small-text">
            {{ $t("case_studies.a-house.get-from-it.text_8") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { image5 } from '~/assets/images/caseStudies_images/ahouse_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.get-from-it-container {
  padding: 20px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.get-from-it-hidden {
  position: absolute;
  top: -100px;
}
.text-container {
  display: grid;
  row-gap: 20px;
  margin: 50px 0px;
}
.text-content {
  padding: 30px 25px;
  border-radius: 20px;
  border: 2px solid var(--primary-magenta);
}
.title {
  color: var(--magenta, #740f49);
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 80.2%;
  text-transform: uppercase;
}
.text {
  color: var(--black, #000);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 10px;
}
.get-from-it-heading {
  overflow-wrap: break-word;
}
.title-text {
  color: var(--magenta, #740f49);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 10px 0px;
}
.small-text {
  color: var(--black, #000);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.image-content {
  height: 230px;
  width: 100%;
}
.image-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.check-text {
  display: grid;
  grid-template-columns: 10% 85%;
  gap: 10px;
  margin: 10px 0px 5px;
}
@media (min-width: 768px) {
  .text-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    margin: 50px 0px;
  }
  .griditem3 {
    grid-column: span 2;
  }
}
@media (min-width: 1024px) {
  .get-from-it-container {
    padding: 50px 64px;
  }
}
@media (min-width: 1200px) {
  .get-from-it-container {
    display: flex;
    gap: 48px;
  }
  .get-from-it-heading {
    overflow-wrap: break-word;
    width: 25%;
  }
  .text-container {
    width: 70%;
    margin: 0;
  }
}
@media (min-width: 1500px) {
  .griditem2 {
    grid-row: 2;
  }
  .griditem3 {
    grid-column: 2;
    grid-row: span 2;
    width: 571px;
  }
}
</style>
