<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: false,
    default: 'black',
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
    <g clip-path="url(#clip0_5499_24228)">
      <path
        d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_5499_24228">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
