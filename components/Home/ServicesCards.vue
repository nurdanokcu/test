<script setup>
import { servicesCardsDe, servicesCardsEn } from '../../data/homeServices';

const { locale } = useI18n();

const serviceCards = computed(() => {
  if (locale.value === 'en') {
    return servicesCardsEn;
  } else {
    return servicesCardsDe;
  }
});
</script>

<template>
  <div class="service-cards">
    <ClientOnly>
      <HomeServicesCard
        v-for="service in serviceCards"
        :key="service.id"
        :class="`service-card--${service.id}`"
        :service="service"
      />
    </ClientOnly>
  </div>
</template>

<style scoped>
.service-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .service-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    width: 100%;
    max-width: calc(var(--max-width-content-home-medium) - 380px);
  }
  .service-card--1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  .service-card--2 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .service-card--3 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}
</style>
