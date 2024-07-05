<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isAdditionalLink: {
    type: Boolean,
    default: false,
  },
});
const localePath = useLocalePath();
const getPath = (subItem) => {
  if (subItem.id) {
    return `${localePath(subItem.path)}/#${subItem.id}`;
  } else {
    return localePath(subItem.path);
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <div :class="[{ 'additional-link': isAdditionalLink }]">
    <p v-if="isAdditionalLink" class="footer-map-title">
      {{ item.name }}
    </p>
    <NuxtLink
      v-else
      :to="localePath(item.path)"
      class="footer-map-link"
      :aria-label="`${item.name} menu`"
      @click="scrollToTop"
    >
      {{ item.name }}
    </NuxtLink>
    <ul :class="`${item.class}__submenu`">
      <li
        v-for="subItem in item.submenuItems"
        :key="subItem.name"
        class="footer-submenu-item"
      >
        <NuxtLink
          class="footer-submenu-link"
          :to="getPath(subItem)"
          @click="scrollToTop"
        >
          {{ subItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
  margin: 0;
}
.footer-map-link,
.footer-submenu-link {
  display: inline-block;
  width: 100%;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: left;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: fit-content;
}
.footer-map-link {
  font-weight: 300;
  font-size: 58px;
  line-height: 72px;
}
.footer-map-title {
  font-weight: 300;
  font-size: 58px;
  line-height: 72px;
  text-transform: uppercase;
  text-align: left;
  color: #fff;
}
.footer-map-link:hover,
.footer-submenu-link:hover {
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.footer-map-link:hover,
.footer-submenu-link:hover {
  transform: scale(1.05);
}
.footer-map-link:active,
.footer-submenu-link:active {
  background: var(--primary-orange);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
  .additional__submenu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .additional-link {
    display: flex;
    gap: 24px;
  }
}
@media (min-width: 1024px) {
  .additional-link {
    flex-direction: column;
    gap: 0;
  }
}
@media (min-width: 1200px) {
  .additional-link {
    flex-direction: row;
    gap: 24px;
  }
}
</style>
