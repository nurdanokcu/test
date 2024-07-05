<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: '#000000',
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
    v-if="isGradient"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_5272_93)">
      <path
        d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
        fill="url(#paint0_linear_5272_93)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_5272_93"
        x1="4.67584"
        y1="5.92664"
        x2="21.7157"
        y2="12.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <clipPath id="clip0_5272_93">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_5224_143)">
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" :fill="color" />
    </g>
    <defs>
      <clipPath id="clip0_5224_143">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
