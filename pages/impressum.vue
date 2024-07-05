<template>
  <div class="impressum">
    <div class="impressum-hidden"></div>
    <div class="impressum-line-wrapper">
      <div class="impressum-line"></div>
    </div>
    <div class="impressum-body">
      <h1 class="impressum-header">
        Impressum
      </h1>
      <div class="impressum-content">
        <div class="impressum-contact">
          <a target="_blank" href="https://goo.gl/maps/7iattr6gLkhtyXsa6">
            <span class="impressum-bold">Propaganda Solutions GmbH</span>
            <br />
            Pappelallee 78/79
            <br />
            10437, Berlin
          </a>
          <a target="_blank" href="tel:+493092103672">
            <span class="impressum-bold">Tel:</span>
            +49 (0) 30 92103672
          </a>
          <a href="mailto:info@propaganda-solutions.com">
            info@propaganda-solutions.com
          </a>
        </div>
        <div class="impressum-ownership">
          <p>
            <span class="impressum-bold">
              {{ $t("impressum.director") }}
            </span>
            : Thorsten Nolte
          </p>
          <p>
            <span class="impressum-bold">
              {{ $t("impressum.registered") }}
            </span>
            : Berlin Charlottenburg Local Court - HRB 214869 B -
          </p>
        </div>
        <p>
          {{ $t("impressum.disclaimer") }}
        </p>
        <div class="impressum-external">
          <p>
            {{ $t("impressum.external_website_1") }}
          </p>
          <p>
            {{ $t("impressum.external_website_2") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impressum {
  position: relative;
}
.impressum-hidden {
  position: absolute;
  top: -100px;
}
.impressum-line-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 48px 0;
}

.impressum-line {
  width: 100%;
  height: 4px;
  background: var(--gradient-logo);
}

.impressum-body {
  display: flex;
  flex-direction: column;
  padding: 0 24px 80px 24px;
}

.impressum-header {
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  margin-bottom: 60px;
}

.impressum-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: #1f1f1f;
  font-size: 14px;
}

.impressum-bold {
  font-weight: 700;
}

.impressum-contact {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.impressum-external {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-style: italic;
  font-weight: 300;
}

@media screen and (min-width: 768px) {
  .impressum-body {
    flex-direction: row;
    gap: 60px;
    padding: 0 32px 80px 16px;
  }
  .impressum-header {
    font-size: 64px;
    line-height: 64px;
  }
}

@media screen and (min-width: 1024px) {
  .impressum-body {
    padding: 0 64px 80px 16px;
    max-width: 1536px;
    margin: 0 auto;
  }
}
</style>
