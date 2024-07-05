<script setup>
defineProps({
  linkPath: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'gradient',
  },
});
</script>

<template>
  <NuxtLink
    :class="['link', `linkbg--${theme}`]"
    :to="linkPath"
    aria-label="Link"
    role="link"
  >
    <span class="link-inner">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(111.68)">
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
  </NuxtLink>
</template>

<style scoped>
.link {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 2px 0px 16px;
  cursor: pointer;
}

.linkbg--gradient {
  background: var(--gradient-logo);
}

.linkbg--gradient:hover {
  background: var(--gradient-logo-hover);
}
.linkbg--blue {
  background: var(--primary-blue);
  transition: all 0.2s ease;
}

.link-inner {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  height: 88%;
  background: transparent;
  border-radius: 2px 0px 14px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.linkbg--blue:hover {
  background: var(--secondary-blue);
}
.linkbg--blue:hover .link-inner {
  background: var(--secondary-blue);
}

.link:active .link-inner {
  background: #fff;
  transition: all 0.3s ease;
}

.linkbg--gradient:active .link-inner {
  background: #fff;
  transition: all 0.3s ease;
}

.linkbg--blue:active {
  background: #fff;
  border: 3px solid var(--primary-blue);
  transition: all 0.2s ease;
}

.linkbg--gradient:active {
  transition: all 0.3s ease;
}

.link:active path {
  fill: url(#gradient);
}

.linkbg--gradient:active path {
  fill: url(#gradient);
}

.linkbg--blue:active path {
  fill: var(--primary-blue);
  transition: all 0.3s ease;
}
</style>
