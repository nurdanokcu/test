<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: '#323232',
  },
});
</script>

<template>
  <svg
    width="41"
    height="40"
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_516_307)">
      <path
        d="M5.5 30H35.5V26.6667H5.5V30ZM5.5 21.6667H35.5V18.3333H5.5V21.6667ZM5.5 10V13.3333H35.5V10H5.5Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_516_307">
        <rect
          width="40"
          height="40"
          fill="white"
          transform="translate(0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
