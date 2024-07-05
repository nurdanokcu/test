<script setup>
import { googleLogo } from '~/assets/images/logo';

const rating = ref(5);
</script>

<template>
  <div class="google-review">
    <div class="google-logo-wrapper">
      <img
        class="google-logo"
        :src="googleLogo"
        alt="Google Logo"
      />
    </div>
    <div class="stars-container">
      <div
        v-for="n in 5"
        :key="n"
        class="star"
      >
        <span v-if="n <= Math.floor(rating)">
          <i class="star filled" />
        </span>
        <span v-else-if="n == Math.ceil(rating) && rating % 1 != 0">
          <i class="star half-filled" />
        </span>
        <span v-else>
          <i class="star star-white" />
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.google-review {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.google-logo-wrapper {
  width: 36px;
  height: 38px;
}

.google-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.stars-container {
  display: flex;
  gap: 4px;
}

.star {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
}

.star i {
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.filled {
  background-image: url("~/assets/images/icons/star_filled.svg");
}

.half-filled {
  background-image: url("~/assets/images/icons/star_half-filled.svg");
}

.star-white {
  background-image: url("~/assets/images/icons/star_outline.svg");
}
</style>
