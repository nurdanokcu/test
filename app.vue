<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
const { t, locale } = useI18n();
const config = useRuntimeConfig();

const generateOgTags = (localeMeta) => {
  const result = [];
  for (const link of localeMeta) {
    result.push({
      name: link.property,
      content: link.content,
      tagPriority: 0
    });
  }
  return result;
}

const generateLangTags = (localeLinks) => {
  const result = [];
  for (const link of localeLinks) {
    result.push({
      rel: link.rel,
      hreflang: link.hreflang,
      href: link.href,
      tagPriority: 0
    });
  }
  return result;
};

useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
      tagPriority: 0
    },
    {
      name: 'charset',
      content: 'utf-8',
      tagPriority: 0
    },
    {
      name: 'ogTitle',
      content: t('seo.home.title'),
      tagPriority: 0
    },
    {
      name: 'ogDescription',
      content: t('seo.home.description'),
      tagPriority: 0
    },
    {
      name: 'ogImage',
      content: '/logo.png',
      tagPriority: 0
    },
    {
      name: 'ogImageAlt',
      content: 'Propaganda Solutions',
      tagPriority: 0
    },
    {
      name: 'ogImageType',
      content: 'image/png',
      tagPriority: 0
    },
    {
      name: 'ogType',
      content: 'website',
      tagPriority: 0
    },
    {
      name: 'twitterTitle',
      content: t('seo.home.title'),
      tagPriority: 0
    },
    {
      name: 'twitterDescription',
      content: t('seo.home.description'),
      tagPriority: 0
    },
    {
      name: 'twitterImage',
      content: '/logo.png',
      tagPriority: 0
    },
    {
      name: 'twitterCard',
      content: 'summary',
      tagPriority: 0
    },
    {
      name: 'title',
      content: t('seo.home.title'),
      tagPriority: 0
    },
    {
      name: 'description',
      content: t('seo.home.description'),
      tagPriority: 0
    },
    {
      name: 'colorScheme',
      content: 'light',
      tagPriority: 0
    },
    {
      name: 'themeColor',
      content: '#faf8f5',
      tagPriority: 0
    },
    ...generateOgTags(head.value.meta),
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
      tagPriority: 0
    },
    ...generateLangTags(head.value.link),
  ],
});
</script>

<template>
  <Html
    :lang="head.htmlAttrs.lang"
    :dir="head.htmlAttrs.dir"
  >
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Html>
</template>
