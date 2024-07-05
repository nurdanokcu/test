<script setup>
const { t } = useI18n();
const title = computed(() => t('seo.home.title'));
const description = computed(() => t('seo.home.description'));
useHead({
  title: {
    content: title,
    tagPriority: 0
  }
  meta: [
    {
      name: 'description',
      content: description,
      tagPriority: 0
    },
  ],
});
</script>

<template>
  <div>
    <LazyHomeHeader />
    <main :id="$t('home.header.scrollPathId')">
      <CommonGradientLine />
      <LazyHomeReview />
      <LazyHomeServices />
      <LazyHomeWhyUs />
      <LazyHomeBlog />
    </main>
  </div>
</template>
