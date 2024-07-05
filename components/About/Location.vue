<template>
  <div class="location-container">
    <p class="location-title">
      {{ $t("about.location.title") }}
    </p>
    <div class="location-content">
      <NuxtLink
        target="_blank"
        to="https://maps.app.goo.gl/GLroTR3xktmiNaiY7"
        class="location-link"
      >
        <span class="location">
          <span class="title">
            {{ $t("about.location.germany") }}
          </span>
          <IconsAboutLocation />
        </span>
        <span class="line"></span>
        <span class="location-address">
          {{ $t("about.location.germany-address") }}
          <br />
          {{ $t("about.location.germany-address_2") }}
        </span>
      </NuxtLink>
      <NuxtLink
        target="_blank"
        to="https://maps.app.goo.gl/2TzTv96vXghLqhEj7"
        class="location-link"
      >
        <span class="location">
          <span class="title">
            {{ $t("about.location.english") }}
          </span>
          <IconsAboutLocation />
        </span>
        <span class="line"></span>
        <span class="location-address">
          {{ $t("about.location.english-address") }}
          <br />
          {{ $t("about.location.english-address_2") }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.location-container {
  padding: 0px 32px 80px;
  max-width: var(--max-width-content);
  align-items: center;
}

.location-title {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px 0px 30px;
}

.location-content {
  display: grid;
  gap: 15px;
}

.location {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 7px 0px;
}
.location-link {
  transition: color 0.2s ease;
}
.location-link:hover {
  color: var(--secondary-blue);
}

.title {
  font-size: 20px;
  font-weight: 400;
}

.line {
  display: block;
  width: 100%;
  height: 5px;
  background: var(--gradient-logo);
}

.location-address {
  font-size: 14px;
  font-weight: 400;
  padding: 6px 0px;
  transition: all 0.2s ease;
}

@media (min-width: 768px) {
  .location-content {
    grid-template-columns: 45% 45%;
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
  .location-container {
    padding: 0px 64px 80px;
  }
}

@media (min-width: 1200px) {
  .location-container {
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding-left: calc(var(--about-section-title-width) + 80px + 64px);
  }
}
</style>
