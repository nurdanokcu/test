<script setup lang="ts">
import { type TypeBlog, type PaginationLink } from '~/types/blog';
import { type TypeArgsFilterPosts, TypePostStatus } from '~/types/privateBlog';

const { filterPosts, getFeaturedPosts } = privateBlogApi();

const localePath = useLocalePath();
const { locale } = useI18n();
const route = useRoute();
// Initial values
const page = computed(() => {
  if (route.query.page) {
    return route.query.page as string;
  }
  return '1';
});

const initialName = computed(() => {
  if (route.query.name) {
    return route.query.name as string;
  }
  return '';
});

const initialDate = computed(() => {
  if (route.query.date) {
    return route.query.date as string;
  }
  return '';
});

const initialStatus = computed(() => {
  if (route.query.status) {
    return route.query.status as TypePostStatus;
  }
  return TypePostStatus.NONE;
});

// States
const isLoadingInitial = ref(true);
const isLoading = ref(false);
const errorMessage = ref('');
const router = useRouter();
const posts = ref<TypeBlog[]>([]);
const paginationLinks = ref<PaginationLink[]>([]);
const prevLink = ref<string | null>('');
const nextLink = ref<string | null>('');
const featuredBlogs = ref<TypeBlog[]>([]);
const name = ref(initialName.value);
const selectedDate = ref(initialDate.value);
const status = ref(initialStatus.value);

// Functions
const handleFetchBlogs = async (args: TypeArgsFilterPosts) => {
  isLoading.value = true;
  try {
    const response = await filterPosts(args);
    posts.value = response.data.filter((post: TypeBlog) => !post.is_featured);
    paginationLinks.value = response.meta.links;
    prevLink.value = response.links.prev;
    nextLink.value = response.links.next;
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
const handleFetchFeaturedBlogs = async (locale: string) => {
  try {
    const response = await getFeaturedPosts(locale);
    featuredBlogs.value = response.data;
  } catch (error: any) {
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};

const handleFetchAllBlogs = async () => {
  const args: TypeArgsFilterPosts = { page: page.value, locale: locale.value };
  if (name.value) {
    args.name = name.value;
  }
  if (selectedDate.value) {
    args.date = selectedDate.value;
  }
  if (status.value !== TypePostStatus.NONE) {
    args.status = status.value;
  }
  await handleFetchBlogs(args);
  await handleFetchFeaturedBlogs(locale.value);
};

/**
 * Load page
 * @param page
 * loads the blogs for the given page and scrolls to the top of the section
 */
const loadPage = async (page: string) => {
  const args: TypeArgsFilterPosts = { page, locale: locale.value };
  if (name.value) {
    args.name = name.value;
  }
  if (selectedDate.value) {
    args.date = selectedDate.value;
  }
  if (status.value !== TypePostStatus.NONE) {
    args.status = status.value;
  }
  await handleFetchBlogs(args);
  const element = document.getElementById('admin-blog-posts-hidden');
  if (element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        observer.unobserve(element);
      });
    });
    observer.observe(element);
  }
};
const debouncedFilter = useDebounceFn(async () => {
  const args: TypeArgsFilterPosts = {};
  if (name.value) {
    args.name = name.value;
  }
  if (selectedDate.value) {
    args.date = selectedDate.value;
  }
  if (status.value !== TypePostStatus.NONE) {
    args.status = status.value;
  }

  router.push({ query: args });
  await handleFetchBlogs({ ...args, locale: locale.value });
}, 500);

const handleUpdateName = (value: string) => {
  name.value = value;
};
const handleUpdateDate = async (value: string) => {
  selectedDate.value = value;
  await debouncedFilter();
};

const handleUpdateStatus = async (value: TypePostStatus) => {
  status.value = value;
  await debouncedFilter();
};

onMounted(async () => {
  if (posts.value.length > 0) {
    isLoadingInitial.value = false;
    return;
  }
  if (posts.value.length === 0) {
    isLoadingInitial.value = true;
    await handleFetchAllBlogs();
    isLoadingInitial.value = false;
  }
});

watch(
  () => name.value,
  async () => {
    await debouncedFilter();
  },
);
</script>

<template>
  <div class="posts-wrapper">
    <div id="admin-blog-posts-hidden" class="posts-hidden"></div>
    <div class="posts">
      <div class="posts-header">
        <h1 class="posts-title">
          {{ $t("admin.blog.blogPosts") }}
        </h1>
        <AdminBlogsPostsFilter
          :name="name"
          :selected-date="selectedDate"
          :status="status"
          @on-update-date="handleUpdateDate"
          @on-update-name="handleUpdateName"
          @on-update-status="handleUpdateStatus"
        />
      </div>
      <div v-if="isLoadingInitial" class="drafts-loading">
        <AdminLoadingBoxes :amount="6" height="72px" />
      </div>
      <div class="posts-content">
        <div class="posts-lists">
          <TransitionGroup
            v-if="featuredBlogs.length > 0 && page === '1'"
            tag="ul"
            name="fade"
            class="list"
          >
            <AdminBlogsPostsListItem
              v-for="post in featuredBlogs"
              :key="String(post.id)"
              :post="post"
              :featured-post-length="featuredBlogs.length"
              @on-fetch-blogs="handleFetchAllBlogs"
            />
          </TransitionGroup>
          <TransitionGroup
            v-if="posts.length > 0"
            tag="ul"
            name="fade"
            class="list"
          >
            <AdminBlogsPostsListItem
              v-for="post in posts"
              :key="String(post.id)"
              :post="post"
              :featured-post-length="featuredBlogs.length"
              @on-fetch-blogs="handleFetchAllBlogs"
            />
          </TransitionGroup>
        </div>
        <BlogPagination
          :pagination-links="paginationLinks"
          :prev-link="prevLink"
          :next-link="nextLink"
          @on-click-page="loadPage"
        />
      </div>
    </div>
    <CommonButtonGradientFilled
      :text="$t('admin.blog.createNew')"
      :padding="'16px'"
      :is-link="true"
      :border-radius="'0px 0px 16px 16px'"
      :path="localePath('/admin/blog-new')"
    >
      <template #icon>
        <IconsGeneralAdd color="white" />
      </template>
      <template #icon-gradient>
        <IconsGeneralAdd :is-gradient="true" />
      </template>
    </CommonButtonGradientFilled>
  </div>
</template>

<style scoped>
.posts-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #ffffff;
  width: 100%;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  min-height: calc(100vh - var(--nav-top-height) - 48px);
}
.posts-hidden {
  position: absolute;
  top: -80px;
  opacity: 0;
  pointer-events: none;
}
.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
}
.posts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.posts-content,
.posts-lists {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}
.posts-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}
.list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 0;
  margin: 0;
}
.separator-line {
  width: 100%;
  height: 1px;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  opacity: 0.2;
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
