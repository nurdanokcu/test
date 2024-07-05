<script setup lang="ts">
import { type PaginationLink } from '~/types/blog';

type TypeLink = string | null;

const props = defineProps({
  prevLink: {
    type: [String, null] as PropType<TypeLink>,
    required: true,
  },
  nextLink: {
    type: [String, null] as PropType<TypeLink>,
    required: true,
  },
  paginationLinks: {
    type: Array as PropType<PaginationLink[]>,
    required: true,
  },
});

const emits = defineEmits(['onClickPage']);

const route = useRoute();
const router = useRouter();

const currentPage = computed(() => {
  const pageQuery = route.query.page || '1';
  return parseInt(pageQuery as string, 10);
});

const handlePageClick = (pageNumber: number | string) => {
  if (pageNumber === '...') {
    return;
  }
  if (pageNumber === currentPage.value) {
    return;
  }
  router.push({
    query: {
      ...route.query,
      page: pageNumber,
    },
  });
  emits('onClickPage', pageNumber);
};

const clickNext = () => {
  if (props.nextLink === null) {
    return;
  }
  router.push({
    query: {
      ...route.query,
      page: currentPage.value + 1,
    },
  });
  emits('onClickPage', currentPage.value + 1);
};

const clickPrev = () => {
  if (props.prevLink === null) {
    return;
  }
  router.push({
    query: {
      ...route.query,
      page: currentPage.value - 1,
    },
  });
  emits('onClickPage', currentPage.value - 1);
};

const finalPaginationLinks = computed(() => {
  const links = [...props.paginationLinks];
  if (links.length > 2) {
    links.shift();
    links.pop();
  } else {
    links.length = 0;
  }
  return links;
});
</script>

<template>
  <div class="blog-pagination">
    <BlogPaginationButton
      :is-prev="true"
      :is-disabled="prevLink === null"
      :aria-label="$t('theblog.previous')"
      @on-click="clickPrev"
    />
    <div class="page-number">
      <TransitionGroup name="fade">
        <button
          v-for="(page, index) in finalPaginationLinks"
          :key="`${page.label}-${index}`"
          type="button"
          :class="[
            'pagination-number',
            {
              'pagination-number--active': page.active,
            },
          ]"
          :disabled="page.label === '...'"
          name="page"
          @click="handlePageClick(page.label)"
        >
          {{ page.label }}
        </button>
      </TransitionGroup>
    </div>
    <BlogPaginationButton
      :is-disabled="nextLink === null"
      :aria-label="$t('theblog.next')"
      @on-click="clickNext"
    />
  </div>
</template>

<style scoped>
.blog-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.pagination-number {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.pagination-number:hover {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pagination-number--active {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}
.pagination-number:disabled:hover {
  background: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #000;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
  overflow: hidden;
  width: 0;
}
</style>
