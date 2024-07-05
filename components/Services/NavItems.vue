<script setup lang="ts">
import { type TypeNavItem } from '~/types/services';

const props = defineProps({
  items: {
    type: Object as PropType<TypeNavItem[]>,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  pageSlug: {
    type: String,
    required: true,
  },
  itemsBorderRadius: {
    type: String,
    default: '8px',
  },
  isExpandingToSideOnDesktop: {
    type: Boolean,
    default: true,
  },
});
const localePath = useLocalePath();
const { locale } = useI18n();
const expandedSlug = ref('');
const styleObject = computed(() => {
  return {
    '--theme-color': props.bgColor,
    'borderRadius': props.itemsBorderRadius,
  };
});
let hoverTimer: NodeJS.Timeout;

// Functions
const expandItem = (slug: string) => {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    expandedSlug.value = slug;
  }, 200);
};
const prepareToCollapse = (slug: string) => {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    if (expandedSlug.value === slug) {
      expandedSlug.value = '';
    }
  }, 200);
};
const determineSlug = (itemSlug: string, subCategorySlug: string) => {
  if (locale.value === 'de') {
    return `/de/${props.pageSlug}/${itemSlug}/${subCategorySlug}`;
  } else {
    return `/${props.pageSlug}/${itemSlug}/${subCategorySlug}`;
  }
};
const handleClick = (slug: string) => {
  if (expandedSlug.value === slug) {
    expandedSlug.value = '';
  } else {
    expandedSlug.value = slug;
  }
};
</script>

<template>
  <div :style="styleObject" class="items">
    <div
      v-for="item in items"
      :key="item.slug"
      v-auto-animate="{ duration: 300 }"
      :class="[
        'item',
        {
          'item--expanded': expandedSlug === item.slug,
          'item--expanding-to-side': isExpandingToSideOnDesktop,
          'item--de': locale === 'de',
        },
      ]"
      role="option"
      aria-label=""
      tabindex="0"
      @click="handleClick(item.slug)"
      @mouseenter="expandItem(item.slug)"
      @mouseleave="prepareToCollapse(item.slug)"
    >
      <button type="button" class="item-header">
        <p class="item-title">
          {{ item.title }}
        </p>
        <IconsGeneralArrow
          class="arrow--mobile"
          :direction="expandedSlug === item.slug ? 'down' : 'right'"
        />
        <IconsGeneralArrow class="arrow--tablet" :direction="'right'" />
      </button>
      <div
        :class="[
          'item-line',
          {
            'item-line--expanded': expandedSlug === item.slug,
          },
        ]"
      ></div>
      <div v-if="expandedSlug === item.slug" class="item-content">
        <NuxtLink
          v-for="subItem in item.subCategories"
          :key="subItem.slug"
          :to="`${localePath(determineSlug(item.slug, subItem.slug))}#sub`"
          class="item-link"
        >
          {{ `/${subItem.title}` }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.items {
  padding: 4px;
  background-color: var(--theme-color);
}

.item {
  position: relative;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.item--expanded {
  background-color: rgba(255, 255, 255, 0.1);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 8px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  transition: all 0.3s ease;
}
.item-title {
  width: calc(100% - 32px);
}
.item--de .item-title {
  word-wrap: break-word;
}

.item-line {
  width: 0;
  height: 2px;
  background-color: var(--primary-white);
  transition: all 0.3s ease;
}

.item-line--expanded {
  width: 100%;
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 0 8px 8px 8px;
  width: 100%;
  transition: all 0.3s ease;
}

.item-link {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px;
  text-align: left;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.item-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.arrow--tablet {
  display: none;
}
.arrow--mobile,
.item-line {
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .item--expanding-to-side .item-content {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    background-color: var(--theme-color);
    z-index: 6;
  }

  .item--expanding-to-side .arrow--tablet {
    display: block;
  }

  .item--expanding-to-side .arrow--mobile,
  .item--expanding-to-side .item-line {
    display: none;
  }
}
</style>
