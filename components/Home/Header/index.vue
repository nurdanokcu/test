<template>
  <div class="header-container">
    <header class="header">
      <div class="team-container">
        <HomeHeaderTeam />
        <div class="ellipse-container-desktop">
          <HomeHeaderEllipse />
        </div>
      </div>
      <div class="title-container">
        <HomeHeaderMainTitle />
        <div class="card-container-desktop">
          <HomeHeaderCard />
        </div>
      </div>
      <div class="scroll-container-mobile">
        <CommonScrollForMore :path-id="$t('home.header.scrollPathId')" />
      </div>
      <div class="ellipse-card-container">
        <div class="ellipse-container-mobile">
          <HomeHeaderEllipse />
        </div>
        <div class="card-container-mobile">
          <HomeHeaderCard />
        </div>
      </div>
      <div class="services-scroll-container">
        <div class="scroll-container-tablet">
          <CommonScrollForMore :path-id="$t('home.header.scrollPathId')" />
        </div>
        <CommonServicesGrid />
      </div>
    </header>
  </div>
</template>

<style scoped>
.header-container {
  background: var(--gradient-logo);
}

.header {
  padding: 48px 24px;
  max-width: var(--max-width-content);
  margin: 0 auto;
}

.team-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.title-container {
  margin-bottom: 1.5rem;
}

.card-container-desktop {
  display: none;
}

.scroll-container-mobile {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.scroll-container-tablet {
  display: none;
}

.ellipse-container-desktop {
  display: none;
}

.ellipse-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-bottom: 3rem;
}

@media screen and (min-width: 768px) {
  .header {
    padding: 24px 32px;
  }

  .title-container {
    margin-bottom: 0;
  }

  .scroll-container-mobile {
    display: none;
  }

  .scroll-container-tablet {
    display: block;
  }

  .ellipse-card-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .services-scroll-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }
}
@media screen and (min-width: 1024px) {
  .header {
    padding: 48px 64px;
  }
}

@media screen and (min-width: 1200px) {
  .ellipse-container-desktop {
    display: block;
  }

  .ellipse-container-mobile {
    display: none;
  }

  .team-container {
    justify-content: space-between;
    align-items: center;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-container-desktop {
    display: block;
  }

  .card-container-mobile {
    display: none;
  }
}
</style>
