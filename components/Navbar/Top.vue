<script setup>
import { PSLogoBlack } from '~/assets/images/logo';

const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();
const { showMenu, closeMenu, toggleMenu } = useNavbarMenu();

const digitalPage = computed(() =>
  locale.value === 'en' ? 'Digital Marketing' : 'Digitales Marketing',
);
const designPage = computed(() => 'Design');
const developmentPage = computed(() =>
  locale.value === 'en' ? 'Development' : 'Entwicklung',
);

const handlePageTitle = (pageTitle) => {
  const category = route.params.category;
  const subcategory = route.params.subcategory;
  if (subcategory) {
    return subcategory.replaceAll('-', ' ');
  }
  if (category) {
    return category.replaceAll('-', ' ');
  }

  return pageTitle;
};
const handleDigitalPageTitle = () => handlePageTitle(digitalPage.value);
const handleDesignPageTitle = () => handlePageTitle(designPage.value);
const handleDevelopmentPageTitle = () => handlePageTitle(developmentPage.value);

const pageTitle = computed(() => {
  if (route.path === '/') {
    return locale.value === 'en' ? 'Home Page' : 'Startseite';
  } else if (route.path.includes('digital')) {
    return handleDigitalPageTitle();
  } else if (route.path.includes('design')) {
    return handleDesignPageTitle();
  } else if (
    route.path.includes('development')
    || route.path.includes('entwicklung')
  ) {
    return handleDevelopmentPageTitle();
  } else if (route.fullPath.includes('blog')) {
    return 'Blog';
  } else {
    const routeTrimmed = route.path
      .replace(`/${locale.value}`, '')
      .replaceAll('/', ' ')
      .replaceAll('-', ' ');
    if (locale.value === 'en') {
      return routeTrimmed === '' ? 'Home Page' : routeTrimmed;
    } else if (locale.value === 'de') {
      return routeTrimmed === '' ? 'Startseite' : routeTrimmed;
    } else {
      return routeTrimmed;
    }
  }
});

const pageTitleColor = computed(() => {
  return route.path.includes('datenschutzbestimmungen')
    || route.path.includes('impressum')
    || route.path.includes('privacy-policy')
    || route.path.includes('subscriptions')
    || route.path.includes('unsubscribe')
    ? '#006FEC'
    : '#000';
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
};
</script>

<template>
  <div class="nav-top-container">
    <div class="nav-top">
      <NuxtLink
        :to="localePath('/')"
        class="nav-top-logo"
        @click="scrollToTop"
      >
        <img
          width="60"
          height="43"
          :src="PSLogoBlack"
          alt="Propaganda solutions logo"
        />
        <CommonTransitionFade>
          <div v-if="!showMenu" class="nav-top-logo-text">
            <p class="nav-top-logo-name">Propaganda Solutions</p>
            <p>The last word in digital</p>
          </div>
        </CommonTransitionFade>
      </NuxtLink>

      <CommonTransitionFade>
        <NavbarLanguage v-if="showMenu" />
      </CommonTransitionFade>

      <div class="nav-top-right">
        <CommonTransitionFade>
          <p
            v-if="!showMenu"
            :style="{ color: pageTitleColor }"
            class="nav-top-right-text"
          >
            {{ pageTitle }}
          </p>
        </CommonTransitionFade>
        <button
          type="button"
          class="nav-button"
          :aria-label="
            showMenu ? $t('navbar.closeMenu') : $t('navbar.openMenu')
          "
          :title="showMenu ? $t('navbar.closeMenu') : $t('navbar.openMenu')"
          tabindex="0"
          @click="toggleMenu"
        >
          <CommonTransitionFade mode="out-in">
            <IconsMenuOpen v-if="!showMenu" />
            <IconsMenuClose v-else />
          </CommonTransitionFade>
        </button>
      </div>
    </div>
  </div>
</template>
