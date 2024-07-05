<script setup>
import { menuItemsEn, menuItemsDe } from '~/data/menuItems.js';

const { locale } = useI18n();

const menu = computed(() => {
  if (locale.value === 'en') {
    return menuItemsEn;
  } else {
    return menuItemsDe;
  }
});
</script>

<template>
  <div class="nav-menu-open">
    <div class="nav-menu-content">
      <ul>
        <li :class="menu.about.class" class="nav-menu-item">
          <NavbarMarqueeBig :item="menu.about" />
          <NavbarMarqueeSmall :item="menu.about" />
          <NavbarSubmenu :submenu-items="menu.about.submenuItems" />
        </li>
        <li :class="menu.services.class" class="nav-menu-item">
          <NavbarMarqueeBig :item="menu.services" />
          <NavbarMarqueeSmall :item="menu.services" />
          <NavbarSubmenu :submenu-items="menu.services.submenuItems" />
        </li>
        <!-- <li
          :class="menu.resources.class"
          class="nav-menu-item"
        >
          <NavbarMarqueeBig :item="menu.resources" />
          <NavbarMarqueeSmall :item="menu.resources" />
        </li> -->
        <li :class="menu.blog.class" class="nav-menu-item">
          <NavbarMarqueeBig :item="menu.blog" />
          <NavbarMarqueeSmall :item="menu.blog" />
        </li>
      </ul>
      <div class="social-accounts-container">
        <CommonSocialAccounts />
      </div>
    </div>
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
.nav-menu-open {
  box-sizing: border-box;
  position: fixed;
  top: var(--nav-top-height);
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  padding-bottom: calc(var(--nav-top-height) + 32px);
  overflow-y: scroll;

  background-color: #fff;
  z-index: 100;
}
.nav-menu-item {
  position: relative;
}
.nav-menu-item:last-child {
  margin-bottom: 1rem;
}

/* Tablet Styles */
@media (min-width: 768px) {
  .nav-menu-open {
    width: 100%;
    padding-bottom: calc(var(--nav-top-height) + 32px);
  }
  .nav-menu-content {
    position: relative;
    padding: 0 0 0 32px;
  }
  .social-accounts-container {
    position: absolute;
    right: 0;
    bottom: 16px;
    background-color: white;
  }
}

@media (min-width: 1024px) {
  .nav-menu-content {
    max-width: var(--max-width-content);
    padding: 0 64px;
    margin: 0 auto;
  }
  .social-accounts-container {
    position: absolute;
    right: 64px;
  }
}

@media (min-width: 1200px) {
  .nav-menu-item {
    display: flex;
    align-items: center;
    gap: 16px;
    height: 200px;
  }
}
</style>
