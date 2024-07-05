<script setup>
// Local imports
import {
  digitalMarketingEN,
  digitalMarketingDE,
} from '~/data/digital-marketing';
import { designEN, designDE } from '~/data/design';
import { developmentEN, developmentDE } from '~/data/development';
import { flagEngland, flagGermany } from '~/assets/images/flags';

const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
const { generateSlugKeyPairs } = useServices();
const route = useRoute();
const { closeMenu } = useNavbarMenu();

// Computed properties and reactive variables
const showLanguageOptions = ref(false);
const language = computed({
  get: () => locale.value,
});
const digitalMarketingSlugs = generateSlugKeyPairs(
  digitalMarketingEN,
  digitalMarketingDE,
);
const designSlugs = generateSlugKeyPairs(designEN, designDE);
const developmentSlugs = generateSlugKeyPairs(developmentEN, developmentDE);

// Functions
const handleFirstClick = () => {
  showLanguageOptions.value = true;
};

const decideTargetPath = async (targetPage, slugs) => {
  const category = route.params.category;
  const subcategory = route.params.subcategory;
  const targetLocale = locale.value === 'en' ? '/de' : '';
  const targetCategory = slugs[category];
  const targetSubcategory = slugs[subcategory];

  let targetPath = `${targetLocale}/${targetPage}`;
  if (targetCategory) {
    targetPath = `${targetLocale}/${targetPage}/${targetCategory}`;
  }
  if (targetSubcategory) {
    targetPath = `${targetLocale}/${targetPage}/${targetCategory}/${targetSubcategory}`;
  } 
  return await navigateTo(targetPath);
};

const digitalTargetPage = computed(() =>
  locale.value === 'en' ? 'digitales-marketing' : 'digital-marketing',
);
const designTargetPage = 'design';
const developmentTargetPage = computed(() =>
  locale.value === 'en' ? 'entwicklung' : 'development',
);
const handleDigitalPage = () => decideTargetPath(digitalTargetPage.value, digitalMarketingSlugs);
const handleDesignPage = () => decideTargetPath(designTargetPage, designSlugs);
const handleDevelopmentPage = () => decideTargetPath(developmentTargetPage.value, developmentSlugs);

const handleLanguageSelection = () => {
  showLanguageOptions.value = false;
  if (route.path.includes('/digital-marketing ') || route.path.includes('/digitales-marketing')) {
    handleDigitalPage();
  } else if (route.path.includes('/design')) {
    handleDesignPage();
  } else if (
    route.path.includes('/development')
    || route.path.includes('/entwicklung')
  ) {
    handleDevelopmentPage();
  }
  closeMenu();
};

// Click outside
const el = ref('el');
function close() {
  showLanguageOptions.value = false;
}
onClickOutside(el, close);
</script>

<template>
  <div
    class="language-container"
    :class="{ 'language-container--open': showLanguageOptions }"
  >
    <CommonTransitionFade>
      <div
        v-if="!showLanguageOptions"
        class="language-selector"
        role="option"
        tabindex="0"
        aria-selected="false"
        @click="handleFirstClick"
      >
        <div class="language-flag">
          <img
            v-if="language === 'en'"
            :src="flagEngland"
            width="32"
            alt="Flag United Kingdom"
          />
          <img
            v-else
            :src="flagGermany"
            alt="Flag Germany"
            width="32"
          />
          <p v-if="language === 'en'" class="language-text">
            English
          </p>
          <p v-else class="language-text">
            Deutsch
          </p>
        </div>
        <IconsGeneralKeyboardDown />
      </div>

      <div
        v-else
        ref="el"
        class="language-selector open"
      >
        <NuxtLink
          class="language-option"
          :to="switchLocalePath('en')"
          role="option"
          tabindex="0"
          :aria-selected="language === 'en'"
          @click="handleLanguageSelection"
        >
          <span class="language-flag">
            <img
              width="32"
              :src="flagEngland"
              alt="Flag United Kingdom"
            />
            <span class="language-text"> English </span>
          </span>
        </NuxtLink>
        <NuxtLink
          class="language-option"
          :to="switchLocalePath('de')"
          role="option"
          :aria-selected="language === 'de'"
          @click="handleLanguageSelection"
        >
          <span class="language-flag">
            <img
              width="32"
              :src="flagGermany"
              alt="Flag Germany"
            />
            <span class="language-text"> Deutsch </span>
          </span>
        </NuxtLink>
      </div>
    </CommonTransitionFade>
  </div>
</template>

<style scoped>
.language-container {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 88px;
  height: 48px;
  overflow: hidden;
  border: 1px solid #000;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.language-selector {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 8px;
  padding: 8px 8px 8px 16px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.language-selector.open {
  display: flex;
  justify-content: center;
  padding: 0;
  gap: 0;
  overflow: hidden;
  height: 100%;
}

.language-option {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 2px 0;
  width: 100%;
  height: 100%;
  color: inherit;
  font-family: inherit;
  transition: all 0.2s ease;
}

.language-option:hover {
  background: #1a1818;
  color: white;
}

.language-option:active {
  background: #000;
}

.open .language-text {
  width: 100%;
  opacity: 1;
}

.language-text {
  display: none;
  opacity: 0;
  width: 0;
  margin-left: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  transition: all 0.2s ease;
}

.language-flag {
  display: flex;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .language-container--open {
    width: 150px;
  }

  .language-text {
    display: block;
  }

  .language-selector:hover .language-text {
    opacity: 1;
    width: 100%;
  }

  .language-container:hover {
    width: 150px;
  }

  .language-selector.open {
    flex-direction: column;
  }

  .language-container--open {
    height: 72px;
  }
}
</style>
