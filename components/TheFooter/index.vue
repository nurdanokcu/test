<script setup>
import { menuItemsEn, menuItemsDe } from '~/data/menuItems.js';
import { PSLogoColor } from '~/assets/images/logo';

const { locale } = useI18n();

const menu = computed(() => {
  if (locale.value === 'en') {
    return menuItemsEn;
  } else {
    return menuItemsDe;
  }
});
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const localePath = useLocalePath();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-map">
        <ul class="footer-map-main">
          <li class="footer-map-item">
            <TheFooterLink :item="menu.about" />
          </li>
          <li class="footer-map-item">
            <TheFooterLink :item="menu.services" />
          </li>
          <!-- <li class="footer-map-item">
            <TheFooterLink :item="menu.resources" />
          </li> -->
          <li class="footer-map-item">
            <TheFooterLink :item="menu.blog" />
          </li>
        </ul>
        <div class="footer-map-extra-container">
          <div class="footer-map-extra">
            <TheFooterLink :is-additional-link="true" :item="menu.additional" />
          </div>
          <CommonPartners />
        </div>
      </div>
      <div class="footer-contact">
        <NuxtLink
          :to="localePath('/')"
          class="footer-logo"
          @click="scrollToTop"
        >
          <img
            width="195"
            height="163"
            :src="PSLogoColor"
            loading="lazy"
            alt="Propaganda Solutions Logo"
          />
        </NuxtLink>
        <CommonSocialAccounts place="footer" />
      </div>
    </div>
  </footer>
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
.footer {
  padding: 80px 24px;
  background-color: #000;
  color: #fff;
}
.footer-content {
  max-width: calc(var(--max-width-content) - 128px);
  margin: 0 auto;
}
.footer-map {
  margin-bottom: 5rem;
}
.footer-map-item {
  margin-bottom: 3rem;
}
.footer-map-extra {
  margin-bottom: 2rem;
}
.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

/* Tablet Styles */
@media (min-width: 768px) {
  .footer-map {
    margin: 0 auto 5rem;
    width: fit-content;
  }
  .footer-map-main {
    display: flex;
    gap: 3rem;
  }
  .footer-map-extra {
    display: flex;
    gap: 1rem;
  }
  .footer-map-extra-container {
    width: fit-content;
  }
  .footer-contact {
    flex-direction: row;
    justify-content: center;
    gap: 6rem;
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .footer {
    padding: 80px 64px;
  }
  .footer-map {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  .footer-contact {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
