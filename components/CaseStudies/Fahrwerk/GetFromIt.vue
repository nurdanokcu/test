<template>
  <div class="get-from-it-container">
    <div :id="idForHidden" class="get-from-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.got-it.title')"
      class="get-from-it-heading"
    />
    <div>
      <p class="text_1">
        {{ $t("case_studies.fahrwerk.get-from-it.text") }}
      </p>
      <div class="masonary-wrapper">
        <masonry-wall
          :items="items"
          :ssr-columns="2"
          :column-width="214"
          :gap="16"
          :cols="{ default: 2, 768: 3 }"
          :min-columns="2"
          :max-columns="3"
        >
          <template #default="{ item }">
            <div :class="item.name">
              <p class="text">
                {{ item.title }}
              </p>
            </div>
          </template>
        </masonry-wall>
      </div>
    </div>
  </div>
</template>

<script setup>
import MasonryWall from '@yeger/vue-masonry-wall';
import {
  fahrwerkitemsEn,
  fahrwerkitemsDe,
} from '~/data/fahrwerkMansoryItems.js';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
const { locale } = useI18n();
const items = computed(() => {
  return locale.value === 'en' ? fahrwerkitemsEn : fahrwerkitemsDe;
});
</script>

<style scoped>
.get-from-it-container {
  padding: 20px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.get-from-it-hidden {
  position: absolute;
  top: -100px;
}

.text_1 {
  color: var(--primary-black);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 40px 0px 20px;
}

.masonary-wrapper {
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #f1e7ed;
  overflow: hidden;
  padding: 0px 15px;
  max-height: 544px;
}

.text {
  color: var(--primary-magenta);
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.purple {
  background-color: var(--primary-magenta);
  border-radius: 20px;
  padding: 25px 15px;
}

.white {
  border-radius: 20px;
  background: var(--primary-white);
  box-shadow: 0px 15px 20px 0px rgba(4, 19, 33, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
}

.one {
  height: 180px;
}

.two,
.three,
.onew,
.twow,
.threew,
.fourw,
.fivew,
.sixw,
.seven {
  height: 100px;
}

.six {
  height: 116px;
}

.four {
  height: 200px;
}

.five {
  height: 100px;
}

@media (min-width: 768px) {
  .masonary-wrapper {
    max-height: 487px;
  }

  .six {
    height: 100px;
  }

  .four {
    height: 100px;
  }

  .three {
    height: 100px;
  }
}

@media (min-width: 1024px) {
  .get-from-it-container {
    padding: 50px 64px;
  }
}

@media (min-width: 1200px) {
  .get-from-it-heading {
    overflow-wrap: break-word;
  }

  .get-from-it-container {
    display: grid;
    grid-template-columns: 25% 70%;
    justify-content: space-between;
  }

  .masonary-wrapper {
    padding: 0px 30px;
  }
  .text {
    font-size: 20px;
    line-height: normal;
  }
  .fivew {
    height: 160px;
  }
  .text_1 {
    margin: 0px 0px 20px;
  }
}

@media (min-width: 1500px) {
  .masonary-wrapper {
    max-height: 501px;
  }
}
</style>
