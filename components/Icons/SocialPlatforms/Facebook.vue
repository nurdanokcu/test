<script setup>
defineProps({
  color: {
    type: String,
    default: 'white',
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="40"
    viewBox="0 0 39 40"
    fill="none"
  >
    <path
      d="M24.3933 9.18705H27.4013V4.09905C25.9449 3.9476 24.4816 3.87283 23.0173 3.87505C18.6653 3.87505 15.6893 6.53105 15.6893 11.395V15.587H10.7773V21.283H15.6893V35.875H21.5773V21.283H26.4733L27.2093 15.587H21.5773V11.955C21.5773 10.275 22.0253 9.18705 24.3933 9.18705Z"
      :fill="color"
    />
    <defs>
      <linearGradient
        id="paint0_linear_44_47"
        x1="11.5"
        y1="4"
        x2="27"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
svg:hover path {
  fill: url(#paint0_linear_44_47);
}
</style>
