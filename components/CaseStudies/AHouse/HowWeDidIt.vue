<template>
  <div class="a-house-container">
    <div :id="idForHidden" class="a-house-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="a-house-content">
      <div class="a-house-info item">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <CommonCircleArrowText
          :text="$t('case_studies.a-house.how-we-did-it.text')"
        />
        <CommonCircleArrowText
          :text="$t('case_studies.a-house.how-we-did-it.text_1')"
        />
        <CommonCircleArrowText
          :text="$t('case_studies.a-house.how-we-did-it.text_2')"
        />
      </div>
      <div class="img-content item">
        <img :src="image3" alt="A Hand Writing" />
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
.a-house-container {
  padding: 30px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.a-house-hidden {
  position: absolute;
  top: -100px;
}
.a-house-info {
  background-color: var(--primary-magenta);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  margin: 20px 0px;
}
.title {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 10px 0px;
}
.text-title {
  color: #fff;
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
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.did-it-heading {
  overflow-wrap: break-word;
}

.img-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  .a-house-container {
    padding: 30px 64px 100px;
  }
}
@media (min-width: 1200px) {
  .a-house-container {
    display: flex;
    gap: 48px;
  }
  .did-it-heading {
    overflow-wrap: break-word;
    width: 25%;
  }
  .a-house-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px;
    width: 60%;
  }
  .img-content {
    width: 40%;
    height: 400px;
  }
  .a-house-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 24px;
    width: 70%;
  }
}
</style>
