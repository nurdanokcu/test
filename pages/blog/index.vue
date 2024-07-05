<script setup>
const { t } = useI18n();
const title = computed(() => t('seo.blog.title'));
const description = computed(() => t('seo.blog.description'));
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
