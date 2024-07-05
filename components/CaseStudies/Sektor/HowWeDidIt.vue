<script setup>
import {
  imageWebsite,
  imageWebsite2,
} from '~/assets/images/caseStudies_images/sektor_images';
import { titleEn, titleDe } from '~/data/sektorDidItTag.js';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
const { locale } = useI18n();
const titles = computed(() => {
  return locale.value === 'en' ? titleEn : titleDe;
});
</script>

<template>
  <div class="solution">
    <div :id="idForHidden" class="how-we-did-it-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.regio.solve-it.title')"
      class="solution-header"
    />
    <div class="solution-body">
      <div class="content">
        <div class="content-title-boxes">
          <p
            v-for="(title, index) in titles"
            :key="index"
            class="content-title"
          >
            {{ title.title }}
          </p>
        </div>
        <div class="content-boxes">
          <div class="content-box-first">
            <p class="content-box content-box--orange content-box--research">
              {{ $t("case_studies.sektor.how-we-did-it.approach-text-1") }}
            </p>
          </div>
          <div class="content-box-second">
            <div class="content-box-second-part">
              <p class="content-box content-box--magenta content-box--concepts">
                {{ $t("case_studies.sektor.how-we-did-it.approach-text-2") }}
              </p>
              <p class="content-box content-box--magenta content-box--design">
                {{ $t("case_studies.sektor.how-we-did-it.approach-text-3") }}
              </p>
            </div>
            <div class="content-box-second-part">
              <p class="content-box content-box--magenta content-box--ui">
                {{ $t("case_studies.sektor.how-we-did-it.approach-text-4") }}
              </p>
              <p class="content-box content-box--magenta content-box--mobile">
                {{ $t("case_studies.sektor.how-we-did-it.approach-text-5") }}
              </p>
            </div>
          </div>
          <div class="content-box-third">
            <p class="content-box content-box--orange content-box--data">
              {{ $t("case_studies.sektor.how-we-did-it.approach-text-6") }}
            </p>
            <p class="content-box content-box--orange content-box--wordpress">
              {{ $t("case_studies.sektor.how-we-did-it.approach-text-7") }}
            </p>
          </div>
        </div>
      </div>
      <div class="solution-content">
        <p class="solution-text">
          {{ $t("case_studies.sektor.how-we-did-it.text") }}
        </p>
        <div class="solution-images">
          <div class="solution-images-top">
            <div class="solution-one">
              <p class="solution-text--small">
                <span class="solution-icons">
                  <IconsCaseStudiesLineDesktopTop
                    class="curved-line--desktop"
                  />
                  <IconsCaseStudiesLineTabletTop class="curved-line--tablet" />
                  <IconsCaseStudiesSektorPurpleRing class="solution-ring" />
                </span>
                <span>
                  {{ $t("case_studies.sektor.how-we-did-it.text_1") }}
                  <strong>{{
                    $t("case_studies.sektor.how-we-did-it.text_2")
                  }}</strong>
                  {{ $t("case_studies.sektor.how-we-did-it.text_3") }}
                </span>
              </p>
              <div class="solution-image-wrapper">
                <img
                  class="solution-image"
                  :src="imageWebsite"
                  alt="sektor"
                />
              </div>
            </div>
            <div class="solution-two">
              <p class="solution-text--small">
                <span class="solution-icons">
                  <IconsCaseStudiesSektorPurpleRing class="solution-ring" />
                  <IconsCaseStudiesLineDesktopBottom
                    class="curved-line--desktop-bottom"
                  />
                  <IconsCaseStudiesLineTabletBottom
                    class="curved-line--tablet-bottom"
                  />
                </span>
                {{ $t("case_studies.sektor.how-we-did-it.text_4") }}
              </p>
              <div class="solution-image-wrapper solution-image-wrapper--two">
                <img
                  class="solution-image"
                  :src="imageWebsite2"
                  alt="sektor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.solution {
  padding: 30px 24px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}
