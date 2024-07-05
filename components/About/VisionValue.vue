<script setup>
const { locale, t } = useI18n();
const values = computed(() => [
  {
    title: t('about.value.valueTitle_1'),
    text: t('about.value.valueText_1'),
  },
  {
    title: t('about.value.valueTitle_2'),
    text: t('about.value.valueText_2'),
  },
  {
    title: t('about.value.valueTitle_3'),
    text: t('about.value.valueText_3'),
  },
  {
    title: t('about.value.valueTitle_4'),
    text: t('about.value.valueText_4'),
  },
  {
    title: t('about.value.valueTitle_5'),
    text: t('about.value.valueText_5'),
  },
  {
    title: t('about.value.valueTitle_6'),
    text: t('about.value.valueText_6'),
  },
]);
</script>

<template>
  <div class="our-value-container">
    <div class="values-text-container">
      <div class="gradient-container">
        <p>{{ $t("about.value.title") }}</p>
      </div>
      <p class="text">
        {{ $t("about.value.text") }}
        <br />
        {{ $t("about.value.valueText") }}
      </p>
    </div>
    <div class="our-values">
      <div
        v-for="(value, index) in values"
        :key="index"
        class="value-container"
      >
        <p :class="['value', { 'value--de': locale === 'de' }]">
          {{ value.title }}
        </p>
        <p class="v-text">
          {{ value.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-value-container {
  padding: 40px 0;
}

.gradient-container {
  background: var(--gradient-logo);
  color: var(--primary-white);
  display: inline-block;
  border-radius: 40px;
  margin-bottom: 30px;
  padding: 4px 16px;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
}

.text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-black);
}

.value-container {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  background: var(--primary-white);
  border-radius: 16px;
  height: 100%;
  padding: 24px 24px 20px 24px;
}

.value--de {
  word-break: break-word;
}
.value {
  color: var(--primary-black);
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
}

.v-text {
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-black);
  text-transform: math-auto;
}

.our-values {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px 0px;
}

@media (min-width: 768px) {
  .our-values {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc((100% - 20px) / 2), 1fr)
    );
    gap: 20px;
    padding: 35px 0px;
  }

  .value {
    font-weight: 700;
    font-size: 40px;
    line-height: 30px;
  }
  .value {
    text-transform: uppercase;
  }
}

@media (min-width: 1500px) {
  .our-value-container {
    padding: 40px 0px 40px 0px;
  }

  .our-values {
    position: relative;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc((100% - 40px) / 3), 1fr)
    );
    gap: 20px;
    padding: 35px 0px;
    z-index: 2;
  }
}
</style>
