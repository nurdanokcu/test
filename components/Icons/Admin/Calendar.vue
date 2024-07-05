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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_119_22)">
      <mask
        id="mask0_119_22"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_119_22)">
        <path
          d="M20 3H19V2C19 1.45 18.55 1 18 1C17.45 1 17 1.45 17 2V3H7V2C7 1.45 6.55 1 6 1C5.45 1 5 1.45 5 2V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM19 21H5C4.45 21 4 20.55 4 20V8H20V20C20 20.55 19.55 21 19 21Z"
          :fill="color ? color : 'url(#paint0_linear_119_22)'"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_119_22"
        x1="2.5"
        y1="2.31014e-07"
        x2="22.5"
        y2="22.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <clipPath id="clip0_119_22">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
