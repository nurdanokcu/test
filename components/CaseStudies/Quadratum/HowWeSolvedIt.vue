<script setup>
import {
  line1,
  line2,
} from '~/assets/images/caseStudies_images/lilienthal_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="solved-it-container">
    <div :id="idForHidden" class="solved-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.regio.solve-it.title')"
      class="solved-it-heading"
    />
    <div class="content">
      <p class="content-intro">
        {{ $t("case_studies.quadratum.solve-it.text") }}
      </p>
      <div class="point-content">
        <div class="pointer">
          <CommonPointerText
            :text="$t('case_studies.quadratum.solve-it.text_1')"
          />
          <div class="line-image--mobile">
            <img :src="line1" alt="design-line" />
          </div>
          <div class="line-image--desktop">
            <img :src="line2" alt="design-line" />
          </div>
        </div>
        <div>
          <CommonPointerText
            class="pointer--second"
            :text="$t('case_studies.quadratum.solve-it.text_2')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

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
.solved-it-heading {
  margin-bottom: 48px;
}
.line-image--desktop {
  display: none;
}
.pointer {
  position: relative;
  padding-bottom: 64px;
}
.line-image--mobile {
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 8px;
  height: 96%;
  width: 1px;
}
.line-image--mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-intro {
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .pointer {
    padding: 0;
    height: 100px;
  }
  .pointer--second {
    margin-left: 260px;
  }
  .line-image--mobile {
    display: none;
  }
  .line-image--desktop {
    display: block;
    position: absolute;
    top: 24px;
    width: 270px;
    height: 180px;
  }
  .line-image--desktop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content-intro {
    font-size: 20px;
    margin-bottom: 24px;
  }
  .pointer,
  .pointer--second {
    font-size: 16px;
  }
}
@media (min-width: 1024px) {
  .solved-it-container {
    padding: 80px 64px;
  }
}
@media (min-width: 1200px) {
  .solved-it-container {
    display: grid;
    grid-template-columns: 25% 70%;
    justify-content: space-between;
  }
}
</style>
