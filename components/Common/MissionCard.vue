<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  texts: {
    type: Array,
    required: true,
  },
  isSmallFont: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="mission">
    <p class="mission-title">
      {{ title }}
    </p>
    <p>
      <span
        v-for="text in texts"
        :key="text"
        :class="[
          'mission-text',
          {
            'is-italic': text.isItalic,
            'is-small-font': isSmallFont,
          },
        ]"
      >{{ `${text.text} ` }}</span>
    </p>
  </div>
</template>

<style scoped>
.mission {
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  background: var(--primary-white);
  border-radius: 16px;
  padding: 24px 20px;
  height: 100%;
}

.mission-title {
  background: var(--gradient-logo);
  color: var(--primary-white);
  display: inline-block;
  border-radius: 40px;
  margin-bottom: 20px;
  padding: 4px 16px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
}

.mission-text {
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  color: #000;
}

.mission-text.is-italic {
  font-weight: 400;
  font-style: italic;
}

.mission-text.is-small-font {
  font-size: 20px;
  line-height: 24px;
}

@media (min-width: 768px) {
  .mission {
    padding: 24px 20px;
  }

  .mission-text {
    font-size: 40px;
    line-height: 50px;
  }

  .mission-text.is-small-font {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
