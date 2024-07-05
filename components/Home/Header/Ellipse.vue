<script setup>
import { ellipse1, ellipse2 } from '~/assets/images/home_images';
</script>

<template>
  <div class="ellipse">
    <img
      class="ellipse-img"
      :src="ellipse1"
      alt="ellipse image"
    />
    <img
      class="ellipse-img"
      :src="ellipse2"
      alt="ellipse image"
    />
    <p class="ellipse-text">
      {{ $t("home.header.ellipseText") }}
      <br />
      {{ $t("home.header.ai") }}
    </p>
  </div>
</template>

<style scoped>
.ellipse {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
}

.ellipse-img {
  position: absolute;
  top: 10%;
  left: 0;
  width: 260px;
  height: auto;
}

.ellipse-text {
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  z-index: 2;
}

@media screen and (min-width: 768px) {
  .ellipse {
    width: 350px;
  }

  .ellipse-text {
    text-align: left;
  }

  br {
    display: none;
  }

  .ellipse-img {
    top: -20%;
  }
}
</style>
