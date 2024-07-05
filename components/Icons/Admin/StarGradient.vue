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
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z"
      fill="url(#paint0_linear_5747_14720)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5747_14720"
        x1="-0.46309"
        y1="1.75759"
        x2="23.526"
        y2="11.7951"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M9.48326 16.0819C9.80106 15.8901 10.1989 15.8901 10.5167 16.0819L14.151 18.2754C14.9083 18.7325 15.8425 18.0535 15.6416 17.192L14.6771 13.0578C14.5928 12.6963 14.7156 12.3178 14.9962 12.0748L18.2086 9.29189C18.8772 8.71268 18.5198 7.61442 17.6384 7.53964L13.4109 7.18098C13.0413 7.14962 12.7194 6.91629 12.5747 6.57479L10.9207 2.67237C10.5761 1.85934 9.42387 1.85934 9.07928 2.67237L7.42532 6.57479C7.28058 6.91629 6.95871 7.14962 6.58914 7.18098L2.36163 7.53964C1.4802 7.61442 1.1228 8.71268 1.79139 9.29189L5.00379 12.0748C5.28436 12.3178 5.40721 12.6963 5.32287 13.0578L4.35841 17.192C4.15745 18.0535 5.09168 18.7325 5.849 18.2754L9.48326 16.0819Z"
      stroke="url(#paint0_linear_5747_14730)"
      stroke-width="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5747_14730"
        x1="-0.46309"
        y1="1.75759"
        x2="23.526"
        y2="11.7951"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
</template>
