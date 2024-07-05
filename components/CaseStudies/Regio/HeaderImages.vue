<script setup>
import {
  regioimage4,
  regioimage5,
  regioimage6,
} from '~/assets/images/caseStudies_images/regio_images';
</script>

<template>
  <div>
    <div class="images">
      <div class="image-wrapper image-wrapper--1">
        <img
          class="image"
          :src="regioimage4"
          alt="Regio stairlift"
        />
      </div>
      <div class="image-wrapper image-wrapper--2">
        <img
          class="image"
          :src="regioimage6"
          alt="Regio"
        />
      </div>
      <div class="image-wrapper image-wrapper--3">
        <img
          class="image"
          :src="regioimage5"
          alt="Regio"
        />
      </div>
    </div>
    <div class="images--laptop">
      <div class="images-left">
        <div class="image-wrapper">
          <img
            class="image"
            :src="regioimage4"
            alt="Regio stairlift"
          />
        </div>
        <div class="image-wrapper">
          <img
            class="image"
            :src="regioimage5"
            alt="Regio"
          />
        </div>
      </div>
      <div class="image-wrapper image-wrapper-right">
        <img
          class="image"
          :src="regioimage6"
          alt="Regio"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.images {
  display: flex;
  gap: 12px;
}

.image-wrapper {
  width: 100%;
}

.image-wrapper--2 {
  margin-top: 120px;
}

.image-wrapper--3 {
  margin-top: 60px;
}

.image {
  width: 100%;
  border-radius: 16px;
}

.images--laptop {
  display: none;
}

@media (min-width: 1200px) {
  .images {
    display: none;
  }

  .images--laptop {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .images-left {
    width: 50%;
  }

  .image-wrapper-right {
    margin-top: 0;
    width: 50%;
  }
}

@media (min-width: 1500px) {
  .images {
    display: flex;
  }

  .images--laptop {
    display: none;
  }
}
</style>
