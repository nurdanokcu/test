<script setup>
defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isPrev: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: '',
  },
});

defineEmits(['onClick']);
</script>

<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    :class="[
      'pagination-arrow',
      {
        'pagination-arrow--disabled': isDisabled,
        'pagination-arrow--prev': isPrev,
      },
    ]"
    name=""
    :disabled="isDisabled"
    @click="$emit('onClick')"
  >
    <span class="button-inner">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="pagination-gradient"
            gradientTransform="rotate(111.68)"
          >
            <stop offset="0%" stop-color="#2400FF" />
            <stop offset="101.08%" stop-color="#EB6F0E" />
          </linearGradient>
        </defs>
        <path
          d="M8.79736 0.640625L7.38736 2.05062L12.9674 7.64062H0.797363V9.64062H12.9674L7.38736 15.2306L8.79736 16.6406L16.7974 8.64062L8.79736 0.640625Z"
          fill="white"
        />
      </svg>
    </span>
  </button>
</template>

<style scoped>
.pagination-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  padding: 3px;
  border-radius: 50%;
  background: var(--gradient-logo);
}

.pagination-arrow--prev {
  transform: rotate(180deg);
}
.pagination-arrow--disabled {
  background: #d9d9d9;
  cursor: initial;
}
.button-inner {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.pagination-arrow:active .button-inner {
  background: #fff;
  transition: all 0.3s ease;
}
.pagination-arrow:active path {
  fill: url(#pagination-gradient);
}
.pagination-arrow--disabled:active .button-inner {
  background: #d9d9d9;
}
.pagination-arrow--disabled:active path {
  fill: white;
}
</style>
