<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});

const { locale } = useI18n();
</script>

<template>
  <h2 :class="['name-text', { 'name-text--de': locale === 'de' }]">
    {{ text }}
  </h2>
</template>

<style scoped>
.name-text {
  text-align: right;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 40px 0 24px;
}
.name-text--de {
  word-break: break-word;
}
@media (min-width: 768px) {
  .name-text {
    font-size: 64px;
    line-height: 64px;
    padding: 40px 0;
  }
}
</style>
