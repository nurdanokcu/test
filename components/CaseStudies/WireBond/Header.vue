<template>
  <CaseStudiesHeaderType2
    :title="$t('case_studies.fahrwerkdigital.heading.title')"
    :header-info="$t('case_studies.wirebond.heading.text')"
    :scroll-path-id="$t('case_studies.wirebond.heading.scrollPathId')"
  >
    <template #header-company>
      <span>
        Wire
        <br />
        and bond
      </span>
    </template>
    <template #header-services>
      <CommonHeadingServices
        :text1="$t('case_studies.sektor.heading.service')"
        :text2="$t('case_studies.fahrwerkdigital.heading.marketing')"
        :subtext1="$t('case_studies.sektor.heading.industry')"
        :subtext2="$t('case_studies.wirebond.heading.stairlifts')"
        :subtext3="$t('case_studies.sektor.heading.goal')"
        :subtext4="$t('case_studies.wirebond.heading.goal_text')"
      />
    </template>
  </CaseStudiesHeaderType2>
</template>
