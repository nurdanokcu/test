<script setup>
const props = defineProps({
  activeSection: {
    type: Object,
    required: true,
  },
  sectionIds: {
    type: Array,
    required: true,
  },
  sectionTitles: {
    type: Array,
    required: false,
    default: () => [],
  },
});
const emit = defineEmits(['onScrollToSection']);

const { t } = useI18n();

const ApproachIcon = resolveComponent('IconsGeneralTeam');
const ResultsIcon = resolveComponent('IconsGeneralOurWork');
const FeedbackIcon = resolveComponent('IconsGeneralMessage');

const sections = computed(() => [
  {
    id: props.sectionIds[0],
    name: 'approach',
    title:
      props.sectionTitles[0] || t('case_studies.regio.navigation.challenge'),
    icon: ApproachIcon,
    color: 'var(--primary-magenta)',
    isActive: props.activeSection.approach,
  },
  {
    id: props.sectionIds[1],
    name: 'results',
    title:
      props.sectionTitles[1] || t('case_studies.regio.navigation.solution'),
    icon: ResultsIcon,
    color: 'var(--primary-magenta)',
    isActive: props.activeSection.results,
  },
  {
    id: props.sectionIds[2],
    name: 'feedback',
    title: props.sectionTitles[2] || t('case_studies.regio.navigation.impact'),
    icon: FeedbackIcon,
    color: 'var(--primary-magenta)',
    isActive: props.activeSection.feedback,
  },
]);

const scrollToSection = (section) => {
  emit('onScrollToSection', section);
};
</script>

<template>
  <CommonSideNavigation
    :sections="sections"
    :nav-expand-background="sections[0].color"
    @on-click="scrollToSection"
  />
</template>
