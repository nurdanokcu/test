<script setup lang="ts">
// Global imports
import { vOnClickOutside } from '@vueuse/components';
import { flagEngland, flagGermany } from '~/assets/images/flags';

const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

defineProps({
  isDarkTheme: {
    type: Boolean,
    required: false,
    default: false,
  },
});
// Computed properties and reactive variables
const showLanguageOptions = ref(false);
const handleFirstClick = () => {
  showLanguageOptions.value = true;
};
const handleLanguageSelection = () => {
  showLanguageOptions.value = false;
};
</script>

<template>
  <div
    v-on-click-outside="handleLanguageSelection"
    :class="[
      'language-container',
      {
        'language-container--open': showLanguageOptions,
        'language-container--dark': isDarkTheme,
      },
    ]"
  >
    <CommonTransitionFade mode="out-in">
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
            v-if="locale === 'en'"
            :src="flagEngland"
            alt="Flag United Kingdom"
          />
          <img
            v-else
            :src="flagGermany"
            alt="Flag Germany"
          />
        </div>
        <IconsGeneralArrowForward
          :color="isDarkTheme ? 'white' : 'black'"
          :width="20"
          :height="20"
          direction="down"
        />
      </div>

      <div
        v-else
        :class="[
          'language-selector',
          { 'language-selector--open': showLanguageOptions },
        ]"
      >
        <NuxtLink
          class="language-option"
          :to="switchLocalePath('en')"
          :aria-selected="locale === 'en'"
          @click="handleLanguageSelection"
        >
          <span class="language-flag">
            <img :src="flagEngland" alt="Flag United Kingdom" />
          </span>
        </NuxtLink>
        <NuxtLink
          class="language-option"
          :to="switchLocalePath('de')"
          :aria-selected="locale === 'de'"
          @click="handleLanguageSelection"
        >
          <span class="language-flag">
            <img :src="flagGermany" alt="Flag Germany" />
          </span>
        </NuxtLink>
      </div>
    </CommonTransitionFade>
  </div>
</template>

<style scoped>
.language-container {
  position: absolute;
  right: calc(100% + 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f2f2f2;
  width: 88px;
  transition: all 0.3s ease;
}
.language-container--open {
  width: 102px;
}
.language-container--dark {
  background: var(--secondary-darker-blue);
}
.language-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
.language-flag img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.language-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
  width: 100%;
}
.language-selector--open {
  padding: 0;
  gap: 0;
}
.language-option {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 4px 8px;
  width: 50%;
}
.language-option:hover {
  background: var(--secondary-dark-blue);
}
.language-container--dark .language-option:hover {
  background: #f2f2f2;
}
</style>
