<script setup>
defineProps({
  color: {
    type: String,
    default: 'black',
  },
  isGradient: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <svg
    v-if="isGradient"
    width="14"
    height="19"
    viewBox="0 0 14 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.5H2C0.9 0.5 0 1.4 0 2.5V18.5L7 15.5L14 18.5V2.5C14 1.4 13.1 0.5 12 0.5Z"
      fill="url(#paint0_linear_1492_304)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1492_304"
        x1="-0.324163"
        y1="1.6914"
        x2="17.6866"
        y2="7.25972"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-else
    width="14"
    height="19"
    viewBox="0 0 14 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.492188H2C0.9 0.492188 0 1.39219 0 2.49219V18.4922L7 15.4922L14 18.4922V2.49219C14 1.39219 13.1 0.492188 12 0.492188Z"
      :fill="color"
    />
  </svg>
</template>
