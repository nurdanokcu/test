<script setup lang="ts">
import { introImage } from '~/assets/images/digital_images';

const { developmentSubCategory } = useServices();
</script>

<template>
  <div class="subcategory">
    <div id="sub" class="subcategory-hidden"></div>
    <div class="subcategory-content">
      <CommonServicesPageName :text="developmentSubCategory.name" />
      <CommonServicesIntro
        class="digital-intro"
        :image="developmentSubCategory.image || introImage"
        :what-is="developmentSubCategory.whatIs"
        :what-is-description="developmentSubCategory.whatIsDescription"
        :approach="developmentSubCategory.ourApproach"
        :approach-description="developmentSubCategory.ourApproachDescription"
      />
      <CommonServicesProvidedServices
        :page-name="developmentSubCategory.name"
        :facts="developmentSubCategory.facts"
        :about="developmentSubCategory.aboutService"
        :process="developmentSubCategory.process"
        :process-items="developmentSubCategory.processItems"
        :theme-color="'var(--primary-orange)'"
      />
    </div>
    <CommonContactUs
      :title="$t('design.contactForm.title')"
      :subtitles="[
        $t('development.contactus.text_2'),
        $t('social.contactus.text_3'),
      ]"
      :side-text-1="$t('development.contactus.text')"
      :side-text-2="$t('development.contactus.text_1')"
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
