<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const localePath = useLocalePath();
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const activeCarousel = ref(null);
const currentSlide = ref(0);
const settings = {
  itemsToShow: 1,
  snapAlign: 'end',
};
const next = () => {
  activeCarousel.value.next();
};
const prev = () => {
  activeCarousel.value.prev();
};
</script>

<template>
  <div class="prev-works-container">
    <div class="prev-works-wrapper">
      <div class="prev-works">
        <div class="prev-carousel-wrapper">
          <Carousel
            v-bind="settings"
            ref="activeCarousel"
            v-model="currentSlide"
            class="prev-works-carousel"
            :wrap-around="true"
            :autoplay="1500"
            :pause-autoplay-on-hover="true"
            :transition="600"
          >
            <Slide v-for="items in data" :key="items.id">
              <div class="work-image-wrapper">
                <img
                  class="work-image"
                  :src="items.image"
                  :alt="items.alt"
                />
              </div>
            </Slide>
            <template #addons>
              <button
                type="button"
                title="previous"
                name="prev-Button"
                class="works-carousel-btn works-carousel-btn--prev"
                aria-label="Navigate to previous slide"
                @click="prev"
              >
                <IconsGeneralArrowForward :direction="'left'" />
              </button>
              <button
                type="button"
                title="next"
                name="next-Button"
                class="works-carousel-btn works-carousel-btn--next"
                aria-label="Navigate to next slide"
                @click="next"
              >
                <IconsGeneralArrowForward />
              </button>
              <div class="pagination-wrapper">
                <Pagination />
              </div>
            </template>
          </Carousel>
        </div>
        <div class="prev-content">
          <div class="prev-content-top">
            <p class="prev-content-title">
              {{ data[currentSlide].title }}
            </p>
            <p class="prev-content-text">
              {{ data[currentSlide].text }}
            </p>
          </div>
          <div class="prev-content-bottom">
            <div class="prev-content-button">
              <CommonShowMore
                :is-link="true"
                :path="localePath(data[currentSlide].readmore)"
                :text="$t('about.review.showMore')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.prev-works-carousel .carousel__viewport {
  height: 100%;
}
.prev-works-carousel.carousel {
  position: static !important;
}
.prev-works-carousel .carousel__pagination-button::after {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.2;
  background: var(--gradient-logo);
  transition: background-color 0.3s ease;
}
.prev-works-carousel .carousel__pagination-button:hover::after,
.prev-works-carousel .carousel__pagination-button--active::after {
  background: var(--gradient-logo);
  opacity: 1;
}
.prev-works-carousel ol {
  padding: 0;
}
.prev-works-carousel .carousel__pagination {
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>

<style scoped>
.prev-works-wrapper {
  padding: 0 68px 0 0;
  margin: 0 auto;
  position: relative;
}
.prev-works {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid #dcdcdc;
  background: #fff;
  height: 768px;
  overflow: hidden;
}

.prev-works-carousel {
  height: 100%;
}
.work-image-wrapper {
  width: 100%;
  height: 332px;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.work-image {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
}
.works-carousel-btn {
  height: 100%;
  width: 64px;
  z-index: 3;
  border-radius: 10px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
.works-carousel-btn:hover {
  opacity: 0.9;
}
.works-carousel-btn--prev {
  display: none;
  background: linear-gradient(
      134deg,
      rgba(36, 0, 255, 0.8) 0%,
      rgba(235, 111, 14, 0.8) 100%
    ),
    url("~/assets/images/design_images/carousel-image2.jpeg");
  position: absolute;
  top: 0;
  left: 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.works-carousel-btn--next {
  background: linear-gradient(
      134deg,
      rgba(36, 0, 255, 0.8) 0%,
      rgba(235, 111, 14, 0.8) 100%
    ),
    url("~/assets/images/design_images/carousel-image1.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
}
.pagination-wrapper {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.prev-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: space-between;
}
.prev-content-top {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.prev-content-bottom {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 32px;
}
.prev-content-title {
  color: #1f1f1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  text-align: left;
}
.prev-content-text {
  color: #606060;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
}
@media (min-width: 768px) {
  .prev-works-container {
    padding: 0;
  }
  .prev-works-wrapper {
    padding: 0 78px;
  }
  .works-carousel-btn--prev {
    display: block;
  }
  .work-image-wrapper {
    height: 468px;
  }
  .prev-works {
    display: flex;
    flex-direction: row;
    height: 468px;
  }
  .prev-carousel-wrapper,
  .prev-content {
    width: 50%;
    height: 100%;
  }
  .pagination-wrapper {
    position: absolute;
    left: calc(50% + 20px);
  }
}
@media (min-width: 1500px) {
  .works-carousel-btn {
    width: 100px;
  }
  .prev-works-wrapper {
    padding: 0 108px;
  }
}
</style>
