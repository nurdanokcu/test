<script setup lang="ts">
type Directions = 'left' | 'right' | 'up' | 'down';

const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'white',
  },
  direction: {
    type: String as PropType<Directions>,
    required: false,
    default: 'right',
  },
  width: {
    type: Number,
    required: false,
    default: 31,
  },
  height: {
    type: Number,
    required: false,
    default: 34,
  },
  isGradient: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const rotate = computed(() => {
  switch (props.direction) {
    case 'left':
      return 'rotate(180deg)';
    case 'up':
      return 'rotate(-90deg)';
    case 'down':
      return 'rotate(90deg)';
    default:
      return 'rotate(0deg)';
  }
});
</script>

<template>
  <svg
    :style="{ transform: rotate }"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 27 26"
    fill="none"
  >
    <g clip-path="url(#clip0_5384_5670)">
      <path
        d="M7.52344 21.5445L9.41144 23.4325L19.9714 12.8725L9.41144 2.3125L7.52344 4.2005L16.1954 12.8725L7.52344 21.5445Z"
        :fill="isGradient ? 'url(#paint0_linear_59_24)' : color"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_59_24"
        x1="7"
        y1="2"
        x2="19"
        y2="23"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <clipPath id="clip0_5384_5670">
        <rect
          width="25.6"
          height="25.6"
          fill="white"
          transform="translate(0.601562 0.0742188)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
svg {
  transition: all 0.3s linear;
}
</style>
