<script setup>
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
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
  >
    <g clip-path="url(#clip0_2928_33123)">
      <path
        d="M12.3333 22.5C6.82325 22.5 2.33325 18.01 2.33325 12.5C2.33325 6.99 6.82325 2.5 12.3333 2.5C17.8433 2.5 22.3333 6.54 22.3333 11.5C22.3333 14.81 19.6433 17.5 16.3333 17.5H14.5633C14.2833 17.5 14.0633 17.72 14.0633 18C14.0633 18.12 14.1133 18.23 14.1933 18.33C14.6033 18.8 14.8333 19.39 14.8333 20C14.8333 21.38 13.7133 22.5 12.3333 22.5ZM12.3333 4.5C7.92325 4.5 4.33325 8.09 4.33325 12.5C4.33325 16.91 7.92325 20.5 12.3333 20.5C12.6133 20.5 12.8333 20.28 12.8333 20C12.8333 19.84 12.7533 19.72 12.6933 19.65C12.2833 19.19 12.0633 18.6 12.0633 18C12.0633 16.62 13.1833 15.5 14.5633 15.5H16.3333C18.5433 15.5 20.3333 13.71 20.3333 11.5C20.3333 7.64 16.7433 4.5 12.3333 4.5Z"
        :fill="color ? color : 'url(#paint0_linear_2928_33123)'"
      />
      <path
        d="M6.83325 13.5C7.66168 13.5 8.33325 12.8284 8.33325 12C8.33325 11.1716 7.66168 10.5 6.83325 10.5C6.00482 10.5 5.33325 11.1716 5.33325 12C5.33325 12.8284 6.00482 13.5 6.83325 13.5Z"
        :fill="color ? color : 'url(#paint1_linear_2928_33123)'"
      />
      <path
        d="M9.83325 9.5C10.6617 9.5 11.3333 8.82843 11.3333 8C11.3333 7.17157 10.6617 6.5 9.83325 6.5C9.00482 6.5 8.33325 7.17157 8.33325 8C8.33325 8.82843 9.00482 9.5 9.83325 9.5Z"
        :fill="color ? color : 'url(#paint2_linear_2928_33123)'"
      />
      <path
        d="M14.8333 9.5C15.6617 9.5 16.3333 8.82843 16.3333 8C16.3333 7.17157 15.6617 6.5 14.8333 6.5C14.0048 6.5 13.3333 7.17157 13.3333 8C13.3333 8.82843 14.0048 9.5 14.8333 9.5Z"
        :fill="color ? color : 'url(#paint3_linear_2928_33123)'"
      />
      <path
        d="M17.8333 13.5C18.6617 13.5 19.3333 12.8284 19.3333 12C19.3333 11.1716 18.6617 10.5 17.8333 10.5C17.0048 10.5 16.3333 11.1716 16.3333 12C16.3333 12.8284 17.0048 13.5 17.8333 13.5Z"
        :fill="color ? color : 'url(#paint4_linear_2928_33123)'"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2928_33123"
        x1="1.87016"
        y1="3.82378"
        x2="26.2129"
        y2="13.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2928_33123"
        x1="5.26379"
        y1="10.6986"
        x2="8.9152"
        y2="12.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2928_33123"
        x1="8.26379"
        y1="6.69857"
        x2="11.9152"
        y2="8.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2928_33123"
        x1="13.2638"
        y1="6.69857"
        x2="16.9152"
        y2="8.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_2928_33123"
        x1="16.2638"
        y1="10.6986"
        x2="19.9152"
        y2="12.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
      <clipPath id="clip0_2928_33123">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.333252 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
