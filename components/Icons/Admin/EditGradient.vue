<script setup lang="ts">
defineProps({
  linearId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M14.06 9.52L14.98 10.44L5.92 19.5H5V18.58L14.06 9.52ZM17.66 3.5C17.41 3.5 17.15 3.6 16.96 3.79L15.13 5.62L18.88 9.37L20.71 7.54C21.1 7.15 21.1 6.52 20.71 6.13L18.37 3.79C18.17 3.59 17.92 3.5 17.66 3.5ZM14.06 6.69L3 17.75V21.5H6.75L17.81 10.44L14.06 6.69Z"
      :fill="`url(#paint_linear_edit_${linearId})`"
    />
    <defs>
      <linearGradient
        :id="`paint_linear_edit_${linearId}`"
        x1="12.0012"
        y1="3.5"
        x2="12.0012"
        y2="21.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
</template>
