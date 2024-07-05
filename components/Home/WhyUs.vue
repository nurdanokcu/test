<script setup lang="ts">
import { whyUsDataEN, whyUsDataDE } from '~/data/homeWhyUs';

const { locale } = useI18n();
const whyUsData = computed(() => {
  return locale.value === 'en' ? whyUsDataEN : whyUsDataDE;
});
</script>

<template>
  <section class="why-us">
    <p class="why-us-title">
      {{ $t("home.whyUs.title") }}
    </p>
    <div class="why-us-content">
      <div class="why-us-overlay"></div>
      <div class="why-us-cards">
        <HomeWhyUsCard
          v-for="card in whyUsData"
          :key="card.id"
          class="why-us-card"
          :card="card"
        />
      </div>
    </div>
    <div class="why-us-chat">
      <p class="why-us-chat-text">
        {{ $t("home.whyUs.chatText") }}
      </p>
      <CommonLinkReadMore
        class="lets-talk-container"
        :path="'javascript:void(Tawk_API.toggle())'"
        :text="$t('home.header.letsTalk')"
      />
    </div>
  </section>
</template>

<style scoped>
.why-us {
  padding: 40px 0;
}

.why-us-title {
  padding: 0 24px;
  width: fit-content;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  text-transform: uppercase;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto 40px auto;
}

.why-us-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.why-us-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 120px;
  right: 0;
  border-radius: 16px;
  z-index: -1;
  background-image: url("~/assets/images/home_images/why_us_gradient--mobile.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

.why-us-overlay-svg {
  width: 100%;
  height: 100%;
}

.overlay-image-wrapper {
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 24px;
  z-index: -1;
  overflow: hidden;
}

.overlay-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.why-us-cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 24px 40px 24px;
}

.why-us-chat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
}

.why-us-chat-text {
  text-align: right;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(
    --Gradient-Logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
  .why-us-cards {
    flex-direction: row;
    padding: 88px 32px 40px 32px;
    flex-wrap: wrap;
  }

  .why-us-card {
    width: calc((100% - 30px) / 2);
  }

  .why-us-chat {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .why-us-title {
    padding: 0 32px;
  }

  .why-us-chat {
    padding: 0 32px;
  }

  .why-us-overlay {
    background-image: url("~/assets/images/home_images/why_us_gradient--tablet.png");
  }

  .lets-talk-container {
    max-width: 350px;
  }
}

@media (min-width: 1024px) {
  .why-us-card {
    width: calc((100% - 60px) / 3);
  }

  .why-us-chat {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .why-us-title {
    padding: 0 64px;
    margin: 0 0 40px 0;
  }

  .why-us-cards {
    padding: 140px 64px 40px 64px;
  }

  .why-us-chat {
    padding: 0 64px;
  }
}

@media (min-width: 1200px) {
  .why-us-cards {
    padding: 140px 0px 40px 64px;
  }

  .why-us-chat {
    padding: 0;
  }

  .why-us-title {
    padding: 0;
  }

  .why-us {
    max-width: var(--max-width-content-home-medium);
    margin: 0 auto;
    padding: 0 64px;
  }

  .why-us-content {
    margin-bottom: 40px;
  }

  .why-us-overlay {
    top: -2px;
    left: 0;
    right: 80px;
    bottom: 0;
  }
}
</style>
