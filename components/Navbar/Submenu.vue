<script setup>
const { closeMenu } = useNavbarMenu();
const localePath = useLocalePath();

defineProps({
  submenuItems: {
    type: Object,
    required: true,
  },
});
const handleClick = () => {
  closeMenu();
};
const getPath = (subItem) => {
  if (subItem.id) {
    return `${localePath(subItem.path)}/#${subItem.id}`;
  } else {
    return localePath(subItem.path);
  }
};
</script>

<template>
  <ul class="nav-submenu">
    <li
      v-for="subItem in submenuItems"
      :key="subItem.name"
      class="nav-submenu-item"
    >
      <NuxtLink
        class="nav-submenu-link"
        :to="getPath(subItem)"
        @click="handleClick"
      >
        {{ subItem.name }}
      </NuxtLink>
    </li>
  </ul>
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
.nav-submenu {
  padding: 0 16px;
}

.nav-submenu-link {
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
}

.nav-submenu-link:hover {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-submenu-link:active {
  background: var(--primary-orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
  .nav-submenu {
    padding: 0;
  }
}

@media (min-width: 1200px) and (max-width: 1500px) {
  .nav-submenu-link {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (min-width: 1200px) {
  .nav-submenu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 16px;
  }
  .nav-submenu-item {
    white-space: nowrap;
  }
  .nav-submenu-item:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }
  .nav-submenu-item:nth-child(2) {
    grid-row: 2;
    grid-column: 1;
  }
  .nav-submenu-item:nth-child(3) {
    grid-row: 3;
    grid-column: 1;
  }
  .nav-submenu-item:nth-child(4) {
    grid-row: 1;
    grid-column: 2;
  }
  .nav-submenu-item:nth-child(5) {
    grid-row: 2;
    grid-column: 2;
  }
}
</style>
