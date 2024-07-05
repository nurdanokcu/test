<script setup>
import {
  image1,
  image2,
  image3,
  image4,
} from '~/assets/images/caseStudies_images/mybudapester_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="solved-it">
    <div :id="idForHidden" class="solved-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.regio.solve-it.title')"
      class="solved-it-header"
    />
    <div class="solved-it-content">
      <div class="solved-it-left">
        <CommonPointerText
          class="solved-it-text"
          :text="$t('case_studies.mybudapester.solve-it.text')"
        />
        <div class="image-wrapper image-wrapper-grid">
          <div class="grid-item--1">
            <img :src="image1" alt="instagram post" />
          </div>
          <div class="grid-item--2">
            <img :src="image2" alt="instagram post" />
          </div>
          <div class="grid-item--3">
            <img :src="image3" alt="instagram post" />
          </div>
        </div>
      </div>
      <div class="image-wrapper image-wrapper-right">
        <div class="image-container">
          <img :src="image4" alt="instagram post" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.solved-it {
  padding: 30px 24px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.solved-it-hidden {
  position: absolute;
  top: -100px;
}

.solved-it-header {
  margin-bottom: 48px;
}

.solved-it-text {
  margin-bottom: 24px;
}

.image-wrapper {
  background-color: rgb(237 233 233);
  border-radius: 15px;
  margin: 0 auto;
  width: 100%;
  padding: 30px;
  margin-bottom: 30px;
}

.image-wrapper--right {
  box-shadow: 74px 74px 140px 0px rgba(116, 15, 73, 0.2);
  padding: 30px 100px;
}

.image-wrapper-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 30px 30px;
}

.grid-item--1 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.grid-item--2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}

.grid-item--3 {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 16px;
}

.image-container {
  width: 100%;
  height: 100%;
  max-width: 280px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .solved-it {
    padding: 30px 32px;
    max-width: var(--max-width-content);
    margin: auto;
  }
}

@media (min-width: 1024px) {
  .solved-it {
    padding: 30px 64px;
  }
}

@media (min-width: 1200px) {
  .solved-it {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
  }

  .solved-it-content {
    display: flex;
    gap: 24px;
  }

  .solved-it-left {
    display: flex;
    flex-direction: column;
  }

  .image-wrapper {
    margin-bottom: 0;
  }

  .image-wrapper-grid {
    flex-grow: 1;
  }
}
</style>
