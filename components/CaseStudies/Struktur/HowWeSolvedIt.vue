<script setup>
import {
  image2,
  image3,
  image4,
  image5,
} from '~/assets/images/caseStudies_images/struktur_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="solution">
    <div :id="idForHidden" class="solution-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.regio.solve-it.title')"
      class="solution-header"
    />
    <div class="solution-content">
      <p class="solution-text">
        {{ $t("case_studies.struktur.solve-it.text") }}
      </p>
      <div class="solution-images">
        <div class="solution-images-top">
          <div class="solution-one">
            <p class="solution-text--small">
              <span class="solution-icons">
                <IconsCaseStudiesLineDesktopTop class="curved-line--desktop" />
                <IconsCaseStudiesLineTabletTop class="curved-line--tablet" />
                <IconsCaseStudiesSektorPurpleRing class="solution-ring" />
              </span>
              {{ $t("case_studies.struktur.solve-it.text_1") }}
            </p>
            <div class="solution-image-wrapper">
              <img
                class="solution-image"
                :src="image2"
                alt="struktur"
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
              {{ $t("case_studies.struktur.solve-it.text_2") }}
            </p>
            <div class="solution-image-wrapper solution-image-wrapper--two">
              <img
                class="solution-image"
                :src="image3"
                alt="struktur"
              />
            </div>
          </div>
        </div>
        <div class="solution-images-bottom">
          <div class="solution-image-wrapper">
            <img
              class="solution-image"
              :src="image4"
              alt="struktur"
            />
          </div>
          <div class="solution-image-wrapper">
            <img
              class="solution-image"
              :src="image5"
              alt="struktur"
            />
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
.solution-hidden {
  position: absolute;
  top: -100px;
}
.solution-header {
  margin-bottom: 54px;
}
.solution-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.solution-text {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
}
.solution-images,
.solution-images-top,
.solution-images-bottom {
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
  .solution-header {
    width: 25%;
  }
  .solution-content {
    padding: 0;
    width: 70%;
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
  .solution-one,
  .solution-two {
    width: 50%;
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
