<script setup>
import {
  homeHeader1,
  homeHeader2,
  homeHeader3,
} from '~/assets/images/home_images';

const images = [homeHeader1, homeHeader2, homeHeader3];
const { locale } = useI18n();
</script>

<template>
  <div :class="['team', { 'team--de': locale === 'de' }]">
    <div class="team-first-layer">
      team
    </div>
    <div class="team-second-layer">
      <h3 class="team-title team-title-italic">
        {{ $t("home.header.teamText_1") }}
      </h3>
      <div class="team-images">
        <div
          v-for="image in images"
          :key="image"
          class="team-image-container"
        >
          <img
            class="team-image"
            :src="image"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
    <div class="team-third-layer">
      <h3 class="team-title">
        {{ $t("home.header.teamText_2") }}
      </h3>
    </div>

    <div class="team-fourth-layer">
      <CommonLinkReadMore
        class="lets-talk-container"
        :path="'javascript:void(Tawk_API.toggle())'"
        :text="$t('home.header.letsTalk')"
      />
    </div>
  </div>
</template>

<style scoped>
.team {
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px 24px 8px;
  width: 100%;
  max-width: 350px;
  border-radius: 16px;
  z-index: 2;
}
.team--de {
  max-width: 420px;
}

.team-first-layer {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  padding: 8px 16px;
  margin-bottom: 16px;

  background: var(--gradient-logo);
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
}

.team-second-layer {
  display: flex;
  gap: 8px;
  justify-content: space-between;
}

.team-title {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
}

.team-title-italic {
  font-style: italic;
}

.team-third-layer {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

.team-images {
  position: relative;
  width: 72px;
}

.team-image-container {
  position: absolute;
  left: 0;
  top: -30%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--gradient-logo) border-box;
  border: 2px solid transparent;
}

.team-image-container:nth-child(2) {
  left: 30%;
}

.team-image-container:nth-child(3) {
  left: 60%;
}

.team-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
}

.team-fourth-layer {
  width: 100%;
  position: relative;
  height: 48px;
}

.lets-talk-container {
  position: absolute;
  right: -14%;
}

@media screen and (min-width: 768px) {
  .team {
    padding: 20px 16px;
    max-width: 520px;
  }
  .team--de {
    max-width: 630px;
  }

  .team-title {
    font-size: 36px;
    line-height: 45px;
  }

  .team-images {
    width: 140px;
  }

  .team-image-container {
    width: 50px;
    height: 50px;
    border: 4px solid transparent;
  }
}
</style>