.how-we-did-it-hidden {
  position: absolute;
  top: -100px;
}
.solution-header {
  margin-bottom: 54px;
}
.solution-body {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}
.content {
  display: flex;
  width: 100%;
  padding: 24px 15px;
  justify-content: space-between;
  gap: 16px;
  border-radius: 12px;
  color: white;
  background: linear-gradient(109deg, #740f49 4.62%, #ff5900 99.69%);
}
.content-title-boxes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  width: 40%;
}
.content-boxes {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;
  background: url("assets/images/caseStudies_images/sektor_images/mobile_lines.png");
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 250px;
}
.content-box {
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  width: fit-content;
}
.content-box--orange {
  background: var(--primary-orange);
}
.content-box--magenta {
  background: var(--primary-magenta);
}
.content-box-second,
.content-box-third,
.content-box-second-part {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.content-box--design,
.content-box--mobile {
  margin: auto;
}
.content-box--ui,
.content-box--wordpress {
  margin-left: auto;
}
.text-container {
  margin-top: 70px;
}

.solution-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
.solution-text {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
}
.solution-images,
.solution-images-top {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.solution-one,
.solution-two {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.solution-text--small {
  display: flex;
  gap: 16px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
}
.solution-ring {
  flex-shrink: 0;
}
.solution-icons {
  height: fit-content;
  position: relative;
}
.curved-line--desktop,
.curved-line--tablet,
.curved-line--desktop-bottom,
.curved-line--tablet-bottom {
  display: none;
}
.solution-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 2.326px 8.143px 0px rgba(0, 0, 0, 0.25);
}
.solution-image {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
}
.solution-image-wrapper--two {
  box-shadow: 74px 74px 140px 0px rgba(116, 15, 73, 0.2);
}
@media (min-width: 768px) {
  .solution {
    padding: 30px 32px;
  }
  .solution-header {
    margin-bottom: 80px;
  }
  .content {
    flex-direction: column;
  }
  .content-title-boxes {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    gap: 24px;
    border-bottom: 1px solid white;
    margin-bottom: 24px;
  }
  .content-boxes {
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    background: url("assets/images/caseStudies_images/sektor_images/desktop_lines.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    max-width: unset;
  }
  .content-box-second {
    width: 100%;
    max-width: 350px;
  }
  .content-box-third {
    width: 100%;
    max-width: 180px;
  }
  .content-box-first {
    display: flex;
    align-items: center;
  }
  .content-box-second-part {
    flex-direction: row;
  }
  .content-box-second-part:last-child {
    justify-content: flex-end;
  }
  .content-box--design,
  .content-box--mobile,
  .content-box--ui,
  .content-box--wordpress {
    margin: 0;
  }
  .content-box--data {
    margin-left: auto;
  }
  .solution-image-wrapper {
    margin: 0 auto;
  }
  .curved-line--tablet {
    display: block;
    position: absolute;
    top: 8px;
    left: -2px;
    transform: translateX(-100%);
    flex-shrink: 0;
    z-index: -1;
  }
  .curved-line--tablet-bottom {
    display: block;
    position: absolute;
    bottom: 8px;
    left: 0;
    transform: translateX(-100%);
    flex-shrink: 0;
    z-index: -1;
  }
  .solution-text--small {
    padding-left: 200px;
  }
}
@media (min-width: 768px) {
  .solution {
    padding: 30px 64px;
  }
}
@media (min-width: 1200px) {
  .solution {
    display: flex;
    gap: 48px;
  }
  .solution-body {
    width: 70%;
  }
  .solution-header {
    width: 25%;
  }
  .content-title {
    color: var(--White, #fff);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .content-box {
    font-size: 20px;
    font-weight: 400;
  }
  .content-boxes,
  .content-box-second,
  .content-box-third,
  .content-box-second-part {
    gap: 32px;
  }
  .content-box-second {
    width: 100%;
    max-width: 420px;
  }
  .content-box-third {
    width: 100%;
    max-width: 220px;
  }
  .solution-content {
    padding: 0;
  }
}
@media (min-width: 1500px) {
  .solution-images {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .solution-images-top,
  .solution-images-bottom {
    flex-direction: row;
  }
  .solution-two {
    flex-direction: column-reverse;
  }
  .solution-one {
    width: 60%;
  }
  .solution-two {
    width: 40%;
    padding-bottom: 64px;
  }
  .solution-text {
    width: 60%;
  }
  .solution-text--small {
    padding-left: 0;
  }
  .curved-line--tablet,
  .curved-line--tablet-bottom {
    display: none;
  }
  .curved-line--desktop {
    display: block;
    position: absolute;
    top: 8px;
    left: 24px;
    transform: translateX(-50%);
    flex-shrink: 0;
    z-index: -1;
  }
  .curved-line--desktop-bottom {
    display: block;
    position: absolute;
    top: 0;
    left: 24px;
    transform: translateX(-100%);
    flex-shrink: 0;
    z-index: -1;
  }
  .solution-images-bottom {
    border-radius: 16px;
  }
}
</style>
