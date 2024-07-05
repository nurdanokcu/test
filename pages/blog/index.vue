<script setup>
const { t } = useI18n();
const title = computed(() => t('seo.blog.title'));
const description = computed(() => t('seo.blog.description'));
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
    <BlogHeader />
    <BlogMain />
    <CommonContactUs
      :title="$t('design.contactForm.title')"
      :subtitles="[
        $t('development.contactus.text_2'),
        $t('social.contactus.text_3'),
      ]"
      :side-text-1="$t('development.contactus.text')"
      :side-text-2="$t('development.contactus.text_1')"
    />
  </div>
</template>
