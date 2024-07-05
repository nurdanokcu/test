<template>
  <div class="title">
    <div class="ratings">
      <NuxtLink
        class="sortlist-rating"
        to="https://www.sortlist.co.uk/agency/propaganda-solutions-gmbh"
        target="_blank"
      >
        <NuxtImg
          class="sortlist-rating-img"
          alt="Click here to view the agency's profile on Sortlist"
          src="https://www.sortlist.com/widget/propaganda-solutions-gmbh/review?ref=review-widget-1"
          width="340"
          height="140"
          loading="lazy"
        />
      </NuxtLink>
      <HomeHeaderStarRating class="star-rating" />
    </div>
    <h1 class="main-title">
      {{ $t("home.header.title") }}
    </h1>
    <div class="partners-container">
      <CommonPartners />
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.main-title {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-transform: uppercase;
  color: #ffffff;
}

.partners-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.ratings {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  padding: 64px 0 0 0;
}

.sortlist-rating {
  position: absolute;
  top: -40%;
  z-index: 1;
  width: 340px;
  height: 140px;
}

.sortlist-rating-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.star-rating {
  z-index: 2;
}

@media screen and (min-width: 768px) {
  .title {
    gap: 0;
    max-width: 850px;
  }

  .main-title {
    font-size: 64px;
  }

  .partners-container {
    justify-content: flex-start;
  }

  .ratings {
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    padding: 0;
    margin-bottom: -44px;
  }

  .sortlist-rating {
    position: static;
  }

  .star-rating {
    margin-bottom: 0;
    padding-right: 10%;
  }
}

@media screen and (min-width: 1024px) {
  .title {
    max-width: 100%;
  }

  .main-title {
    font-size: 80px;
  }
}

@media screen and (min-width: 1500px) {
  .main-title {
    font-size: 96px;
  }
}
</style>
