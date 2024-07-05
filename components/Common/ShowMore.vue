<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  padding: {
    type: String,
    required: false,
    default: '8px 16px',
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
  isLink: {
    type: Boolean,
    required: false,
    default: false,
  },
  path: {
    type: String,
    required: false,
    default: '',
  },
});
defineEmits(['onClick']);
</script>

<template>
  <NuxtLink
    v-if="isLink"
    :aria-label="text"
    :disabled="isLoading"
    :to="path"
    :class="[
      'link-text-container',
      { 'link-text-container--loading': isLoading },
    ]"
    @click="$emit('onClick')"
  >
    <span :style="{ padding: padding }" class="link-text">
      <span class="link-text-text">{{ text }} </span>
      <IconsLoading v-if="isLoading" />
      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
          fill="url(#paint0_linear_2225_3476)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2225_3476"
            x1="-0.370472"
            y1="1.05902"
            x2="19.1037"
            y2="8.79999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2400FF" />
            <stop offset="1" stop-color="#EB6F0E" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </NuxtLink>
  <button
    v-else
    type="button"
    :title="text"
    :aria-label="text"
    :disabled="isLoading"
    :class="[
      'link-text-container',
      { 'link-text-container--loading': isLoading },
    ]"
    @click="$emit('onClick')"
  >
    <span :style="{ padding: padding }" class="link-text">
      <span class="link-text-text">{{ text }} </span>
      <IconsLoading v-if="isLoading" />
      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
          fill="url(#paint0_linear_2225_3475)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2225_3475"
            x1="-0.370472"
            y1="1.05902"
            x2="19.1037"
            y2="8.79999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2400FF" />
            <stop offset="1" stop-color="#EB6F0E" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </button>
</template>

<style scoped>
.link-text-container {
  width: 100%;
  display: block;
  background: var(--gradient-logo);
  border-radius: 2px 2px 16px 2px;
  padding: 2px;
  transition: all 0.5s ease;
  cursor: pointer;
}

.link-text-container--loading {
  opacity: 0.5;
  cursor: not-allowed;
}
.link-text-container:hover .link-text {
  background-color: var(--primary-white-hover);
}

.link-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px 2px 16px 2px;
  background-color: var(--primary-white);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;
}

.link-text-text {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.link-text:active {
  background: var(--gradient-logo);
}

.link-text:active .link-text-text {
  background: linear-gradient(to right, white, #f9f9f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.5s ease;
}

.link-text:active path {
  fill: white;
}

.login .login-link .link-text {
  padding: 8px;
}

.login .link-text-container {
  padding: 3px;
}

svg {
  flex-shrink: 0;
}
</style>
