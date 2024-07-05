<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
});
const { t } = useI18n();
const config = useRuntimeConfig();
useServerSeoMeta({
  ogTitle: t('seo.home.title'),
  ogDescription: t('seo.home.description'),
  ogImage: '/logo.png',
  ogImageAlt: 'Propaganda Solutions',
  ogImageType: 'image/png',
  ogType: 'website',
  twitterTitle: t('seo.home.title'),
  twitterDescription: t('seo.home.description'),
  twitterImage: '/logo.png',
  twitterCard: 'summary',
  title: t('seo.home.title'),
  description: t('seo.home.description'),
  colorScheme: 'light',
  themeColor: '#faf8f5',
  ogUrl: config.public.baseURL,
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta
          :id="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Html>
</template>
