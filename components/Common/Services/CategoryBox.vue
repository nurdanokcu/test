<script setup>
const props = defineProps({
  categoryText: {
    type: String,
    required: true,
  },
  isSmall: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  path: {
    type: String,
    required: true,
  },
});
const { locale } = useI18n();
defineEmits(['onClick']);
const isChanging = ref(false);

watch(() => props.isSmall, () => {
  isChanging.value = true;
  setTimeout(() => {
    isChanging.value = false;
  }, 200);
});
</script>

<template>
  <NuxtLink
    type="button"
    :title="categoryText"
    :aria-label="categoryText"
    :class="[
      'category',
      {
        'category--small': isSmall,
        'category--active': isActive,
        'category--loading': isLoading,
        'category--changing': isChanging,
      },
    ]"
    :to="path"
    @click="$emit('onClick')"
  >
    <span class="category-content">
      <!-- <span class="category-icon-wrapper">
        <IconsLoading
          v-if="isLoading"
          :width="'24'"
          :height="'24'"
        />
        <IconsServiceSearch
          v-else
          :is-gradient="isActive ? false : true"
          :color="'white'"
        />
      </span> -->
      <span
        :class="[
          'category-text',
          {
            'category-text--de': locale === 'de',
          },
        ]"
      >
        {{ categoryText }}
      </span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.category {
  box-sizing: border-box;
  display: flex;
  width: 208px;
  height: 140px;
  gap: 16px;
  padding: 1px;
  border-radius: 16px;
  background: var(--gradient-logo);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
}
.category-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  background-color: var(--primary-white);
  flex-grow: 1;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
}
.category-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}
.category--small {
  width: fit-content;
  height: 56px;
}
.category--small .category-content {
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
}
.category--active .category-content {
  background: var(--gradient-logo);
}
.category--active .category-text {
  background: var(--primary-white);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.category-text {
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: left;
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
.category-text--de {
  word-break: break-word;
}
.category--small .category-text {
  white-space: nowrap;
}

.category:hover .category-content {
  background: var(--primary-white-hover);
}
.category--active:hover .category-content {
  background: var(--gradient-logo);
}
.category--loading {
  opacity: 0.5;
}
</style>
