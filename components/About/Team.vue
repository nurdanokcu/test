<script setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { teamEn, teamDe } from '~/data/team.js';

const { locale } = useI18n();
const team = computed(() => {
  return locale.value === 'en' ? teamEn : teamDe;
});

const currentSlide = ref(0);
const settings = {
  itemsToShow: 1.5,
  snapAlign: 'end',
};

const breakpoints = {
  768: {
    itemsToShow: 2,
  },
  960: {
    itemsToShow: 2.5,
  },
  1024: {
    itemsToShow: 3,
  },
  1400: {
    itemsToShow: 4.1,
  },
};
const teamCarousel = ref(null);

const next = () => {
  teamCarousel.value.next();
};
const prev = () => {
  teamCarousel.value.prev();
};

const teamMember = computed(() => {
  return team.value[currentSlide.value];
});
</script>

<template>
  <div class="team">
    <div :id="$t('pagePath.aboutSection.team')" class="team-hidden"></div>
    <div class="team-header">
      <p class="team-title">
        {{ $t("about.team.title") }}
      </p>
      <div class="team-info-container">
        <span class="quotation-mark">“</span>
        <div class="team-info">
          <p class="team-info-name">
            {{ teamMember.name }}
          </p>
          <span v-if="teamMember.position !== ''" class="team-info-position">
            {{ teamMember.position }}
          </span>
          <p v-if="teamMember.text !== ''" class="team-info-text">
            {{ teamMember.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-wrapper">
      <div class="carousel-opacity-box" />
      <Carousel
        v-bind="settings"
        ref="teamCarousel"
        v-model="currentSlide"
        class="team-carousel"
        :wrap-around="true"
        :breakpoints="breakpoints"
      >
        <Slide v-for="member in team" :key="member.name">
          <div class="team-image-wrapper">
            <NuxtImg
              class="team-image"
              :src="member.image"
              :alt="member.name"
              format="webp"
              loading="lazy"
            />
          </div>
        </Slide>
        <template #addons>
          <button
            type="button"
            class="prev-button"
            aria-label="Navigate to previous slide"
            @click="prev"
          >
            <IconsAboutNextPrev direction="prev" />
          </button>
          <button
            type="button"
            class="next-button"
            aria-label="Navigate to next slide"
            @click="next"
          >
            <IconsAboutNextPrev direction="next" />
          </button>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style>
.team-carousel .carousel__track {
  transform-style: preserve-3d;
  position: relative;
  height: 500px;
}
</style>

<style scoped>
.team {
  padding: 16px 16px 16px 0;
  max-width: var(--max-width-content);
  margin: 0 auto;
  position: relative;
}
.team-hidden {
  position: absolute;
  top: -120px;
}

.team-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 16px;
}

.team-title {
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000;
}

.team-info-container {
  display: flex;
  justify-content: flex-end;
  gap: 64px;
  height: 320px;
}

.quotation-mark {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 128px;
  line-height: 80%;
  background: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 550px;
}

.team-info-name {
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  background: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-info-position {
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #000;
  margin: 0 8px 32px 0;
}

.team-info-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000;
  text-align: left;
  margin-bottom: 16px;
}

.team-image-wrapper {
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 500px;
  overflow: hidden;
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  cursor: grab;
}

.carousel__slide {
  padding: 5px;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  width: 300px;
  height: 450px;
  margin: auto 0;
}

.carousel__slide--active {
  height: 500px;
}

.carousel__slide--active .team-image {
  filter: grayscale(0);
}

.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 3;
}

.prev-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 3;
}

@media (min-width: 768px) {
  .carousel-wrapper {
    position: relative;
  }

  .carousel-opacity-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    background: linear-gradient(
      90deg,
      #ffffff -2.54%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
  }

  .carousel-wrapper {
    width: 96%;
  }

  .next-button {
    right: -42px;
  }

  .prev-button {
    left: 30%;
  }
}

@media (min-width: 1024px) {
  .team-header {
    padding: 32px 64px;
    flex-direction: row;
    justify-content: space-between;
  }

  .team-info-container {
    height: 230px;
    gap: 80px;
  }

  .team-title {
    max-width: 250px;
  }
}

@media (min-width: 1200px) {
  .team-info-container {
    gap: 150px;
  }

  .team {
    padding: 0 64px;
  }

  .team-header {
    padding: 0;
  }
}
</style>
