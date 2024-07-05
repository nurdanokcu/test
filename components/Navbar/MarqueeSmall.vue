<script setup>
import { PSLogoWhite } from '~/assets/images/logo';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const localePath = useLocalePath();
const { closeMenu } = useNavbarMenu();
const handleClick = () => {
  closeMenu();
};
</script>

<template>
  <NuxtLink
    :to="localePath(item.path)"
    class="marquee-mobile-wrapper"
    role="navigation"
    aria-label="Menu"
    :title="item.name"
    @click="handleClick(item.id)"
  >
    <span class="marquee-mobile">
      <span class="marquee__content">
        <span
          v-for="(n, index) in 6"
          :key="index"
          class="menu-mobile-add"
        >
          <span class="menu-mobile-add-text">
            {{ item.name }}
          </span>
          <img
            class="menu-mobile-add-logo"
            width="19"
            height="15"
            :src="PSLogoWhite"
            alt="logo"
          />
        </span>
      </span>
      <span aria-hidden="true" class="marquee__content menu-mobile-add">
        <span
          v-for="(n, index) in 6"
          :key="index"
          class="menu-mobile-add"
        >
          <span class="menu-mobile-add-text">
            {{ item.name }}
          </span>
          <img
            class="menu-mobile-add-logo"
            width="19"
            height="15"
            :src="PSLogoWhite"
            alt="logo"
          />
        </span>
      </span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.marquee-mobile-wrapper {
  position: absolute;
  width: 100%;
  top: 194px;
  cursor: pointer;
  background: #000;
  text-decoration: none;
}

.marquee-mobile-wrapper:active {
  background: var(--gradient-logo);
}

.marquee-mobile {
  display: flex;
  padding: 10px 0px;
  --gap: 40px;
  position: relative;
  display: flex;
  overflow: hidden;
  gap: var(--gap);
}

.marquee-mobile .marquee__content {
  display: flex;
  justify-content: space-around;
  flex-shrink: 0;
  gap: var(--gap);
  min-width: 100%;
}

.marquee-mobile .marquee__content {
  animation: scroll 30s linear infinite;
  animation-delay: 0.5s;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

.menu-mobile-add {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.menu-mobile-add-text {
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}

@media (min-width: 768px) {
  .marquee-mobile-wrapper {
    display: none;
  }
}
</style>
