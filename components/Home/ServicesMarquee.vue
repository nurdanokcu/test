<template>
  <div class="section">
    <div class="section-header">
      <p class="section-we">
        {{ $t("home.service.we") }}
      </p>
      <div class="section-marquee">
        <div class="marquee__content">
          <h3
            v-for="item in items"
            :key="item"
            class="marquee__text"
          >
            {{ item }}
          </h3>
        </div>
        <div aria-hidden="true" class="marquee__content">
          <h3
            v-for="item in items"
            :key="item"
            class="marquee__text"
          >
            {{ item }}
          </h3>
        </div>
      </div>
    </div>
    <p class="section-text">
      {{ $t("home.service.weOffer") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { servicesMarqueeEN, servicesMarqueeDE } from '~/data/servicesMarquee';

const { locale } = useI18n();
const items = locale.value === 'de' ? servicesMarqueeDE : servicesMarqueeEN;
</script>

<style scoped>
.section {
  --font-size: 64px;
  --marquee-gap: 24px;
}

.section-we {
  font-size: var(--font-size);
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
}

.section-marquee {
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(var(--font-size) + var(--marquee-gap));
}

.marquee__content {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--marquee-gap);
  min-width: 100%;
}

.marquee__text {
  font-size: var(--font-size);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.marquee__content {
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

.section-text {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: justify;
}

@media (min-width: 768px) {
  .section-header {
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }

  .section {
    --font-size: 72px;
    --marquee-gap: 40px;
  }

  .section-marquee {
    height: calc(var(--font-size) + var(--marquee-gap));
  }

  .marquee__text {
    font-size: var(--font-size);
  }
}

@media (min-width: 1200px) {
  .section {
    display: flex;
    align-items: flex-end;
  }

  .section-text {
    margin-bottom: 16px;
  }
  .section-we {
    line-height: 120%;
  }
  .section-marquee {
    padding-right: 32px;
  }
}
@media (min-width: 1500px) {
  .section {
    --font-size: 96px;
  }
  .section-marquee {
    height: calc(var(--font-size) + var(--marquee-gap));
  }
  .marquee__text {
    font-size: var(--font-size);
  }
}
</style>
