<template>
  <div class="wirebond-container">
    <div :id="idForHidden" class="wirebond-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="wirebond-conten">
      <div class="wirebond-content item">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.wirebond.how-we-did-it.text") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.wirebond.how-we-did-it.text_1") }}
        </p>
      </div>
      <div class="img-content item">
        <img :src="citycampusimage" alt="laptop image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { citycampusimage } from '~/assets/images/caseStudies_images/cityCampus_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.wirebond-container {
  padding: 30px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.wirebond-hidden {
  position: absolute;
  top: -100px;
}
.wirebond-content {
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
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
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

.img-content img {
  width: 100%;
  height: 100%;
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
  .wirebond-container {
    padding: 30px 64px 100px;
  }
}
@media (min-width: 1200px) {
  .wirebond-container {
    display: flex;
    gap: 48px;
  }
  .did-it-heading {
    width: 25%;
  }
  .wirebond-conten {
    width: 70%;
  }
}
@media (min-width: 1500px) {
  .wirebond-content {
    margin: 0px 0px;
  }
  .wirebond-conten {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 24px;
  }
  .item {
    flex: 2 1 auto;
    width: 300px;
  }
}
</style>
