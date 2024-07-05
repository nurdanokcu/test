<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_5615_47)">
      <path
        d="M19 12V19H5V12H3V21H21V12H19ZM13 12.67L15.59 10.09L17 11.5L12 16.5L7 11.5L8.41 10.09L11 12.67V3H13V12.67Z"
        :fill="color ? color : 'url(#paint0_linear_5615_47)'"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_5615_47"
        x1="2.58322"
        y1="4.1914"
        x2="24.4917"
        y2="12.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <clipPath id="clip0_5615_47">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
