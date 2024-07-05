<script setup lang="ts">
import { block1, block2, block3, block4 } from '~/assets/images/contact_form';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitles: {
    type: Array,
    default: () => [],
  },
  sideText1: {
    type: String,
    default: '',
  },
  sideText2: {
    type: String,
    default: '',
  },
  paddingBottom: {
    type: String,
    default: '0',
  },
  isDividedOnDesktop: {
    type: Boolean,
    default: true,
  },
});
const { locale } = useI18n();
</script>

<template>
  <div
    :class="[
      'contact-wrapper',
      { 'contact-wrapper--divided': isDividedOnDesktop },
    ]"
  >
    <div :style="{ paddingBottom: paddingBottom }" class="contact">
      <p :class="['contact-title', { 'contact-title--de': locale === 'de' }]">
        {{ title }}
      </p>
      <div class="contact-image-wrapper">
        <img
          class="contact-image contact-image--1"
          :src="block1"
          alt="design-block"
        />
        <img
          class="contact-image contact-image--2"
          :src="block2"
          alt="design-block"
        />
        <img
          class="contact-image contact-image--3"
          :src="block3"
          alt="design-block"
        />
        <img
          class="contact-image contact-image--4"
          :src="block4"
          alt="design-block"
        />
      </div>
      <div
        v-if="sideText1 || sideText2"
        class="contact-content contact-content--mobile"
      >
        <p class="contact-side-text--big">
          {{ sideText1 }}
        </p>
        <p>
          {{ sideText2 }}
        </p>
      </div>
      <div class="contact-subtitles">
        <p
          v-for="(subtitle, index) in subtitles"
          :key="`subtitle-${index}`"
          class="contact-subtitle"
        >
          {{ subtitle }}
        </p>
      </div>
      <div class="contact-form">
        <CommonContactForm
          :class="[{ 'contact-form-inputs-border': paddingBottom !== '0' }]"
        />
        <div
          v-if="sideText1 || sideText2"
          class="contact-content contact-content--desktop"
        >
          <p class="contact-side-text--big">
            {{ sideText1 }}
          </p>
          <p>
            {{ sideText2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  background: linear-gradient(112deg, #eb6f0e 0.23%, #2400ff 101.08%);
  position: relative;
  overflow: hidden;
}

.contact {
  color: #fff;
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 48px 24px 24px 24px;
  max-width: 1600px;
  margin: 0 auto;
}

.contact-image-wrapper {
  position: absolute;
  top: -2px;
  right: -1px;
  width: 100%;
  height: auto;
  z-index: 1;
}

.contact-image {
  width: 100%;
  height: 120px;
  max-width: 1400px;
  margin-left: auto;
}

.contact-image--2,
.contact-image--3,
.contact-image--4 {
  display: none;
}

.contact-title {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  max-width: 80%;
  margin-bottom: 60px;
}

.contact-title--de {
  word-break: break-word;
}

.contact-side-text--big {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
}

.contact-content {
  margin-bottom: 16px;
}

.contact-content--desktop {
  display: none;
}

.contact-form-inputs-border {
  border-radius: 16px;
}

@media (min-width: 768px) {
  .contact {
    font-size: 20px;
    padding: 48px 32px 32px 32px;
  }

  .contact-title {
    font-size: 64px;
    line-height: 64px;
    max-width: 440px;
  }

  .contact-image {
    width: 100%;
    height: 120px;
  }

  .contact-image--1 {
    display: none;
  }

  .contact-image--2 {
    display: block;
  }

  .contact-side-text--big {
    font-size: 24px;
  }

  .contact-content {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .contact {
    padding: 48px 64px 32px 64px;
  }
}

@media (min-width: 1200px) {
  .contact-image--2 {
    display: none;
  }

  .contact-image--3 {
    display: block;
  }
  .contact-title {
    max-width: 30%;
  }
}

@media (min-width: 1500px) {
  .contact-wrapper--divided .contact-content--mobile {
    display: none;
  }

  .contact-wrapper--divided .contact-content--desktop {
    display: block;
  }

  .contact-image--3 {
    display: none;
  }

  .contact-image--4 {
    display: block;
  }

  .contact-wrapper--divided .contact-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 160px;
  }

  .contact-title {
    margin-bottom: 15px;
  }
}
</style>
