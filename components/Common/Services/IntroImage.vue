<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg
    class="shape shape--mobile"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="400"
    height="574"
    viewBox="0 0 400 574"
    fill="none"
  >
    <path
      d="M0 30.6686C0 8.58015 23.0629 -5.93433 42.9776 3.62086L382.978 166.754C393.381 171.746 400 182.263 400 193.802V543.826C400 560.394 386.569 573.826 370 573.826H30C13.4315 573.826 0 560.394 0 543.826V30.6686Z"
      fill="url(#pattern0)"
    />
    <path
      d="M0 30.6686C0 8.58015 23.0629 -5.93433 42.9776 3.62086L382.978 166.754C393.381 171.746 400 182.263 400 193.802V543.826C400 560.394 386.569 573.826 370 573.826H30C13.4315 573.826 0 560.394 0 543.826V30.6686Z"
      fill="url(#paint0_linear_90_39)"
      fill-opacity="0.7"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_90_40"
          transform="matrix(0.00137165 0 0 0.000907219 -0.0550459 -0.132505)"
        />
      </pattern>
      <image
        id="image0_90_40"
        width="816"
        height="1456"
        :xlink:href="image"
      />
      <linearGradient
        id="paint0_linear_90_39"
        x1="20.7382"
        y1="41.1061"
        x2="546.445"
        y2="182.581"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    class="shape shape--laptop"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="300"
    height="703"
    viewBox="0 0 300 703"
    fill="none"
  >
    <path
      d="M0 30.7505C0 6.35798 27.5638 -7.83783 47.4217 6.32751L287.422 177.528C295.315 183.158 300 192.255 300 201.951V673C300 689.569 286.569 703 270 703H30C13.4315 703 0 689.569 0 673V30.7505Z"
      fill="url(#pattern1)"
    />
    <path
      d="M0 30.7505C0 6.35798 27.5638 -7.83783 47.4217 6.32751L287.422 177.528C295.315 183.158 300 192.255 300 201.951V673C300 689.569 286.569 703 270 703H30C13.4315 703 0 689.569 0 673V30.7505Z"
      fill="url(#paint0_linear_90_40)"
      fill-opacity="0.7"
    />
    <defs>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_91_47"
          transform="matrix(0.00186145 0 0 0.000739634 -0.223834 -0.00782157)"
        />
      </pattern>
      <image
        id="image0_91_47"
        width="816"
        height="1456"
        :xlink:href="image"
      />
      <linearGradient
        id="paint0_linear_90_40"
        x1="20.7382"
        y1="41.1061"
        x2="546.445"
        y2="182.581"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    class="shape shape--desktop"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="520"
    height="100%"
    viewBox="0 0 399 625"
    fill="none"
  >
    <path
      d="M0 31.046C0 5.62224 29.6426 -8.27628 49.1869 7.9838L388.142 266.92C394.993 272.62 398.955 281.07 398.955 289.982V595C398.955 611.568 385.524 625 368.955 625H30C13.4315 625 0 611.568 0 595V31.046Z"
      fill="url(#pattern2)"
    />
    <path
      d="M0 31.046C0 5.62224 29.6426 -8.27628 49.1869 7.9838L388.142 266.92C394.993 272.62 398.955 281.07 398.955 289.982V595C398.955 611.568 385.524 625 368.955 625H30C13.4315 625 0 611.568 0 595V31.046Z"
      fill="url(#paint0_linear_90_41)"
      fill-opacity="0.7"
    />
    <defs>
      <pattern
        id="pattern2"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
        viewBox="0 0 1 1"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          id="image0_92_49"
          width="1"
          height="1"
          preserveAspectRatio="xMidYMid slice"
          :xlink:href="image"
        />
      </pattern>
      <linearGradient
        id="paint0_linear_90_41"
        x1="20.7382"
        y1="41.1061"
        x2="546.445"
        y2="182.581"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2400FF" />
        <stop offset="1" stop-color="#EB6F0E" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
.shape {
  position: relative;
  z-index: 2;
}

.shape--mobile {
  display: flex;
  width: 100%;
  max-width: 400px;
  margin: -32px auto -32px;
}

@media (min-width: 420px) {
  .shape--mobile {
    margin: 0 auto 0;
  }
}

.shape--laptop,
.shape--desktop {
  display: none;
}

@media (min-width: 768px) {
  .shape-gradient {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
  }

  .shape--laptop {
    display: block;
  }

  .shape--mobile {
    display: none;
  }
}

@media (min-width: 1500px) {
  .shape--laptop {
    display: none;
  }

  .shape--desktop {
    display: flex;
    width: 100%;
    max-width: 480px;
  }
}
</style>
