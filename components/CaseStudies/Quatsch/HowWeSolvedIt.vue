<template>
  <div class="solved-it-container">
    <div :id="idForHidden" class="solved-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.regio.solve-it.title')"
      class="solved-it-heading"
    />
    <div class="solved-it-text">
      <div class="points-container">
        <CommonPointerText :text="$t('case_studies.quatsch.solve-it.text')" />
        <CommonPointerText :text="$t('case_studies.quatsch.solve-it.text_1')" />
        <CommonPointerText :text="$t('case_studies.quatsch.solve-it.text_2')" />
        <CommonPointerText :text="$t('case_studies.quatsch.solve-it.text_3')" />
        <div class="mage">
          <img :src="image1" alt="design-line" />
        </div>
      </div>
      <div class="point-content">
        <div>
          <CommonPointerText
            :text="$t('case_studies.quatsch.solve-it.text_4')"
          />
          <CommonPointerText
            :text="$t('case_studies.quatsch.solve-it.text_5')"
          />
          <CommonPointerText
            :text="$t('case_studies.quatsch.solve-it.text_6')"
          />
          <CommonPointerText
            :text="$t('case_studies.quatsch.solve-it.text_7')"
          />
        </div>
        <div class="mage">
          <img
            class="img2"
            :src="image3"
            alt="fahrwerk-website-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  image1,
  image3,
} from '~/assets/images/caseStudies_images/quatsch_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.solved-it-container {
  padding: 30px 24px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.solved-it-hidden {
  position: absolute;
  top: -100px;
}
.regio-image img {
  width: 100%;
  height: 100%;
}
.img2 {
  box-shadow: 74px 74px 140px 0px rgba(116, 15, 73, 0.2);
}
.mage img {
  width: 100%;
  height: 100%;
  border-radius: 16px;
}
.how-we-did-it {
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
}
.title {
  color: var(--magenta, #740f49);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.text {
  color: var(--black, #000);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media (min-width: 768px) {
  .solved-it-container {
    padding: 30px 32px;
  }
}
@media (min-width: 1024px) {
  .solved-it-container {
    padding: 30px 64px;
  }
}
@media (min-width: 1200px) {
  .solved-it-container {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
  }
  .solved-it-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .point-content {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
