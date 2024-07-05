<script setup>
import MasonryWall from '@yeger/vue-masonry-wall';
import {
  quadratumitemsEn,
  quadratumitemsDe,
} from '~/data/quadratumMansoryItem.js';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});

const { locale } = useI18n();
const items = computed(() => {
  return locale.value === 'en' ? quadratumitemsEn : quadratumitemsDe;
});
</script>

<template>
  <div class="improvements">
    <div :id="idForHidden" class="improvements-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.got-it.title')"
      class="improvements-title"
    />
    <div class="improvements-masonary">
      <masonry-wall
        :items="items"
        :ssr-columns="2"
        :column-width="220"
        :gap="20"
        :cols="{ default: 2, 768: 3 }"
        :min-columns="2"
        :max-columns="3"
      >
        <template #default="{ item }">
          <div
            :class="[
              'item',
              `item--${item.id}`,
              { 'item--empty': item.text === '' },
            ]"
          >
            <p class="masonary-text">
              {{ item.text }}
            </p>
          </div>
        </template>
      </masonry-wall>
    </div>
  </div>
</template>

<style scoped>
.improvements {
  padding: 20px 24px;
  max-width: var(--max-width-content);
  margin: 0 auto;
  position: relative;
}
.improvements-hidden {
  position: absolute;
  top: -100px;
}

.improvements-title {
  margin-bottom: 48px;
}

.improvements-text {
  color: var(--primary-black);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
}

.improvements-masonary {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  background-color: #f1e7ed;
  padding: 0px 15px;
  max-height: 800px;
}

.masonary-text {
  color: var(--primary-magenta);
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.item {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-white);
  border-radius: 20px;
  padding: 25px 15px;
  box-shadow: 0px 15px 20px 0px rgba(4, 19, 33, 0.1);
  min-height: 140px;
}

.item--empty {
  background-color: var(--primary-magenta);
  box-shadow: none;
}

.item--1 {
  min-height: 140px;
}

.item--4 {
  min-height: 200px;
}

.improvements-gradient {
  display: none;
}

@media (min-width: 768px) {
  .improvements-masonary {
    max-height: 540px;
  }

  .improvements {
    padding: 20px 32px;
  }

  .item--1 {
    display: none;
  }

  .item--2 {
    min-height: 180px;
  }
}

@media (min-width: 1024px) {
  .improvements {
    padding: 50px 64px;
  }
}

@media (min-width: 1200px) {
  .improvements {
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 80px;
    justify-content: space-between;
  }
}

@media (min-width: 1500px) {
  .improvements-masonary {
    padding: 0px 68px;
  }

  .improvements-gradient {
    right: -294px;
    z-index: -999;
    bottom: -48px;
    display: block;
    transform: rotate(249deg);
    position: absolute;
  }

  .masonary-text {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
