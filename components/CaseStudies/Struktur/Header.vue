<script setup>
import { headerStruktur } from '~/assets/images/caseStudies_images/struktur_images';
</script>

<template>
  <CaseStudiesHeaderType2
    :title="$t('case_studies.struktur.heading.title')"
    :header-info="$t('case_studies.struktur.heading.text')"
    :scroll-path-id="$t('case_studies.struktur.heading.scrollPathId')"
    company="Struktur"
  >
    <template #header-images>
      <div class="wrapper">
        <div class="box">
          <img :src="headerStruktur" alt="strukture website" />
        </div>
      </div>
    </template>
    <template #header-services>
      <CommonHeadingServices
        :text1="$t('case_studies.sektor.heading.service')"
        :text2="$t('case_studies.struktur.heading.marketing')"
        :subtext1="$t('case_studies.sektor.heading.industry')"
        :subtext2="$t('case_studies.struktur.heading.stairlifts')"
        :subtext3="$t('case_studies.sektor.heading.goal')"
        :subtext4="$t('case_studies.struktur.heading.goal_text')"
      />
    </template>
  </CaseStudiesHeaderType2>
</template>

<style scoped>
.header-logo-desktop {
  display: none;
}

.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}

.box {
  width: 100%;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (min-width: 768px) {
  .header-logo-mobile {
    display: none;
  }

  .header-logo-desktop {
    display: block;
  }
}

@media (min-width: 1200px) {
  .wrapper {
    margin: 48px auto 0 auto;
    width: 100%;
  }

  .box {
    padding-top: 80%;
    position: relative;
  }

  .box img {
    width: calc(100% + 100px);
    height: 100%;
    object-fit: contain;
    position: absolute;
    right: 0;
    left: -100px;
    bottom: 0;
    vertical-align: bottom;
  }
}
</style>
