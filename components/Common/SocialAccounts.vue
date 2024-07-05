<script setup>
defineProps({
  place: {
    type: String,
    default: 'menu',
  },
});
const handlePhoneClick = () => {
  window.open('tel:+49 30 92103672', '_blank');
};
const handleInstagramClick = () => {
  window.open('https://www.instagram.com/propaganda.solutions/', '_blank');
};
const handleFacebookClick = () => {
  window.open('https://www.facebook.com/Propaganda.Solutions.GmbH/', '_blank');
};
const handleLinkedinClick = () => {
  window.open(
    'https://www.linkedin.com/company/propaganda-solutions-gmbh/',
    '_blank',
  );
};
const handleMx2Click = () => {
  window.open('https://mx2.ai', '_blank');
};
</script>

<template>
  <div class="social" :class="`social-${place}`">
    <div class="social-accounts" :class="`social-accounts-${place}`">
      <button
        v-if="place === 'footer'"
        type="button"
        class="social-accounts-link"
        aria-label="Phone"
        @click="handlePhoneClick"
      >
        <IconsSocialPlatformsPhone />
      </button>
      <button
        type="button"
        class="social-accounts-link"
        aria-label="Instagram"
        @click="handleInstagramClick"
      >
        <IconsSocialPlatformsInstagram
          :color="place === 'menu' ? '#000' : '#fff'"
        />
      </button>
      <button
        class="social-accounts-link"
        type="button"
        aria-label="Facebook"
        @click="handleFacebookClick"
      >
        <IconsSocialPlatformsFacebook
          :color="place === 'menu' ? '#000' : '#fff'"
        />
      </button>
      <button
        type="button"
        class="social-accounts-link"
        aria-label="Linkedin"
        @click="handleLinkedinClick"
      >
        <IconsSocialPlatformsLinkedin
          :color="place === 'menu' ? '#000' : '#fff'"
        />
      </button>
    </div>
    <button
      type="button"
      class="social-project-link"
      aria-label="mx²"
      @click="handleMx2Click"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
      >
        <defs>
          <linearGradient
            id="paint0_linear_59_29"
            x1="7"
            y1="2"
            x2="19"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2400FF" />
            <stop offset="1" stop-color="#EB6F0E" />
          </linearGradient>
          <clipPath id="clip0_5384_5670">
            <rect
              width="25.6"
              height="25.6"
              fill="white"
              transform="translate(0.601562 0.0742188)"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#clip0_5384_5670)">
          <path
            d="M7.52344 21.5445L9.41144 23.4325L19.9714 12.8725L9.41144 2.3125L7.52344 4.2005L16.1954 12.8725L7.52344 21.5445Z"
            class="path"
            fill="#006FEC"
          />
        </g>
      </svg>
      mx&#178;
    </button>
  </div>
</template>

<style scoped>
.social {
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 1rem;
  gap: 1rem;
}

.social-accounts {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.social-project-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 32px;
  line-height: 40px;
  color: var(--primary-blue);
  width: fit-content;
  transition: all 0.3s ease;
}

.social-project-link:hover {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.03);
}
.social-project-link:hover .path {
  fill: url(#paint0_linear_59_29);
}

.social-accounts svg {
  display: block;
  width: 32px;
  height: 32px;
}
.social-accounts-link {
  transition: all 0.3s ease;
}
.social-accounts-link:hover {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .social {
    display: flex;
    justify-content: flex-end;
  }

  .social-menu {
    gap: 5rem;
  }

  .social-accounts-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .social-accounts svg {
    width: 40px;
    height: 40px;
  }
}
@media (min-width: 1024px) {
  .social {
    padding: 0;
  }
}
</style>
