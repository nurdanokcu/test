<script setup>
defineProps({
  color: {
    type: String,
    default: '',
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
    <g clip-path="url(#clip0_6190_28408)">
      <path
        d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
        :fill="color ? color : 'url(#paint0_linear_1295_307)'"
      />
    </g>
    <defs>
      <clipPath id="clip0_6190_28408">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
      <linearGradient
        id="paint0_linear_1295_307"
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
</template>
