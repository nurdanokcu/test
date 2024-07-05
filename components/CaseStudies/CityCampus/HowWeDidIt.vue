<template>
  <div class="citycampus-container">
    <div :id="idForHidden" class="citycampus-hidden"></div>
    <CommonIntro
      :title="$t('case_studies.sektor.how-we-did-it.title')"
      class="did-it-heading"
    />
    <div class="citycampus-conten">
      <div class="citycampus-content item">
        <p class="title">
          {{ $t("case_studies.regio.how-we-did-it.text-title") }}
        </p>
        <p class="text-title">
          {{ $t("case_studies.citycampus.how-we-did-it.text") }}
        </p>
        <CommonCircleArrowText
          :text="$t('case_studies.citycampus.how-we-did-it.text_1')"
        />
        <CommonCircleArrowText
          :text="$t('case_studies.citycampus.how-we-did-it.text_2')"
        />
        <CommonCircleArrowText
          :text="$t('case_studies.citycampus.how-we-did-it.text_3')"
        />
        <CommonCircleArrowText
          :text="$t('case_studies.citycampus.how-we-did-it.text_4')"
        />
      </div>
      <div class="img-content item">
        <img :src="citycampusimage" alt="laptop image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { citycampusimage } from '~/assets/images/caseStudies_images/cityCampus_images';

defineProps({
  idForHidden: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.citycampus-container {
  padding: 30px 32px;
  max-width: var(--max-width-content);
  margin: auto;
  position: relative;
}

.citycampus-hidden {
  position: absolute;
  top: -100px;
}
.citycampus-content {
  background-color: var(--primary-magenta);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  margin: 20px 0px;
}

.title {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 10px 0px;
}

.text-title {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px 0px 25px;
}

.did-it-heading {
  overflow-wrap: break-word;
}
.img-content {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  max-height: 400px;
}

.img-content img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 15px;
  object-position: left;
}

@media (min-width: 1024px) {
  .citycampus-container {
    padding: 30px 64px 100px;
  }
}

@media (min-width: 1200px) {
  .citycampus-container {
    display: flex;
    gap: 48px;
  }

  .did-it-heading {
    overflow-wrap: break-word;
    width: 25%;
  }
  .citycampus-conten {
    width: 70%;
  }
}

@media (min-width: 1500px) {
  .citycampus-content {
    margin: 0px 0px;
  }

  .citycampus-conten {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
  }
  .citycampus-content {
    width: 60%;
  }
  .img-content {
    width: 40%;
  }
  .img-content {
    max-height: unset;
  }
  .img-content img {
    max-height: unset;
  }
}
</style>
