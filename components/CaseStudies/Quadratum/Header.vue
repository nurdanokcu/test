<template>
  <CaseStudiesHeaderType2
    :title="$t('case_studies.link.heading.title')"
    :header-info="$t('case_studies.quadratum.heading.text')"
    :scroll-path-id="$t('case_studies.quadratum.heading.scrollPathId')"
  >
    <template #header-company>
      <span>
        Quadratum
        <br />
        Potsdam
      </span>
    </template>
    <template #header-services>
      <CommonHeadingServices
        :text1="$t('case_studies.sektor.heading.service')"
        :text2="$t('case_studies.link.heading.marketing')"
        :subtext1="$t('case_studies.sektor.heading.industry')"
        :subtext2="$t('case_studies.quadratum.heading.stairlifts')"
        :subtext3="$t('case_studies.sektor.heading.goal')"
        :subtext4="$t('case_studies.quadratum.heading.goal_text')"
      />
    </template>
  </CaseStudiesHeaderType2>
</template>
