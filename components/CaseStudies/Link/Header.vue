<script setup>
import { headerimage } from '~/assets/images/caseStudies_images/link_images';
</script>

<template>
  <CaseStudiesHeaderType2
    :title="$t('case_studies.link.heading.title')"
    :header-info="$t('case_studies.link.heading.text')"
    :scroll-path-id="$t('case_studies.link.heading.scrollPathId')"
    company="Link"
  >
    <template #header-images>
      <div class="wrapper">
        <div class="box">
          <img :src="headerimage" alt="link instagram" />
        </div>
      </div>
    </template>

    <template #header-services>
      <CommonHeadingServices
        :text1="$t('case_studies.sektor.heading.service')"
        :text2="$t('case_studies.link.heading.marketing')"
        :subtext1="$t('case_studies.sektor.heading.industry')"
        :subtext2="$t('case_studies.link.heading.stairlifts')"
        :subtext3="$t('case_studies.sektor.heading.goal')"
        :subtext4="$t('case_studies.link.heading.goal_text')"
      />
    </template>
  </CaseStudiesHeaderType2>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
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
  .wrapper {
    margin: 0 0 0 auto;
  }
}
</style>
