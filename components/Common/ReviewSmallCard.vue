<script setup>
defineProps({
  logo: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    default: null,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    default: null,
  },
  path: {
    type: String,
    required: true,
  },
  hasRating: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-top" />
    <div class="card-body">
      <div class="card-logo-wrapper">
        <img
          v-if="logo"
          width="74"
          height="74"
          class="card-logo"
          :src="logo"
          alt="client-logo"
        />
        <div v-else class="card-logo-filler" />
      </div>
      <div class="card-text">
        <div class="card-header">
          <div :class="['card-header-name', { hasRating }]">
            <p class="card-header-name-person">
              {{ name }}
            </p>
            <p v-if="company" class="card-header-name-company">
              {{ company }}
            </p>
          </div>
          <div v-if="hasRating" class="card-header-rating">
            <IconsGeneralStarFilled />
            <p class="card-header-rating-number">
              {{ rating }}
            </p>
          </div>
        </div>
        <p class="card-comment">
          {{ comment }}
        </p>
        <CommonReviewLink :link-path="path" class="card-link" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: var(--home-mobile-max-width);
}
.card-top {
  width: 140px;
  height: 36px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 16px 16px 0px 0px;
}
.card-body {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #fff;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0px 16px 16px;
}
.card-logo-wrapper {
  flex-shrink: 0;
  width: 74px;
  height: 74px;
  background: #fff;
  border-radius: 50%;
}
.card-logo {
  border-radius: 50%;
  object-fit: contain;
}
.card-logo-filler {
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  border-radius: 50%;
}
.card-text {
  flex-grow: 1;
  text-align: left;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
.card-header-name {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 8px;
}
.card-header-name.hasRating {
  justify-content: space-between;
}
.card-header-name-person {
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
}
.card-header-name-company {
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
}
.card-header-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  line-height: 25px;
}
.card-comment {
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  padding: 0 60px 0 0;
}
.card-link {
  position: absolute;
  bottom: 0;
  right: -1px;
}

@media (min-width: 768px) {
  .card-top {
    width: 180px;
  }
}
</style>
