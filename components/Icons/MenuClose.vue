<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: 'black',
  },
  width: {
    type: String,
    required: false,
    default: '40',
  },
  height: {
    type: String,
    required: false,
    default: '40',
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_235_636)">
      <path
        d="M31.6666 10.6833L29.3166 8.33325L20 17.6499L10.6833 8.33325L8.33331 10.6833L17.65 19.9999L8.33331 29.3166L10.6833 31.6666L20 22.3499L29.3166 31.6666L31.6666 29.3166L22.35 19.9999L31.6666 10.6833Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_235_636">
        <rect
          width="40"
          height="40"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
