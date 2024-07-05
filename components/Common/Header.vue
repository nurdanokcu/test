<script setup lang="ts">
import { ellipse } from '~/assets/images/general';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  scrollPath: {
    type: String,
    required: false,
    default: '',
  },
  backgroundImage: {
    type: String,
    default: '',
  },
  hasScroll: {
    type: Boolean,
    default: true,
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  hasGradientLine: {
    type: Boolean,
    default: true,
  },
  gaps: {
    type: Object,
    default: () => ({
      desktop: '80px',
      tablet: '40px',
      mobile: '24px',
    }),
  },
  headerHiddenId: {
    type: String,
    default: '',
  },
});
const { locale } = useI18n();

const headerStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor;
  }
  if (props.backgroundImage) {
    style.backgroundImage = `linear-gradient(112deg, rgba(36, 0, 255, 0.80) 0.23%, rgba(235, 111, 14, 0.80) 101.08%), url(${props.backgroundImage})`;
  }
  return style;
});
const style = computed(() => {
  return {
    '--mobile-gap': props.gaps.mobile,
    '--tablet-gap': props.gaps.tablet,
    '--desktop-gap': props.gaps.desktop,
  };
});
</script>

<template>
  <div class="header-wrapper">
    <div :id="headerHiddenId" class="header-hidden"></div>
    <header :style="headerStyle" class="header">
      <div :style="style" class="header-content">
        <div class="header-info">
          <h1
            :class="['header-title', { 'header-title--de': locale === 'de' }]"
          >
            {{ title }}
          </h1>
          <div class="header-info-text">
            <p v-if="subtitle" class="header-subtitle">
              {{ subtitle }}
            </p>
            <p v-if="text" class="header-text">
              {{ text }}
            </p>
          </div>
          <slot name="header-text"></slot>
          <div class="header-gradient--tablet">
            <img
              class="header-gradient-img"
              :src="ellipse"
              alt="gradient-ring"
            />
          </div>
          <div v-if="hasScroll" class="header-scroll--desktop">
            <CommonScrollForMore :path-id="scrollPath" />
          </div>
        </div>
        <div class="header-cards">
          <div class="header-vision">
            <div class="header-gradient--desktop">
              <img
                class="header-gradient-img"
                :src="ellipse"
                alt="gradient-ring"
              />
            </div>
            <slot name="header-vision"></slot>
          </div>
          <div class="header-testimonial">
            <p class="header-testimonial-text">
              {{ $t("services.heading.review") }}
            </p>
            <slot name="header-testimonial"></slot>
          </div>
          <div v-if="hasScroll" class="header-scroll--mobile">
            <CommonScrollForMore :path-id="scrollPath" />
          </div>
        </div>
      </div>
    </header>
    <CommonGradientLine v-if="hasGradientLine" />
  </div>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--nav-top-height));
  position: relative;
  overflow-x: clip;
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
.header {
  display: flex;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  flex-grow: 1;
  overflow-x: hidden;
}
.header-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 24px;
  flex-grow: 1;
}
.header-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--mobile-gap);
  color: #fff;
  margin-bottom: var(--mobile-gap);
}
.header-info-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.header-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 80%;
  text-transform: uppercase;
}
.header-title--de {
  word-break: break-word;
}
.header-subtitle {
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.header-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.header-gradient--tablet,
.header-gradient--desktop,
.header-scroll--desktop {
  display: none;
}
.header-cards {
  display: flex;
  flex-direction: column;
  gap: var(--mobile-gap);
}
.header-testimonial {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}
.header-testimonial-text {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: fit-content;
}

@media (min-width: 768px) {
  .header-content {
    padding: 80px 32px;
  }
  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--tablet-gap);
    margin-bottom: var(--tablet-gap);
  }
  .header-title {
    font-size: 100px;
    line-height: 80.2%;
  }
  .header-subtitle {
    font-size: 40px;
  }
  .header-text {
    font-size: 18px;
  }
  .header-cards {
    gap: var(--tablet-gap);
  }
  .header-gradient--tablet {
    display: block;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: -1;
    width: 800px;
    height: 391px;
  }
  .header-gradient-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 1024px) {
  .header-content {
    padding: 80px 64px;
    max-width: var(--max-width-content);
    margin: 0 auto;
  }
}
@media (min-width: 1200px) {
  .header-content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;
    position: relative;
  }
  .header-info {
    width: 40%;
    gap: var(--desktop-gap);
    margin-bottom: 0;
  }
  .header-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 56%;
  }
  .header-title {
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 0;
  }
  .header-text {
    font-size: 14px;
    max-width: 700px;
    margin-bottom: 0;
  }
  .header-scroll--desktop {
    display: flex;
  }
  .header-gradient--tablet,
  .header-scroll--mobile {
    display: none;
  }
  .header-vision {
    position: relative;
  }
  .header-gradient--desktop {
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    z-index: -1;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 391px;
  }
}
@media (min-width: 1500px) {
  .header-title {
    font-size: 108px;
    line-height: 100%;
  }
  .header-info {
    width: 58%;
  }
  .header-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
  }
  .header-text {
    font-size: 16px;
  }
  .header-gradient--desktop {
    left: 50%;
    width: 760px;
    height: 460px;
  }
  .header-gradient-img {
    object-fit: fill;
  }
}
</style>
