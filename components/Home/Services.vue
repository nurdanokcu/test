<template>
  <section class="services">
    <HomeServicesMarquee class="services-marquee" />
    <HomeServicesCards class="services-cards" />
  </section>
</template>

<style scoped>
.services {
  padding: 64px 24px;
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width-content-home-medium);
  overflow-x: clip;
}

.services-marquee {
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .services {
    padding: 64px 32px;
  }
}

@media (min-width: 1024px) {
  .services {
    padding: 64px;
  }
}

@media (min-width: 1200px) {
  .services-marquee {
    margin-bottom: 0;
  }
}
</style>
