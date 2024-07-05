<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'big',
  },
});
const { locale } = useI18n();
</script>

<template>
  <h2
    :class="[
      'intro-text',
      `intro-text--${size}`,
      {
        'intro-text--de': locale === 'de',
      },
    ]"
  >
    {{ title }}
  </h2>
</template>

<style scoped>
.intro-text {
  font-style: normal;
  color: var(--primary-black);
}
.intro-text--de {
  word-break: break-word;
}

.intro-text--big {
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  text-transform: uppercase;
}

.intro-text--small {
  font-size: 24px;
  font-weight: 700;
}
</style>
