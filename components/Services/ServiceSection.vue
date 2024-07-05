<script setup lang="ts">
import { type TypeServicePageSection } from '~/types/services';

defineProps({
  sectionData: {
    type: Object as PropType<TypeServicePageSection>,
    required: true,
  },
  sectionTitle: {
    type: String,
    required: true,
  },
  hiddenId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="section">
    <div :id="hiddenId" class="hidden-for-id"></div>
    <ServicesService
      v-for="service in sectionData.services"
      :key="service.id"
      :service="service"
      :page-slug="sectionData.pageSlug"
      :color="sectionData.themeColor"
      :hover-color="sectionData.themeHoverColor"
      :bg-color="sectionData.themeBgColor"
      :title="sectionTitle"
    />
  </section>
</template>

<style scoped>
.section {
  position: relative;
  display: flex;
  flex-direction: column;
}
.hidden-for-id {
  position: absolute;
  top: -100px;
}

@media (min-width: 1200px) {
  .section {
    padding-left: 240px;
  }
}
</style>
