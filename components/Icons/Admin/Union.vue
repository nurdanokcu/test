<script setup>
defineProps({
  color: {
    type: String,
    default: 'black',
  },
  isGradient: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <svg
    v-if="isGradient"
    xmlns="http://www.w3.org/2000/svg"
    width="105"
    height="35"
    viewBox="0 0 105 35"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M60.0833 0.5H62.0833L62.0833 34.5H60.0833L60.0833 0.5ZM51.5 8.5V34.5L53.5 34.5V8.5H51.5ZM8.58333 34.5L8.58333 10.5H10.5833L10.5833 34.5H8.58333ZM0 34.5V17.5H2V34.5H0ZM17.1667 20.5V34.5H19.1667V20.5H17.1667ZM25.75 34.5V17.5H27.75V34.5H25.75ZM34.3333 10.5V34.5H36.3333V10.5H34.3333ZM42.9167 34.5V20.5H44.9167V34.5H42.9167ZM68.6667 20.5V34.5H70.6667V20.5H68.6667ZM77.25 34.5V8.5H79.25V34.5L77.25 34.5ZM87.8333 0.5H85.8333V34.5H87.8333V0.5ZM94.4167 34.5V17.5H96.4167V34.5H94.4167ZM103 10.5V34.5H105V10.5H103Z"
      fill="url(#paint0_linear_2907_31523)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2907_31523"
        x1="-2.43122"
        y1="2.75042"
        x2="56.602"
        y2="75.2179"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-else
    width="105"
    height="34"
    viewBox="0 0 105 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17V34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M9.58325 10L9.58325 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M18.1667 20L18.1667 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M26.75 17V34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M35.3333 10L35.3333 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M43.9167 20L43.9167 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M52.5 8L52.5 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M61.0833 0L61.0833 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M69.6667 20L69.6667 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M78.25 8L78.25 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M86.8333 0L86.8333 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M95.4167 17V34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M104 10L104 34"
      :stroke="color"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
</template>
