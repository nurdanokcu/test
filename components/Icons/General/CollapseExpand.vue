<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: 'black',
  },
  isRotated: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: String,
    required: false,
    default: '88',
  },
  isGradient: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <svg
    v-if="!isGradient"
    :class="['arrow', { 'arrow-rotated': isRotated }]"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 88 89"
    fill="none"
  >
    <g clip-path="url(#clip0_4518_15870)">
      <path
        d="M25.6667 37.1666L44 55.5L62.3333 37.1666H25.6667Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_4518_15870">
        <rect
          width="88"
          height="88"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
  <svg
    v-else
    :class="['arrow', { 'arrow-rotated': isRotated }]"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_2924_32725)">
      <path d="M7 10L12 15L17 10H7Z" fill="url(#paint0_linear_2924_32725)" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2924_32725"
        x1="6.76846"
        y1="10.3309"
        x2="15.4047"
        y2="17.1967"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <clipPath id="clip0_2924_32725">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
.arrow {
  transition: transform 0.3s ease-in-out;
}
.arrow-rotated {
  transform: rotate(180deg);
}
</style>
