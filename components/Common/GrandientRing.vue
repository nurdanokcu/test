<template>
  <div class="gradient-desktop">
    <img
      class="gradient-img"
      :src="ellipse"
      alt="gradient-ring"
    />
  </div>
</template>

<script setup>
import { ellipse } from '~/assets/images/general';
</script>

<style scoped>
.gradient-desktop {
  display: none;
}

@media (min-width: 1500px) {
  .gradient-desktop {
    display: block;
    position: absolute;
    transform: rotate(258deg);
    width: 720px;
    right: -330px;
    bottom: -52px;
    z-index: -99;
  }

  .gradient-img {
    width: 100%;
    height: 100%;
  }
}
</style>
