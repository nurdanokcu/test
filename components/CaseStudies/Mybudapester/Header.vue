<script setup>
import { headerimage } from '~/assets/images/caseStudies_images/mybudapester_images';
</script>

<template>
  <CaseStudiesHeaderType2
    :title="$t('case_studies.mybudapester.heading.title')"
    :header-info="$t('case_studies.mybudapester.heading.text')"
    :scroll-path-id="$t('case_studies.mybudapester.heading.scrollPathId')"
    company="MyBudapester"
  >
    <template #header-images>
      <div class="wrapper">
        <div class="box">
          <img :src="headerimage" alt="mybudapester website" />
        </div>
      </div>
    </template>

    <template #header-services>
      <CommonHeadingServices
        :text1="$t('case_studies.sektor.heading.service')"
        :text2="$t('case_studies.mybudapester.heading.marketing')"
        :subtext1="$t('case_studies.sektor.heading.industry')"
        :subtext2="$t('case_studies.mybudapester.heading.stairlifts')"
        :subtext3="$t('case_studies.sektor.heading.goal')"
        :subtext4="$t('case_studies.mybudapester.heading.goal_text')"
      />
    </template>
  </CaseStudiesHeaderType2>
</template>

<style scoped>
.wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 214px;
  z-index: 2;
}

.box {
  width: 100%;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
