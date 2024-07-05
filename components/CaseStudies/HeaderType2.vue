<script setup lang="ts">
import {
  ellipseMobile,
  ellipseLaptop,
} from '~/assets/images/caseStudies_images/regio_images';

const { locale } = useI18n();
defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
    default: '',
  },
  headerInfo: {
    type: String,
    required: true,
  },
  scrollPathId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="header-wrapper">
    <div id="header" class="header-hidden"></div>
    <div class="header">
      <header class="header-content">
        <div class="header-visuals">
          <div class="header-company-wrapper">
            <p class="header-company">
              <span v-if="company !== ''">
                {{ company }}
              </span>
              <slot v-else name="header-company"></slot>
            </p>
            <div class="header-gradient">
              <img
                class="header-gradient-img header-gradient-img--mobile"
                :src="ellipseMobile"
                alt="gradient-ring"
              />
              <img
                class="header-gradient-img header-gradient-img--desktop"
                :src="ellipseLaptop"
                alt="gradient-ring"
              />
            </div>
          </div>
          <div class="header-images header-images--desktop">
            <slot name="header-images"></slot>
          </div>
        </div>
        <div class="header-texts">
          <h1
            :class="[
              'header-title-text',
              { 'header-title-text--de': locale === 'de' },
            ]"
          >
            {{ title }}
          </h1>
          <div class="header-texts-services">
            <slot name="header-services"></slot>
            <p class="header-texts-info">
              {{ headerInfo }}
            </p>
          </div>
          <div class="header-images-wrapper">
            <div class="header-images header-images--mobile">
              <slot name="header-images"></slot>
            </div>
            <CommonScrollForMore
              class="header-scroll"
              :path-id="scrollPathId"
            />
          </div>
        </div>
      </header>
    </div>
    <CommonGradientLine />
  </div>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: clip;
}

.header {
  display: flex;
  box-sizing: border-box;
  background-color: var(--primary-magenta);
  position: relative;
  z-index: 0;
  flex-grow: 1;
}
.header-hidden {
  position: absolute;
  top: -80px;
  left: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.header-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 24px;
  max-width: var(--max-width-content);
  margin: 0 auto;
  flex-grow: 1;
  color: #fff;
}

.header-company {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  padding: 60px;
  line-height: 64px;
  text-transform: uppercase;
  width: fit-content;
  text-align: center;
  z-index: 2;
}

.header-company-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  width: fit-content;
}

.header-gradient {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.header-gradient-img {
  width: 100%;
  object-fit: contain;
}

.header-title-text {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.header-title-text--de {
  overflow-wrap: break-word;
}

.header-texts {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.header-images-wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.header-images {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-image {
  width: 100%;
  object-fit: contain;
}

.header-gradient-img--desktop,
.header-images--desktop {
  display: none;
}

@media (min-width: 768px) {
  .header-content {
    padding: 60px 32px;
  }

  .header-company {
    min-width: 500px;
    font-size: 64px;
  }

  .header-title-text {
    font-size: 64px;
  }

  .header-gradient-img--mobile {
    display: none;
  }

  .header-gradient-img--desktop {
    display: inline-block;
  }

  .header-images-wrapper {
    position: relative;
    padding-left: 170px;
    min-height: 78px;
  }

  .header-scroll {
    position: absolute;
    left: 0;
    top: 0;
  }
}

@media (min-width: 1024px) {
  .header-content {
    padding: 60px 64px;
  }
}

@media (min-width: 1200px) {
  .header-content {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 80px;
  }

  .header-company {
    min-width: 400px;
    padding: 48px 60px;
  }

  .header-scroll {
    position: static;
  }

  .header-gradient-img--mobile {
    display: inline-block;
  }

  .header-gradient-img--desktop {
    display: none;
  }

  .header-images-wrapper {
    padding: 0;
  }

  .header-images--mobile {
    display: none;
  }
  .header-images--desktop {
    display: flex;
    flex-grow: 1;
  }

  .header-visuals {
    position: relative;
  }

  .header-visuals,
  .header-texts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header-visuals {
    width: 46%;
    align-items: flex-end;
  }

  .header-texts {
    width: 54%;
    gap: 100px;
  }
}

@media (min-width: 1500px) {
  .header-visuals {
    width: 50%;
  }

  .header-texts {
    width: 50%;
  }

  .header-company {
    font-size: 85px;
    min-width: 520px;
  }

  .header-gradient-img--mobile {
    display: none;
  }

  .header-gradient-img--desktop {
    display: inline-block;
  }
}
</style>
