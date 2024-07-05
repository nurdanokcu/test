<script setup>
const { t } = useI18n();
const title = computed(() => t('seo.home.title'));
const description = computed(() => t('seo.home.description'));
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
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
