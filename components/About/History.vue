<template>
  <section class="history">
    <div :id="$t('pagePath.aboutSection.history')" class="history-hidden"></div>
    <div class="history-part history-part--before">
      <CommonIntro class="history-title" :title="$t('about.history.title')" />
      <div class="history-texts history-texts--before">
        <div class="history-year before">
          <div class="history-year-line">
            <p class="history-year-text">
              2018
            </p>
          </div>
        </div>
        <div class="history-text">
          <p>{{ $t("about.history.historyText_1") }}</p>
          <p>{{ $t("about.history.historyText_2") }}</p>
        </div>
      </div>
    </div>

    <div class="history-texts">
      <div class="history-text">
        <p>{{ $t("about.history.historyText_3") }}</p>
        <p>{{ $t("about.history.historyText_4") }}</p>
        <p>{{ $t("about.history.historyText_5") }}</p>
        <p>{{ $t("about.history.historyText_6") }}</p>
      </div>
      <div class="history-year after">
        <div class="history-year-line">
          <p class="history-year-text">
            {{ $t("about.history.now") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history {
  padding: 80px 24px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.history-hidden {
  position: absolute;
  top: -120px;
}
.history-title {
  margin-bottom: 96px;
}
.history-texts {
  display: flex;
  gap: 24px;
}
.history-year {
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
}
.history-year-line {
  position: relative;
  max-height: 172px;
  width: 1px;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  height: 100%;
}

.history-year-text {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.before .history-year-text {
  position: absolute;
  top: -32px;
  left: 0;
}
.after .history-year-text {
  position: absolute;
  bottom: -32px;
  right: 0;
}
.history-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media (min-width: 768px) {
  .history {
    padding: 80px 32px;
    flex-direction: row;
  }
}
@media (min-width: 1024px) {
  .history {
    padding: 80px 64px;
    flex-direction: row;
  }
  .history-year-line {
    max-height: initial;
  }
}
@media (min-width: 1200px) {
  .history {
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding-left: calc(var(--about-section-title-width) + 80px + 64px);
  }
}
</style>
