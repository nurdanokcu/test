<template>
  <div class="we-can-do-container">
    <div class="we-can-do-content">
      <p class="we-can-do-heading">
        {{ $t("about.whatwedo.title") }}
      </p>
      <p class="we-can-do-text">
        {{ $t("about.whatwedo.text") }}
      </p>
      <div class="services-we-do">
        <NuxtLink
          :title="$t('about.whatwedo.btnText')"
          class="our-services-btn"
          :to="localePath(`/${$t('pagePath.services')}`)"
        >
          <span class="our-services">
            <span>{{ $t("about.whatwedo.btnText") }}</span>
            <IconsAboutConstructionGradient />
          </span>
        </NuxtLink>
        <div class="services-grid">
          <CommonServicesGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
.we-can-do-container {
  background: var(--gradient-logo);
}
.we-can-do-content {
  padding: 48px 24px;
  max-width: 600px;
  margin: auto;
}
.we-can-do-heading {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  color: var(--primary-white);
  margin: 0px 0px 10px 0px;
}
.we-can-do-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-white);
  margin: 0px 0px 20px 0px;
}
.our-services-btn {
  display: block;
  background: var(--gradient-logo);
  border-radius: 0px 2px 16px 0px;
  padding: 3px;
}
.our-services {
  background-color: var(--primary-white);
  border-radius: 0px 2px 16px 0px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
}

.our-services span {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.services-grid {
  margin: 40px 0px;
}
.service::after {
  content: "";
  position: absolute;
  top: 115%;
  width: 100%;
  height: 4px;
  background: var(--gradient-logo);
}
@media screen and (min-width: 768px) {
  .we-can-do-content {
    padding: 48px 40px;
    max-width: fit-content;
  }
  .we-can-do-heading {
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
  }
  .our-services-btn {
    width: 314px;
    height: fit-content;
  }
  .services {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
  }
}

@media screen and (min-width: 1200px) {
  .we-can-do-content {
    padding: 48px 80px;
    max-width: 1300px;
    margin: 0 auto;
  }
  .we-can-do-heading {
    font-size: 40px;
  }
  .we-can-do-text {
    width: 666px;
    margin-bottom: 48px;
  }
  .services-we-do {
    display: flex;
    justify-content: space-between;
    gap: 100px;
  }
  .services-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0px;
  }
  .our-services-btn {
    align-self: flex-end;
  }
}
@media screen and (min-width: 1500px) {
  .we-can-do-heading {
    font-size: 64px;
  }
  .services-we-do {
    gap: 180px;
  }
}
</style>
