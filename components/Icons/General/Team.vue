<script setup>
defineProps({
  color: {
    type: String,
    default: 'black',
  },
  isGradient: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <svg
    v-if="isGradient"
    width="22"
    height="17"
    viewBox="0 0 22 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6699 9.62207C17.0399 10.5521 17.9999 11.8121 17.9999 13.4921V16.4921H21.9999V13.4921C21.9999 11.3121 18.4299 10.0221 15.6699 9.62207Z"
      fill="url(#paint0_linear_1492_273)"
    />
    <path
      d="M8 8.49219C10.2091 8.49219 12 6.70133 12 4.49219C12 2.28305 10.2091 0.492188 8 0.492188C5.79086 0.492188 4 2.28305 4 4.49219C4 6.70133 5.79086 8.49219 8 8.49219Z"
      fill="url(#paint1_linear_1492_273)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.9999 8.49219C16.2099 8.49219 17.9999 6.70219 17.9999 4.49219C17.9999 2.28219 16.2099 0.492188 13.9999 0.492188C13.5299 0.492188 13.0899 0.592187 12.6699 0.732187C13.4999 1.76219 13.9999 3.07219 13.9999 4.49219C13.9999 5.91219 13.4999 7.22219 12.6699 8.25219C13.0899 8.39219 13.5299 8.49219 13.9999 8.49219Z"
      fill="url(#paint2_linear_1492_273)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 9.49219C5.33 9.49219 0 10.8322 0 13.4922V16.4922H16V13.4922C16 10.8322 10.67 9.49219 8 9.49219Z"
      fill="url(#paint3_linear_1492_273)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1492_273"
        x1="15.5234"
        y1="10.0768"
        x2="23.3899"
        y2="12.958"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1492_273"
        x1="3.81476"
        y1="1.0217"
        x2="13.5519"
        y2="4.89218"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1492_273"
        x1="12.5465"
        y1="1.0217"
        x2="19.5665"
        y2="2.88083"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1492_273"
        x1="-0.370472"
        y1="9.95551"
        x2="11.983"
        y2="21.1795"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-else
    width="23"
    height="15"
    viewBox="0 0 23 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 6.82031C17.16 6.82031 18.49 5.48031 18.49 3.82031C18.49 2.16031 17.16 0.820312 15.5 0.820312C13.84 0.820312 12.5 2.16031 12.5 3.82031C12.5 5.48031 13.84 6.82031 15.5 6.82031ZM7.5 6.82031C9.16 6.82031 10.49 5.48031 10.49 3.82031C10.49 2.16031 9.16 0.820312 7.5 0.820312C5.84 0.820312 4.5 2.16031 4.5 3.82031C4.5 5.48031 5.84 6.82031 7.5 6.82031ZM7.5 8.82031C5.17 8.82031 0.5 9.99031 0.5 12.3203V13.8203C0.5 14.3703 0.95 14.8203 1.5 14.8203H13.5C14.05 14.8203 14.5 14.3703 14.5 13.8203V12.3203C14.5 9.99031 9.83 8.82031 7.5 8.82031ZM15.5 8.82031C15.21 8.82031 14.88 8.84031 14.53 8.87031C14.55 8.88031 14.56 8.90031 14.57 8.91031C15.71 9.74031 16.5 10.8503 16.5 12.3203V13.8203C16.5 14.1703 16.43 14.5103 16.32 14.8203H21.5C22.05 14.8203 22.5 14.3703 22.5 13.8203V12.3203C22.5 9.99031 17.83 8.82031 15.5 8.82031Z"
      :fill="color"
    />
  </svg>
</template>
