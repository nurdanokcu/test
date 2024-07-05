<script setup lang="ts">
type Directions = 'left' | 'right' | 'up' | 'down';

const props = defineProps({
  isGradient: {
    type: Boolean,
    required: false,
    default: false,
  },
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
  id: {
    type: String,
    required: false,
    default: '',
  },
});
const rotate = computed(() => {
  switch (props.direction) {
    case 'right':
      return 'rotate(180deg)';
    case 'down':
      return 'rotate(270deg)';
    case 'up':
      return 'rotate(90deg)';
    default:
      return 'rotate(0deg)';
  }
});
</script>

<template>
  <svg
    v-if="isGradient"
    :style="{ transform: rotate }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_47_51)">
      <mask
        id="mask0_47_51"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_47_51)">
        <path
          d="M20 11H7.82993L13.42 5.40998L11.9999 3.99998L3.99994 12L11.9999 20L13.4099 18.59L7.82993 13H20V11Z"
          :fill="`url(#paint0_linear_2349_23743${id})`"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        :id="`paint0_linear_2349_23743${id}`"
        x1="3.62947"
        y1="5.05901"
        x2="23.1037"
        y2="12.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-else
    :style="{ transform: rotate }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_2349_22789)">
      <path
        d="M12 20L13.41 18.59L7.83 13H20V11H7.83L13.41 5.41L12 4L4 12L12 20Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_2349_22789">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
