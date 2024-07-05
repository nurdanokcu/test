<script setup>
const { t } = useI18n();
const title = computed(() => t('seo.mediaArticles.title'));
const description = computed(() => t('seo.mediaArticles.description'));
useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
      tagPriority: 0
    },
  ],
});
</script>

<template>
  <div>
    <h1>Articles Content Page</h1>
  </div>
</template>

<style scoped>
div {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
