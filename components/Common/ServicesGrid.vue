<script setup>
import {
  servicesGridItemsDE,
  servicesGridItemsEN,
} from '~/data/servicesGridItems';

const { locale } = useI18n();
const localePath = useLocalePath();

const menu = computed(() => {
  if (locale.value === 'en') {
    return servicesGridItemsEN;
  } else {
    return servicesGridItemsDE;
  }
});
</script>

<template>
  <div class="services">
    <NuxtLink
      v-for="subItem in menu"
      :key="subItem.name"
      :to="localePath(subItem.path)"
      class="service"
    >
      <span>{{ subItem.name }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_4428_4757)">
          <path
            d="M11.998 4L10.588 5.41L16.168 11H3.99805V13H16.168L10.588 18.59L11.998 20L19.998 12L11.998 4Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_4428_4757">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(-0.00195312)"
            />
          </clipPath>
        </defs>
      </svg>
    </NuxtLink>
  </div>
</template>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.service {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  transition: color 0.2s linear;
  text-transform: capitalize;
}
.service:hover {
  color: var(--admin-page-white);
}
.service path {
  transition: fill 0.2s linear;
}
.service:hover path {
  fill: var(--admin-page-white);
}

.service::after {
  content: "";
  position: absolute;
  top: 115%;
  width: 100%;
  height: 4px;
  background: var(--gradient-logo);
}

@media screen and (min-width: 768px) {
  .services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
  }
}

@media screen and (min-width: 1024px) {
  .services {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
