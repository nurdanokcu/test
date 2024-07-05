<script setup>
const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});
const firstLetters = computed(() => {
  return props.review.name
    .split(' ')
    .map(word => word[0])
    .join('');
});
</script>

<template>
  <li class="item">
    <div class="item-info">
      <div class="item-picture-wrapper">
        <img
          v-if="review.logo"
          class="item-picture"
          :src="review.logo"
          :alt="review.name"
        />
        <div
          v-else
          :style="{ backgroundColor: review.bgColor }"
          class="item-pic-placeholder"
        >
          {{ firstLetters }}
        </div>
      </div>
      <div class="item-texts">
        <div class="item-header">
          <div class="item-names">
            <p class="item-name">
              {{ review.name }}
            </p>
            <p class="item-company">
              {{ review.company }}
            </p>
          </div>
          <p class="item-rating">
            <IconsGeneralStarFilled />
            <span>{{ review.rating }}</span>
          </p>
        </div>
        <p class="item-review">
          {{ review.review }}
        </p>
      </div>
    </div>
    <div v-if="review.image" class="item-image-wrapper">
      <img
        v-if="review.image"
        class="item-image"
        :src="review.image"
        :alt="review.company"
      />
      <CommonReviewLink
        class="item-link"
        :link-path="localePath(review.link)"
      />
    </div>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
}
.item-info {
  display: flex;
  gap: 16px;
}
.item-picture-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
}
.item-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-pic-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  text-shadow: 0px 4px 15.2px rgba(0, 0, 0, 0.25);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.item-names,
.item-header,
.item-texts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.item-name {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.item-company {
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.item-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.item-review {
  color: var(--Black, #000);
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.item-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  min-height: 200px;
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
}
.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-link {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media (min-width: 768px) {
  .item-names,
  .item-header {
    flex-direction: row;
    align-items: center;
  }
  .item-header {
    justify-content: space-between;
  }
}
@media (min-width: 1500px) {
  .item {
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
  }
  .item-info,
  .item-texts {
    width: 100%;
  }
  .item-image-wrapper {
    min-height: 150px;
    width: 50%;
  }
}
</style>
