<script setup lang="ts">
import { type TypeBlog } from '~/types/blog';

const { getBestPosts } = privateBlogApi();

const isLoading = ref(true);
const errorMessage = ref('');
const { locale } = useI18n();
const bestPost = ref<TypeBlog>({
  id: null,
  title: '',
  excerpt: '',
  slug: '',
  content: '',
  total_views: 0,
  average_read: '',
  status: '',
  featured_image: '',
  category: {
    id: 0,
    name: '',
  },
  created_at: '',
  author: {
    id: 1,
    name: '',
  },
  time_created: '',
});

const fetchBestPost = async (blogLocale: string) => {
  isLoading.value = true;
  try {
    const response = await getBestPosts(blogLocale);
    bestPost.value = response.data[0];
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};

const themeColor = computed(() => {
  if (bestPost.value.category && bestPost.value.category.name) {
    return decidePostTheme(bestPost.value.category?.name);
  } else {
    return 'gradient';
  }
});

const styleObjectImage = computed(() => {
  return {
    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.70) 0.3%, rgba(255, 255, 255, 0.00) 50%), url(${bestPost.value.featured_image})`,
  };
});

const styleObjectText = computed(() => {
  if (themeColor.value === 'gradient') {
    return `background: var(--Gradient-Logo, linear-gradient(112deg, #2400FF 0.23%, #EB6F0E 101.08%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`;
  } else {
    return {
      color: themeColor.value,
    };
  }
});

const croppedDescription = computed(() => {
  if (bestPost.value.excerpt.length > 100) {
    return bestPost.value.excerpt.slice(0, 100) + '...';
  } else {
    return bestPost.value.excerpt;
  }
});

onMounted(async () => {
  if (bestPost.value.id !== null) {
    isLoading.value = false;
  }
  if (bestPost.value.id === null) {
    await fetchBestPost(locale.value);
  }
});
</script>

<template>
  <div class="post-wrapper">
    <AdminLoadingBoxes
      v-if="isLoading"
      :amount="1"
      height="420px"
    />
    <CommonTransitionError>
      <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
    </CommonTransitionError>
    <div v-if="bestPost.id !== null && !isLoading" class="post">
      <div :style="styleObjectImage" class="post-image">
        <p :style="styleObjectText" class="post-header">
          {{ $t("admin.blog.bestBlogTitle") }}
        </p>
      </div>
      <div class="post-content">
        <div class="post-first-row">
          <p class="post-time">
            {{ bestPost.time_created }}
          </p>
          <p :style="styleObjectText" class="post-category">
            {{ bestPost.category.name }}
          </p>
        </div>
        <div class="post-second-row">
          <p class="post-title">
            {{ bestPost.title }}
          </p>
          <p class="post-description">
            {{ croppedDescription }}
          </p>
        </div>
        <div class="post-last-row">
          <div class="post-last-row-left">
            <AdminBlogsAvTimeReading
              class="post-time-reading"
              :time="bestPost.average_read || ''"
              :color="themeColor"
            />
            <p class="post-last-updated">
              {{ $t("admin.blog.lastUpdated") }} {{ bestPost.last_edited_date }}
            </p>
          </div>
          <AdminBlogsViews
            class="post-views"
            :views="bestPost.total_views || 0"
            :color="themeColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.post-image {
  width: 100%;
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8px 16px;
  z-index: -1;
}
.post-header {
  width: fit-content;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.post-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  margin-top: -20px;
}
.post-first-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.post-time {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  line-height: normal;
  opacity: 0.3;
}
.post-category {
  font-size: 14px;
  line-height: normal;
}
.post-second-row {
  flex-grow: 1;
  margin-bottom: 13px;
}
.post-title {
  color: var(--secondary-dark-blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.post-description {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.post-last-row {
  display: flex;
  gap: 16px;
}
.post-last-row-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56%;
}
.post-time-reading {
  flex-grow: 1;
}
.post-last-updated {
  color: var(--Blue-2, #000b58);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.3;
}
.post-views {
  width: 40%;
}
</style>
