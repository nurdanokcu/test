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
  isDisabled: {
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
const fontStyles = computed(() => {
  return {
    fontSize: props.fontOptions.size,
    fontWeight: props.fontOptions.weight,
    fontStyle: props.fontOptions.style,
    lineHeight: props.fontOptions.lineHeight,
    textTransform: props.fontOptions.textTransform,
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
    :class="[
      'link',
      {
        'link--loading': isLoading,
        'link--disabled': isDisabled,
      },
    ]"
  >
    <span :style="{ padding: padding }" class="link-content">
      <span :style="fontStyles" class="link-text">{{ text }} </span>
      <span class="icon-gradient">
        <slot name="icon-gradient"></slot>
      </span>
      <span class="icon">
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
    :class="[
      'link',
      {
        'link--loading': isLoading,
        'link--disabled': isDisabled,
      },
    ]"
    @click="$emit('onClick')"
  >
    <span :style="{ padding: padding }" class="link-content">
      <span :style="fontStyles" class="link-text">{{ text }} </span>
      <span class="icon-gradient">
        <slot name="icon-gradient"></slot>
      </span>
      <span class="icon">
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
  box-sizing: border-box;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}

.link--loading {
  opacity: 0.3;
  cursor: not-allowed;
}
.link--disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.link-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  height: 100%;
  background: #fff;
  border-radius: var(--border-radius);
  transition: all 0.5s ease;
}
.icon {
  display: none;
}

.link-text {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.link:hover .link-content {
  background: var(--primary-white-hover);
}

.link:active .link-content {
  background: var(--gradient-logo);
}

.link:active .link-text {
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.link:active .icon-gradient {
  display: none;
}
.link:active .icon {
  display: block;
}
</style>
