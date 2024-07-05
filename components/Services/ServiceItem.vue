<script setup lang="ts">
import { type TypeServiceItem } from '~/types/services';

const props = defineProps({
  item: {
    type: Object as PropType<TypeServiceItem>,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  hoverColor: {
    type: String,
    required: true,
  },
  pageSlug: {
    type: String,
    required: true,
  },
  serviceSlug: {
    type: String,
    required: true,
  },
});
const localePath = useLocalePath();
const { locale } = useI18n();

const styleObject = computed(() => {
  return {
    '--color': props.color,
    '--bg-color': props.bgColor,
    '--hover-color': props.hoverColor,
  };
});
const finalLink = computed(() => {
  if (locale.value === 'de') {
    return `/de/${props.pageSlug}/${props.serviceSlug}/${props.item.slug}`;
  } else {
    return `/${props.pageSlug}/${props.serviceSlug}/${props.item.slug}`;
  }
});
</script>

<template>
  <NuxtLink
    :to="`${localePath(finalLink)}#sub`"
    :style="styleObject"
    class="item"
  >
    <span class="item-content">
      <span class="item-title">
        {{ `/${item.name}` }}
      </span>
      <span v-if="item.subtitle" class="item-subtitle">
        {{ item.subtitle }}
      </span>
      <span class="item-texts">
        <span
          v-for="text in item.texts"
          :key="text"
          class="item-text"
        >
          {{ text }}
        </span>
      </span>
    </span>
    <IconsGeneralArrow class="item-icon" :color="color" />
  </NuxtLink>
</template>

<style scoped>
.item {
  display: flex;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: var(--bg-color);
  transition: background-color 0.3s;
}
.item:hover {
  background-color: var(--hover-color);
}
.item-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.item-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: calc(100% - 30px);
}
.item-title {
  color: var(--color);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.item-subtitle {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
}
.item-texts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
