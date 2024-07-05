<script setup>
const { t } = useI18n();
const title = computed(() => t('seo.mediaArticles.title'));
const description = computed(() => t('seo.mediaArticles.description'));
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
      tagPriority: 0,
    },
    {
      property: 'og:title',
      content: title.value,
      tagPriority: 0,
    },
    {
      property: 'og:description',
      content: description.value,
      tagPriority: 0,
    },
    {
      name: 'twitterTitle',
      content: title.value,
      tagPriority: 0,
    },
    {
      name: 'twitterDescription',
      content: description.value,
      tagPriority: 0,
    },
    ...head.value.meta.map(meta => ({
      ...meta,
      tagPriority: 0,
    })),
  ],
  link: head.value.link.map(link => ({
    ...link,
    tagPriority: 0,
  })),
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
