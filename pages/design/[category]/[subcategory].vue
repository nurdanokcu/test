<script setup lang="ts">
import { introImage } from '~/assets/images/digital_images';

const { designSubCategory } = useServices();
</script>

<template>
  <div class="subcategory">
    <div id="sub" class="subcategory-hidden"></div>
    <div class="subcategory-content">
      <CommonServicesPageName :text="designSubCategory.name" />
      <CommonServicesIntro
        class="digital-intro"
        :image="designSubCategory.image || introImage"
        :what-is="designSubCategory.whatIs"
        :what-is-description="designSubCategory.whatIsDescription"
        :approach="designSubCategory.ourApproach"
        :approach-description="designSubCategory.ourApproachDescription"
      />
      <CommonServicesProvidedServices
        :page-name="designSubCategory.name"
        :facts="designSubCategory.facts"
        :about="designSubCategory.aboutService"
        :process="designSubCategory.process"
        :process-items="designSubCategory.processItems"
        :theme-color="'var(--primary-magenta)'"
      />
    </div>
    <CommonContactUs
      class="digital-contact"
      :title="$t('design.contactForm.title')"
      :subtitles="[$t('design.contactForm.subtitle')]"
      :side-text-1="$t('design.contactForm.text')"
      :side-text-2="$t('design.contactForm.text_1')"
      :is-divided-on-desktop="false"
      :padding-bottom="'24px'"
    />
  </div>
</template>

<style scoped>
.subcategory {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

.subcategory-hidden {
  position: absolute;
  top: -168px;
}

.subcategory-content {
  position: relative;
  border-radius: 16px;
  width: 100%;
}

.digital-intro {
  margin-bottom: 80px;
}

.digital-contact {
  margin-bottom: 80px;
  border-radius: 16px;
}

@media (min-width: 768px) {
  .subcategory {
    padding: 0 48px;
  }
}

@media (min-width: 1024px) {
  .subcategory {
    padding: 0 64px;
  }
}

@media (min-width: 1200px) {
  .subcategory {
    padding: 16px 80px 16px calc(var(--digital-side-nav-width));
    max-width: var(--max-width-content);
    margin: 0 auto;
  }

  .subcategory-content {
    position: relative;
    padding-left: 24px;
  }

  .digital-contact {
    margin: 0 0 0 24px;
    border-radius: 16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
