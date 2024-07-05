<script setup lang="ts">
import { type TypeBlog, type TypeCategory } from '~/types/blog';

const { locale } = useI18n();

defineProps({
  blogs: {
    type: Array as PropType<TypeBlog[]>,
    default: () => [],
  },
  allCategories: {
    type: Array as PropType<TypeCategory[]>,
    default: () => [],
  },
});
defineEmits(['onClickCategory']);
const localePath = useLocalePath();
</script>

<template>
  <div class="blogs">
    <TransitionGroup name="fade">
      <div
        v-for="(blog, index) in blogs"
        :key="`${blog.id}-${index}}`"
        :class="['blog', `blog--${index + 1}`]"
      >
        <div class="blog-image-wrapper blog-image-wrapper--mobile">
          <div class="blog-image-box">
            <img
              v-if="blog.featured_image"
              class="blog-image"
              :src="blog.featured_image"
              :alt="blog.title + ' image'"
            />
          </div>
        </div>
        <div class="blog-image-wrapper blog-image-wrapper--tablet">
          <img
            v-if="blog.featured_image"
            class="blog-image"
            :src="blog.featured_image"
            :alt="blog.title + ' image'"
          />
        </div>
        <div class="blog-content">
          <div class="blog-info">
            <div class="blog-time">
              <p>
                {{ formatDate(blog.created_at, locale) }}
              </p>
              <span class="blog-dot"></span>
              <p>
                {{ blog.average_read }}
              </p>
            </div>
            <BlogCategoryButton
              v-if="blog.category"
              :text="blog.category.name"
              @on-click="
                $emit('onClickCategory', blog.category.id, blog.category.name)
              "
            />
          </div>
          <p class="blog-title">
            {{ blog.title }}
          </p>
          <p class="blog-text">
            {{ blog.excerpt }}
          </p>
          <CommonLinkReadMore
            class="blog-link"
            :path="localePath('/blog/' + blog.id + '-' + blog.slug)"
            :text="$t('theblog.readmore')"
          />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.blogs {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.blog-image-wrapper--tablet {
  display: none;
}

.blog-image-wrapper {
  margin: 0 auto;
  width: 100%;
  margin-bottom: 20px;
}

.blog-image-box {
  padding-top: 50%;
  position: relative;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate3d(0, 0, 1px);
  position: absolute;
  inset: 0;
  border-radius: 20px;
}

.blog-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.blog-time {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
}

.blog-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #000;
}

.blog-title {
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.blog-text {
  color: var(--Black, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .blog {
    display: flex;
    gap: 20px;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .blog-info {
    flex-direction: row;
    flex-flow: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  .blog-title {
    font-size: 20px;
  }

  .blog-info,
  .blog-title,
  .blog-text,
  .blog-image-wrapper {
    margin-bottom: 0;
  }

  .blog-content {
    width: 60%;
  }

  .blog-image-wrapper--mobile {
    display: none;
  }

  .blog-image-wrapper--tablet {
    position: relative;
    display: block;
    margin-bottom: 0;
    width: 40%;
    min-height: 260px;
  }

  .blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    border-radius: 20px;
  }
}

@media (min-width: 1024px) {
  .blog-image-box {
    padding-top: 70%;
  }
}

@media (min-width: 1200px) {
  .blogs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
  }

  .blog {
    max-height: initial;
  }

  .blog-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .blog-content {
    gap: 16px;
  }

  .blog-content {
    width: 60%;
  }

  .blog--1 {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .blog--1 .blog-image-wrapper {
    width: 100%;
    height: 100%;
  }

  .blog--1 .blog-content {
    width: 100%;
  }

  .blog--1 .blog-info {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  .blog--1 .blog-title {
    font-size: 40px;
  }
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}

.fade-leave-active {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
