<script setup lang="ts">
/* eslint-disable vue/no-v-html */

import { type TypeBlog } from '~/types/blog';

const localePath = useLocalePath();
const { locale } = useI18n();
const props = defineProps({
  blog: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
});
const themeColor = computed(() => {
  if (props.blog.category && props.blog.category.name) {
    return decidePostTheme(props.blog.category?.name);
  } else {
    return 'gradient';
  }
});

const styleObjectText = computed(() => {
  if (themeColor.value === 'gradient') {
    return 'background: var(--gradient-logo, linear-gradient(112deg, #2400FF 0.23%, #EB6F0E 101.08%));';
  } else {
    return {
      background: themeColor.value,
    };
  }
});

const formattedDate = computed(() => {
  if (!props.blog.published_at) {
    return '';
  }
  const formatted = new Date(props.blog.published_at).toLocaleDateString(
    locale.value,
    {
      month: 'long',
      day: 'numeric',
    },
  );
  if (formatted === 'Invalid Date') {
    return '';
  }
  return formatted;
});
</script>

<template>
  <div class="blog-card-wrapper">
    <div :style="styleObjectText" class="blog-header">
      <p
        :class="[
          'blog-header-title',
          { 'blog-header-title--de': locale === 'de' },
        ]"
      >
        {{ blog.title }}
      </p>
      <div class="blog-header-boxes">
        <p v-if="formattedDate" class="blog-header-box1">
          {{ formattedDate }}
        </p>
        <p v-if="blog.category" class="blog-header-box1 white">
          {{ blog.category.name }}
        </p>
      </div>
    </div>
    <div class="img1">
      <NuxtImg
        :src="blog.featured_image"
        alt="laptop-image"
        height="150"
        loading="lazy"
        format="webp"
      />
    </div>
    <div class="blog-content">
      <div class="truncate-overflow">
        <div class="blog-text" v-html="blog.content"></div>
      </div>
    </div>
    <div class="footer">
      <NuxtLink
        :to="localePath(`/blog/${blog.id}-${blog.slug}`)"
        class="time-blog-card-wrapper"
      >
        <p class="time">
          <span>{{ blog.average_read }}</span>
        </p>
        <span class="show-more">
          {{ $t("home.blog.showMore") }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.blog-card-wrapper {
  box-sizing: border-box;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  background: var(--primary-magenta);
  border-radius: 16px 16px 0 0;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
}

.blog-header-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-header-title--de {
  word-break: break-word;
}

.blog-header-boxes {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.blog-header-box1 {
  border: none;
  color: white;
  padding: 4px 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  background: #000000;
  border-radius: 32px;
}

.white {
  background: #ffffff;
  color: black;
  margin-top: 7px;
}

.img1 {
  width: 100%;
  height: 100%;
  max-height: 150px;
  overflow: hidden;
}

.img1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate3d(0, 0, 1px);
}

.blog-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  padding: 24px;
}

.truncate-overflow {
  box-sizing: border-box;
  --lh: 20px;
  --max-lines: 12;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines) + 4px);
  overflow: hidden;
}

.truncate-overflow::after {
  content: "";
  position: absolute;
  right: 0;
  width: 1rem;
  height: 1rem;
  background: white;
}

.blog-text {
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  color: #000000;
}

.footer {
  border: solid 3px transparent;
  background-image: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
  background-origin: border-box;
  background-clip: border-box;
  border-radius: 0px 0px 20px 20px;
  padding: 1px;
}

.time-blog-card-wrapper {
  background-color: black;
  border: none;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 20px 20px;
  color: white;
  padding: 8px 24px 8px 24px;
  align-items: center;
  max-height: 41px;
  transition: background-color 0.3s ease-in-out;
}

.time-blog-card-wrapper:hover {
  background-color: var(--secondary-dark-blue);
}

.time-blog-card-wrapper:active {
  background-color: var(--secondary-darker-blue);
}

.time {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #ffffff;
  gap: 10px;
}

.show-more {
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  color: #fff;
}

@media (min-width: 768px) {
  .first-text {
    height: 152px;
  }

  .blog-header-title {
    font-size: 24px;
  }
}
</style>
