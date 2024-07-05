<template>
  <div class="message-card">
    <div class="message-content">
      <div class="message-heading">
        <div class="message-logo">
          <IconsHomeTelegram />
          <p class="message-logo-title">
            {{ $t("home.blog.message") }}
          </p>
          <div class="ps-message-link-inner">
            <span>{{ $t("home.blog.team") }}</span>
          </div>
        </div>
        <div class="team-images">
          <div class="team-image-container">
            <img
              class="team-image"
              :src="homeHeader1"
              alt="profile picture"
            />
          </div>
          <div class="team-image-container">
            <img
              class="team-image"
              :src="homeHeader2"
              alt="profile picture"
            />
          </div>
          <div class="team-image-container">
            <img
              class="team-image"
              :src="homeHeader3"
              alt="profile picture"
            />
          </div>
        </div>
      </div>
      <p class="text">
        {{ $t("home.blog.insight") }}
      </p>
      <CommonLinkReadMore
        class="team-message-link"
        :path="localePath('/blog')"
        :text="$t('home.blog.blog')"
      />
    </div>
  </div>
</template>

<script setup>
import {
  homeHeader1,
  homeHeader2,
  homeHeader3,
} from '~/assets/images/home_images';

const localePath = useLocalePath();
</script>

<style scoped>
.message-card {
  background-color: white;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  max-width: var(--home-mobile-max-width);
  margin: 0 auto 48px;
  padding: 14px 14px;
  max-height: 233px;
  position: relative;
}

.message-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 10px;
}
.message-logo-title {
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
}
.ps-message-link-inner {
  background: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
  border-radius: 40px;
  padding: 8px 16px;
  white-space: nowrap;
}
.ps-message-link-inner span {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
}
.team-images {
  position: relative;
  width: 72px;
}

.team-image-container {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--gradient-logo) border-box;
  border: 2px solid transparent;
}
.team-image-container:nth-child(2) {
  left: 50%;
  transform: translateX(-50%);
}
.team-image-container:nth-child(3) {
  left: 100%;
  transform: translateX(-100%);
}
.team-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
}
.text {
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 33px;
  padding-top: 40px;
  margin-bottom: 24px;
}
.team-message-link {
  position: absolute;
  right: -25px;
  bottom: 15px;
}

@media (min-width: 768px) {
  .team-images {
    align-self: flex-start;
  }
  .message-card {
    width: 100%;
    margin: 0 0 0 auto;
  }
  .message-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .team-message-link {
    width: 378px;
    bottom: 10px;
    right: -28px;
  }
  .text {
    font-size: 36px;
    padding-top: 5px;
  }
}
@media (min-width: 1200px) {
  .message-card {
    bottom: 27px;
  }
  .message-logo {
    gap: 10px;
  }
}
</style>
