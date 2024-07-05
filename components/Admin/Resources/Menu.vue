<script setup lang="ts">
defineProps({
  isLightTheme: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const { t } = useI18n();
const showDropdown = ref(false);
const localePath = useLocalePath();
const menuItems = [
  {
    title: t('admin.resources.articles'),
    link: '/admin/resources/articles',
  },
  {
    title: t('admin.resources.blog'),
    link: '/admin/resources/blog',
  },
  {
    title: t('admin.resources.educational'),
    link: '/admin/resources/educational',
  },
  {
    title: t('admin.resources.videos'),
    link: '/admin/resources/videos',
  },
];
const route = useRoute();
const isResourcesPage = computed(() => {
  const regex = /^\/(en|de)\/admin\/resources\/?$/;
  return regex.test(route.path);
});
</script>

<template>
  <div
    :class="['menu', { 'menu--light': isLightTheme }]"
    @mouseenter="showDropdown = true"
    @mouseleave="showDropdown = false"
  >
    <NuxtLink :to="localePath('/admin/resources')" class="menu-title">
      <span class="menu-title-text">
        {{ $t("admin.resources.title") }}
        <IconsGeneralArrowForward
          :color="isLightTheme ? 'white' : 'black'"
          :width="20"
          :height="20"
          direction="down"
        />
      </span>
      <span
        :class="[
          'menu-item-line',
          {
            'menu-item-line--active': isResourcesPage,
          },
        ]"
      ></span>
    </NuxtLink>
    <CommonTransitionDropdown>
      <div v-if="showDropdown" class="menu-dropdown">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.title"
          :to="localePath(item.link)"
          class="menu-item"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </CommonTransitionDropdown>
  </div>
</template>

<style scoped>
.menu {
  position: relative;
}
.menu-title {
  display: inline-flex;
  flex-direction: column;
  color: var(--secondary-dark-blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 16px;
  height: 100%;
}
.menu-title-text {
  display: flex;
  align-items: center;
  gap: 8px;
}
.menu-title:hover,
.menu-item:hover {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.menu-dropdown {
  position: absolute;
  top: calc(100% - 8px);
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  z-index: 12;
}
.menu-item {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
  align-self: stretch;
  color: var(--secondary-dark-blue, #000b58);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
.menu-item-line {
  display: block;
  width: 0;
  height: 3px;
  background: var(--gradient-logo);
  transition: width 0.3s ease-in-out;
}
.menu-item-line--active {
  width: 100%;
}
.menu--light .menu-title {
  color: #fff;
}
.menu--light .menu-title:hover,
.menu--light .menu-item:hover {
  background: var(--primary-white-hover);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.menu--light .menu-dropdown {
  background: var(--secondary-dark-blue);
}
.menu--light .menu-item {
  color: #fff;
}
</style>
