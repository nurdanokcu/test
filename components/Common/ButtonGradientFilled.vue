<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
  isLink: {
    type: Boolean,
    required: false,
    default: false,
  },
  path: {
    type: String,
    required: false,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  borderRadius: {
    type: String,
    required: false,
    default: '0px',
  },
  padding: {
    type: String,
    required: false,
    default: '4px 16px',
  },
  fontOptions: {
    type: Object,
    required: false,
    default: () => ({
      size: '20px',
      weight: '700',
      style: 'normal',
      lineHeight: 'normal',
      textTransform: 'none',
    }),
  },
});
defineEmits(['onClick']);
const styleObject = computed(() => {
  return {
    '--border-radius': props.borderRadius,
  };
});
</script>

<template>
  <NuxtLink
    v-if="isLink"
    :aria-label="text"
    :disabled="isDisabled"
    :to="path"
    :style="styleObject"
    :class="['link', { 'link--loading': isLoading }]"
  >
    <span :style="{ padding: padding }" class="link-content">
      <span :style="fontOptions" class="link-text">{{ text }} </span>
      <span class="button-icon--gradient">
        <slot name="icon-gradient"></slot>
      </span>
      <span class="button-icon">
        <slot name="icon"></slot>
      </span>
    </span>
  </NuxtLink>
  <button
    v-else
    type="button"
    :title="text"
    :style="styleObject"
    :aria-label="text"
    :disabled="isDisabled"
    :class="['link', { 'link--loading': isLoading }]"
    @click="$emit('onClick')"
  >
    <span :style="{ padding: padding }" class="link-content">
      <span :style="fontOptions" class="link-text">{{ text }} </span>
      <span class="button-icon--gradient">
        <slot name="icon-gradient"></slot>
      </span>
      <span class="button-icon">
        <slot name="icon"></slot>
      </span>
    </span>
  </button>
</template>

<style scoped>
.link {
  width: 100%;
  display: block;
  background: var(--gradient-logo);
  border-radius: var(--border-radius);
  padding: 3px;
  transition: all 0.5s ease;
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}

.link--loading {
  opacity: 0.5;
  cursor: not-allowed;
}
.link:hover,
.link:hover .link-content {
  background: var(--gradient-logo-hover);
}

.link-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
}

.link-text {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.link:active {
  background: var(--gradient-logo);
}
.link:active .link-content {
  background: #fff;
}

.link:active .link-text {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button-icon,
.button-icon--gradient {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}
.button-icon--gradient {
  display: none;
}

.link:active .button-icon {
  display: none;
}
.link:active .button-icon--gradient {
  display: block;
}
</style>
