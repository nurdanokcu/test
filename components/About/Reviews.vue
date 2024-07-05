<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import {
  reviewsDesignEN,
  reviewsDesignDE,
  reviewsDevelopmentEN,
  reviewsDevelopmentDE,
  reviewsDigitalMarketingDE,
  reviewsDigitalMarketingEN,
} from '~/data/aboutReviews';

const { locale } = useI18n();
const activeSectionId = ref('design');
const reviews = computed(() => {
  if (locale.value === 'de') {
    return {
      digital: reviewsDigitalMarketingDE,
      design: reviewsDesignDE,
      development: reviewsDevelopmentDE,
    };
  } else {
    return {
      digital: reviewsDigitalMarketingEN,
      design: reviewsDesignEN,
      development: reviewsDevelopmentEN,
    };
  }
});

const activeSection = computed(() => {
  return reviews.value[activeSectionId.value].reviews;
});
function paginate(array, pageSize, pageNumber) {
  // Calculate start and end index
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const itemsOnPage = array.slice(startIndex, endIndex);
  const totalPages = Math.ceil(array.length / pageSize);

  return {
    itemsOnPage,
    totalPages,
    currentPage: pageNumber,
  };
}

const totalPages = computed(() => {
  return paginate(activeSection.value, 3, 1).totalPages;
});

const getContent = (page) => {
  return paginate(activeSection.value, 3, page).itemsOnPage;
};

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

const swiperRef = ref(null);
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
const handleSelectCategory = (id) => {
  activeSectionId.value = id;
  if (swiperRef.value) {
    swiperRef.value.slideTo(0, 300, false);
  }
};
const handleSlideChange = () => {
  const element = document.getElementById('reviews-content-hidden');
  if (element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the element is not intersecting (not visible)
        if (!entry.isIntersecting) {
          // If not visible, scroll into view
          element.scrollIntoView({ behavior: 'smooth' });
        }
        observer.unobserve(element);
      });
    });
    observer.observe(element);
  }
  element.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <section class="about-reviews">
    <div
      :id="$t('pagePath.aboutSection.reviews')"
      class="about-reviews-hidden"
    ></div>
    <CommonIntro
      class="about-reviews-title"
      :title="$t('about.review.title')"
    />
    <div class="reviews">
      <div class="reviews-header">
        <p class="reviews-header-text">
          {{ $t("about.review.subtitle") }}
        </p>
        <button
          v-for="review in reviews"
          :key="review.id"
          :title="review.name"
          :name="review.name"
          :class="[
            'reviews-category',
            {
              'reviews-category--active': activeSectionId === review.id,
            },
          ]"
          @click="handleSelectCategory(review.id)"
        >
          <span class="reviews-category-name">
            {{ review.name }}
          </span>
          <i
            :style="{
              backgroundImage: `url(${review.icon})`,
            }"
            class="reviews-category-icon"
          ></i>
        </button>
      </div>
      <div class="reviews-content">
        <div id="reviews-content-hidden"></div>
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :auto-height="true"
          :grab-cursor="true"
          :pagination="pagination"
          :modules="[Pagination]"
          class="about-reviews-swiper"
          @slide-change="handleSlideChange"
          @swiper="onSwiper"
        >
          <swiper-slide v-for="page in totalPages" :key="page">
            <TransitionGroup
              tag="ul"
              name="fade"
              class="reviews-items"
            >
              <CommonReviewItem
                v-for="review in getContent(page)"
                :key="review.id"
                :review="review"
              />
            </TransitionGroup>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style>
.about-reviews-swiper .swiper-pagination-bullet {
  background: #fff;
  width: 24px;
  height: 24px;
  color: var(--Black, #000);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  opacity: 1;
  transition: all 0.3s ease;
}

.about-reviews-swiper .swiper-pagination-bullet-active {
  font-size: 20px;
  background: var(
    --Gradient-Logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<style scoped>
.about-reviews {
  position: relative;
  padding: 24px;
  width: 100%;
  max-width: var(--max-width-content);
  margin: 0 auto;
}

.about-reviews-hidden {
  position: absolute;
  top: -120px;
  left: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.about-reviews-title {
  margin-bottom: 24px;
}

.reviews-header-text {
  display: none;
}

.reviews-content {
  position: relative;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

#reviews-content-hidden {
  position: absolute;
  top: -160px;
  left: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.reviews-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.reviews-category {
  display: flex;
  justify-content: center;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  height: 36px;
  background: #fff;
  padding: 8px 16px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 56px;
  transition: all 0.3s ease;
}

.reviews-category--active {
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  width: 172px;
}

.reviews-category-name {
  white-space: nowrap;
  display: none;
  transition: all 0.3s ease;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.reviews-category-icon {
  display: flex;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.reviews-category--active .reviews-category-name {
  display: block;
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.reviews-category--active .reviews-category-icon {
  display: none;
}

.reviews-items {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .about-reviews {
    padding: 80px 32px;
  }

  .about-reviews-title {
    margin-bottom: 60px;
    text-align: center;
  }

  .reviews-category {
    width: auto;
    padding: 8px 32px;
  }

  .reviews-category-name {
    display: block;
  }

  .reviews-category-icon {
    display: none;
  }
}

@media (min-width: 1024px) {
  .about-reviews {
    padding: 64px;
  }
}

@media (min-width: 1200px) {
  .about-reviews {
    display: flex;
    gap: 80px;
    justify-content: space-between;
  }

  .about-reviews-title {
    margin-bottom: 0;
    text-align: left;
    width: var(--about-section-title-width);
  }

  .reviews {
    width: calc(100% - var(--about-section-title-width) - 80px);
  }

  .reviews-header-text {
    display: block;
    color: var(--Black, #000);
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 20%;
  }
  .reviews-category {
    width: auto;
    padding: 8px 24px;
  }
}

@media (min-width: 1500px) {
  .reviews-category {
    padding: 8px 48px;
  }
  .reviews-header-text {
    width: auto;
  }
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
  overflow: hidden;
  width: 0;
}
</style>
