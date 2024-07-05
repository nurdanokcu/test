<script setup lang="ts">
import { type TypeServicePageSubSection } from '~/types/services';

defineProps({
  service: {
    type: Object as PropType<TypeServicePageSubSection>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  hoverColor: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  pageSlug: {
    type: String,
    required: true,
  },
});
const { locale } = useI18n();
</script>

<template>
  <div class="service">
    <div class="service-header">
      <div class="service-header-text">
        <p class="service-header-pre-title">
          <span>
            {{ title }}
          </span>
          <span> > </span>
        </p>
        <h2
          :style="{ color: color }"
          :class="[
            'service-header-title',
            { 'service-header-title--de': locale === 'de' },
          ]"
        >
          {{ service.name }}
        </h2>
      </div>
      <i
        :style="{ backgroundImage: `url(${service.icon})` }"
        class="service-header-icon"
      ></i>
    </div>
    <div class="service-content">
      <ServicesServiceItem
        v-for="item in service.subCategories"
        :key="item.slug"
        class="service-item"
        :color="color"
        :bg-color="bgColor"
        :hover-color="hoverColor"
        :page-slug="pageSlug"
        :service-slug="service.slug"
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped>
.service {
  padding: 40px 0;
}

.service-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.service-header-icon {
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-shrink: 0;
  width: 78px;
  height: 78px;
}

.service-header-pre-title {
  text-shadow: 0px 4px 16px #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  backdrop-filter: blur(10px);
  text-transform: capitalize;
}

.service-header-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
}

.service-header-title--de {
  word-wrap: break-word;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (min-width: 768px) {
  .service-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .service-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .service-header-text {
    width: calc(100% - 80px);
  }

  .service-header-title {
    font-size: 64px;
    font-weight: 700;
    line-height: 64px;
  }

  .service-item {
    width: calc(50% - 8px);
  }
}

@media (min-width: 1400px) {
  .service-item {
    width: calc(33% - 8px);
  }
}
@media (min-width: 1600px) {
  .service-item {
    width: calc(25% - 8px);
  }
}
</style>
