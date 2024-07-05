<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  whatIs: {
    type: String,
    required: true,
  },
  whatIsDescription: {
    type: String,
    required: true,
  },
  approach: {
    type: String,
    required: true,
  },
  approachDescription: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="intro">
    <div class="intro-image">
      <CommonServicesIntroImage :image="image" />
    </div>
    <div class="intro-text">
      <div>
        <h3 class="intro-title">
          {{ whatIs }}
        </h3>
        <div class="intro-line"></div>
        <p class="intro-description">
          {{ whatIsDescription }}
        </p>
      </div>
      <div>
        <h3 class="intro-title">
          {{ approach }}
        </h3>
        <div class="intro-line"></div>
        <p class="intro-description">
          {{ approachDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.25));
}

.intro-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  padding: 60px 10px 32px 10px;
  margin-top: -34px;
}

.intro-title {
  color: #1f1f1f;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
}

.intro-description {
  color: #1f1f1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.intro-line {
  width: 100%;
  height: 1px;
  background: var(--gradient-logo);
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .intro {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    min-height: 700px;
  }

  .intro-text {
    clip-path: polygon(38% 0, 100% 0, 100% 100%, 0 100%, 0% 29%);
    border-radius: 0px 20px 20px 0px;
    padding: 60px 24px 24px 320px;
    background: #fff;
    border-radius: 16px 16px 16px 48px;
    width: 100%;
    margin: 100px 0 0 0;
    box-shadow: none;
  }

  .intro-image {
    position: absolute;
    bottom: 0px;
    z-index: 1;
  }
}

@media (min-width: 1500px) {
  .intro {
    flex-direction: row;
    justify-content: space-between;
    min-height: 750px;
  }

  .intro-text {
    clip-path: polygon(42% 0, 100% 0, 100% 100%, 0 100%, 0% 50%);
    padding: 60px 24px 24px 520px;
    width: 100%;
    margin: 48px 0 0 0;
  }
}
</style>
