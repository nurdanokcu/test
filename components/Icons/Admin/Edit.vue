<script setup>
defineProps({
  color: {
    type: String,
    default: 'black',
  },
  isFilled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <svg
    v-if="isFilled"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_123_18)">
      <path
        d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM21.41 6.34L17.66 2.59L15.13 5.13L18.88 8.88L21.41 6.34V6.34Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_123_18">
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
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <g clip-path="url(#clip0_2907_31586)">
      <path
        d="M14.06 9.52L14.98 10.44L5.92 19.5H5V18.58L14.06 9.52ZM17.66 3.5C17.41 3.5 17.15 3.6 16.96 3.79L15.13 5.62L18.88 9.37L20.71 7.54C21.1 7.15 21.1 6.52 20.71 6.13L18.37 3.79C18.17 3.59 17.92 3.5 17.66 3.5ZM14.06 6.69L3 17.75V21.5H6.75L17.81 10.44L14.06 6.69Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_2907_31586">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
