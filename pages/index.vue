<script setup lang="ts">
const { t } = useI18n();
const title = computed(() => t('seo.home.title'));
const description = computed(() => t('seo.home.description'));
useServerSeoMeta({
  title: title.value,
  description: description.value,
});
</script>

<template>
  <div>
    <LazyHomeHeader />
    <main :id="$t('home.header.scrollPathId')">
      <LazyCommonGradientLine />
      <LazyHomeReview />
      <LazyHomeServices />
      <LazyHomeWhyUs />
      <LazyHomeBlog />
    </main>
  </div>
</template>
