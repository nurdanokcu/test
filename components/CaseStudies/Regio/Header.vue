<template>
  <CaseStudiesHeaderType1
    company="Regio"
    :title="$t('case_studies.regio.heading.title')"
    :header-info="$t('case_studies.regio.heading.text')"
    :scroll-path-id="$t('case_studies.regio.heading.scrollPathId')"
  >
    <template #header-images>
      <CaseStudiesRegioHeaderImages />
    </template>
    <template #header-services>
      <CommonHeadingServices
        :text1="$t('case_studies.sektor.heading.service')"
        :text2="$t('case_studies.regio.heading.marketing')"
        :subtext1="$t('case_studies.sektor.heading.industry')"
        :subtext2="$t('case_studies.regio.heading.stairlifts')"
        :subtext3="$t('case_studies.sektor.heading.goal')"
        :subtext4="$t('case_studies.regio.heading.goal_text')"
      />
    </template>
  </CaseStudiesHeaderType1>
</template>
