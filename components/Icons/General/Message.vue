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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0H0.00999999L0 20L4 16H20V0ZM7 9H5V7H7V9ZM11 9H9V7H11V9ZM15 9H13V7H15V9Z"
      fill="url(#paint0_linear_1492_340)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1492_340"
        x1="-0.46309"
        y1="1.32378"
        x2="23.8796"
        y2="11"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-else
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0.492188H0.00999999L0 20.4922L4 16.4922H20V0.492188ZM7 9.49219H5V7.49219H7V9.49219ZM11 9.49219H9V7.49219H11V9.49219ZM15 9.49219H13V7.49219H15V9.49219Z"
      :fill="color"
    />
  </svg>
</template>
