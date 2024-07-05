<template>
  <div class="solved-it-container">
    <div :id="idForHidden" class="solved-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.regio.solve-it.title')"
      class="solved-it-heading"
    />
    <div class="solved-it-text">
      <div class="points-container">
        <CommonPointerText :text="$t('case_studies.fahrwerk.solve-it.text')" />
        <CommonPointerText
          :text="$t('case_studies.fahrwerk.solve-it.text_1')"
        />
        <CommonPointerText
          :text="$t('case_studies.fahrwerk.solve-it.text_2')"
        />
        <CommonPointerText
          :text="$t('case_studies.fahrwerk.solve-it.text_3')"
        />
        <CommonPointerText
          :text="$t('case_studies.fahrwerk.solve-it.text_4')"
        />
        <div class="fahrwerk-image-container">
          <img :src="image3" alt="design-line" />
        </div>
      </div>
      <div class="point-content">
        <div>
          <CommonPointerText
            :text="$t('case_studies.fahrwerk.solve-it.text_5')"
          />
          <CommonPointerText
            :text="$t('case_studies.fahrwerk.solve-it.text_6')"
          />
          <CommonPointerText
            :text="$t('case_studies.fahrwerk.solve-it.text_7')"
          />
        </div>
        <div class="fahrwerk-image-container">
          <img
            class="img2"
            :src="image2"
            alt="fahrwerk-website-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  image3,
  image2,
} from '~/assets/images/caseStudies_images/fahrwerk_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.solved-it-container {
  padding: 30px 32px;
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

.fahrwerk-image-container img {
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
    grid-template-columns: 49% 49%;
    gap: 20px;
    display: grid;
  }

  .point-content {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
