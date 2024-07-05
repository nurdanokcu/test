<script setup>
import {
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
} from '~/assets/images/caseStudies_images/fahrwerk_images';
</script>

<template>
  <div class="image-container">
    <div class="header-image">
      <img :src="image5" alt="fahrwerk" />
    </div>
    <div class="header-image">
      <img :src="image6" alt="fahrwerk" />
    </div>
    <div class="header-image">
      <img :src="image7" alt="fahrwerk" />
    </div>
    <div class="header-image">
      <img :src="image8" alt="fahrwerk" />
    </div>
    <div class="header-image">
      <img :src="image9" alt="fahrwerk" />
    </div>
    <div class="header-image">
      <img :src="image10" alt="fahrwerk" />
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: fit-content;
  gap: 12px;
}
.header-image {
  max-width: 180px;
}
.header-image img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
@media (min-width: 768px) {
}
@media (min-width: 1200px) {
  .image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1500px) {
  .header-image {
    max-width: unset;
  }
  .image-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
