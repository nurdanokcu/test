<template>
  <section class="review">
    <div class="review-motto">
      <div class="review-ellipse">
        <NuxtImg
          class="ellipse-img"
          src="/ellipse.webp"
          alt="design-ring"
          width="100%"
          height="400"
        />
      </div>
      <h2 class="review-title">
        {{ $t("home.reviews.meetClients_1") }}
        <br />
        {{ $t("home.reviews.meetClients_2") }}
      </h2>
    </div>
    <div class="client-reviews">
      <HomeReviewCards />
    </div>
  </section>
</template>

<style scoped>
.review {
  margin-bottom: 16px;
}

.review-motto {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  overflow-x: hidden;
}

.review-title {
  padding: 0 24px;
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
}

.review-ellipse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.35;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.ellipse-img {
  height: 100%;
  object-fit: contain;
}

@media (min-width: 768px) {
  .review-motto {
    width: 700px;
  }

  .review-ellipse {
    left: 43%;
  }
}

@media (min-width: 1200px) {
  .review {
    display: flex;
    justify-content: space-between;
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding: 100px 64px 0;
  }

  .review-motto {
    margin: 0 auto 0 0;
    justify-content: flex-start;
    width: fit-content;
    overflow: visible;
  }

  .review-ellipse {
    width: 720px;
    opacity: 1;
  }

  .ellipse-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .review-title {
    padding: 0;
  }
}

@media (min-width: 1500px) {
  .review-title {
    font-size: 64px;
    line-height: 64px;
  }
}
</style>
