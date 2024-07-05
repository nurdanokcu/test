<script setup lang="ts">
/* eslint-disable vue/no-v-html */
const { fetchSpecificBlog } = blogApi();
const { post, nextPost } = usePublicBlog();
const { locale, t } = useI18n();
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const blogId = Number(route.params.id);

const metaTitle = computed(() => {
  if (post.value.meta_title) {
    return `${post.value.meta_title} | ${t('seo.blog.title')}`;
  } else {
    return t('seo.blog.title');
  }
});
const metaDescription = computed(() => {
  return post.value.meta_description
    ? post.value.meta_description
    : t('seo.blog.description');
});

useHead({
  title: metaTitle.value,
  meta: [
    {
      name: 'description',
      content: metaDescription.value,
      tagPriority: 0
    },
  ],
});
const clickCategory = (id: number, name: string) => {
  const formattedCategoryName = name.toLowerCase().replace(' ', '_');
  const path = `${localePath('/blog')}/?category_id=${id}&category=${formattedCategoryName}`;
  navigateTo(path);
};

const getBlog = async (id: number, locale: string) => {
  const { error, data } = await fetchSpecificBlog(id, locale);

  if (error.value) {
    return navigateTo('/blog');
  }
  if (data.value) {
    post.value = data.value.data.post;
    nextPost.value = data.value.data.next_post;
  }
};

await getBlog(blogId, locale.value);

watch(
  () => locale.value,
  async () => {
    await getBlog(blogId, locale.value);
  },
);
router.replace({ params: { url: post.value.slug } });
</script>

<template>
  <div>
    <CommonGradientLine />
    <main id="blog-post" class="main">
      <div class="blog">
        <NuxtLink
          class="blog-back blog-back--mobile"
          :to="localePath('/blog')"
          :aria-label="$t('theblog.back')"
        >
          <IconsGeneralArrow
            :id="'blog-back-1'"
            :is-gradient="true"
            :direction="'left'"
          />
          <span>
            {{ $t("theblog.back") }}
          </span>
        </NuxtLink>
        <div class="blog-header--small">
          <div class="blog-time">
            <p>
              {{ formatDate(post.created_at, locale) }}
            </p>
            <span v-if="post.average_read" class="blog-dot"></span>
            <p v-if="post.average_read">
              {{ post.average_read }}
            </p>
          </div>
          <h1 class="blog-title">
            {{ post.title }}
          </h1>
          <BlogCategoryButton
            v-if="post.category"
            :text="post.category.name"
            @on-click="clickCategory(post.category.id, post.category.name)"
          />
        </div>
        <div class="blog-header--big">
          <div class="blog-header-info">
            <BlogCategoryButton
              v-if="post.category"
              :text="post.category.name"
              @on-click="clickCategory(post.category.id, post.category.name)"
            />
            <div class="blog-time">
              <p>
                {{ formatDate(post.created_at, locale) }}
              </p>
              <span v-if="post.average_read" class="blog-dot"></span>
              <p v-if="post.average_read">
                {{ post.average_read }}
              </p>
            </div>
          </div>
          <h1 class="blog-title">
            {{ post.title }}
          </h1>
        </div>
        <div class="blog-content">
          <NuxtLink
            class="blog-back blog-back--tablet"
            :to="localePath('/blog')"
            :aria-label="$t('theblog.back')"
          >
            <IconsGeneralArrow
              :id="'blog-back-2'"
              :is-gradient="true"
              :direction="'left'"
            />
            <span>
              {{ $t("theblog.back") }}
            </span>
          </NuxtLink>
          <div class="blog-image-wrapper">
            <img
              v-if="post.featured_image"
              class="blog-image"
              :src="post.featured_image"
              :alt="post.title + ' image'"
            />
            <div v-else class="blog-image-placeholder"></div>
          </div>
          <div class="blog-text" v-html="post.content"></div>
          <div v-if="nextPost.id !== 0 && nextPost.title" class="blog-next">
            <div class="blog-next-content">
              <div class="blog-next-time">
                <BlogCategoryButton
                  v-if="nextPost.category"
                  class="blog-next-category"
                  :text="nextPost.category"
                />
                <span v-if="nextPost.average_read" class="blog-dot"></span>
                <p v-if="nextPost.average_read">
                  {{ nextPost.average_read }}
                </p>
              </div>
              <div v-if="nextPost.title" class="blog-next-title">
                {{ nextPost.title }}
              </div>
            </div>
            <CommonShowMore
              class="blog-next-button"
              :text="$t('theblog.readnext')"
              :buttontitle="$t('theblog.readnext')"
              :is-link="true"
              :path="localePath({ params: { id: nextPost.id.toString() } })"
            />
          </div>
        </div>
      </div>
    </main>
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

<style>
#blog-post p:empty::before {
  content: "";
  display: inline-block;
}
</style>

<style scoped>
.loading-ui {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 24px 80px;
  max-width: var(--max-width-content);
  margin: 0 auto;
}

.loading-category {
  width: 50%;
}

.loading-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.main {
  padding: 40px 24px 80px;
}

.blog {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.blog-time {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.blog-header--small .blog-time {
  margin-bottom: 15px;
}

.blog-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #000;
}

.blog-title {
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.blog-header--small .blog-title {
  margin-bottom: 30px;
}

.blog-header--big {
  display: none;
}

.blog-image-wrapper {
  width: 100%;
  border-radius: 20px;
  margin-bottom: 40px;
  max-height: 600px;
}

.blog-image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-color: #d9d9d9;
}

.blog-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  transform: translate3d(0, 0, 1px);
}

.blog-content {
  display: flex;
  flex-direction: column;
}

.blog-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 80px;
}

.blog-next {
  position: relative;
  padding-top: 20px;
}

.blog-next::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-logo);
  margin-bottom: 20px;
}

.blog-next-time {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.blog-next-title {
  color: var(--Black, #000);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.blog-next-category {
  pointer-events: none;
  margin-bottom: 8px;
}

.blog-back {
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px 0;
  gap: 10px;
}

.blog-back span {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}

.blog-back:hover span {
  background: var(--gradient-logo-hover);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blog-back::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  z-index: 3;
  background: var(--gradient-logo);
}

.blog-back:hover .blog-back::after {
  background: var(--gradient-logo-hover);
}

.blog-back--tablet {
  display: none;
}

@media (min-width: 768px) {
  .main {
    padding: 40px 32px 80px;
    max-width: 800px;
    margin: 0 auto;
  }

  .blog-header--big {
    display: block;
  }

  .blog-header--small {
    display: none;
  }

  .blog-title {
    margin-bottom: 0;
  }

  .blog-header-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 25px;
  }

  .blog-next {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }

  .blog-next-title {
    margin-bottom: 0;
  }

  .blog-next-button {
    max-width: 210px;
    height: fit-content;
  }
}

@media (min-width: 1024px) {
  .loading-ui {
    flex-direction: row;
  }

  .loading-category {
    width: 30%;
  }

  .loading-content {
    width: 68%;
  }

  .main {
    padding: 30px 64px 80px;
    max-width: var(--max-width-content);
  }

  .blog-back--mobile {
    display: none;
  }

  .blog-back--tablet {
    display: flex;
    margin-bottom: 30px;
  }

  .blog-header--big {
    display: none;
  }

  .blog-header--small {
    display: block;
  }

  .blog {
    flex-direction: row;
    gap: 60px;
  }

  .blog-header--small {
    width: 30%;
  }

  .blog-content {
    width: 70%;
  }
}
</style>
