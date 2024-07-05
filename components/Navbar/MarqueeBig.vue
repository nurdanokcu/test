<script setup>
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
  class="nav-menu-marquee"
  role="navigation"
  aria-label="Menu"
    @click="handleClick"
    >
    <span class="nav-menu-marquee__content">
      <span class="nav-menu-link">
        {{ item.name }}
      </span>
    </span>
    <span aria-hidden="true" class="nav-menu-marquee__content">
      <span class="nav-menu-link">
        {{ item.name }}
      </span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.nav-menu-marquee {
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
}
.about-en .nav-menu-marquee {
  max-width: 566px;
}
.about-de .nav-menu-marquee {
  max-width: 444px;
}
.service-en .nav-menu-marquee {
  max-width: 660px;
}
.service-de .nav-menu-marquee {
  max-width: 590px;
}
.resources-en .nav-menu-marquee {
  max-width: 1002px;
}
.resources-de .nav-menu-marquee {
  max-width: 1128px;
}
.blog-en .nav-menu-marquee {
  max-width: 444px;
}
.blog-de .nav-menu-marquee {
  width: 780px;
}

.nav-menu-link {
  font-weight: 300;
  font-size: 194px;
  line-height: 270px;
  text-transform: uppercase;
  color: #000;
}
.nav-menu-link:hover {
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-menu-link:active {
  background: var(--primary-orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-menu-marquee__content {
  display: flex;
  justify-content: space-around;
}
.nav-menu-marquee__content {
  animation: marqueeInfinite 10s linear infinite;
  animation-delay: 1s;
}
@keyframes marqueeInfinite {
  0% {
    transform: translateX(0) translateZ(0);
  }
  90% {
    transform: translateX(-100%) translateZ(0);
  }
  100% {
    transform: translateX(-100%) translateZ(0);
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .nav-menu-link {
    font-size: 148px;
    line-height: 160px;
  }
  .about-en .nav-menu-marquee {
    max-width: 430px;
  }
  .about-de .nav-menu-marquee {
    max-width: 400px;
  }
  .service-en .nav-menu-marquee {
    max-width: 504px;
  }
  .service-de .nav-menu-marquee {
    max-width: 446px;
  }
  .resources-en .nav-menu-marquee {
    max-width: 742px;
  }
  .resources-de .nav-menu-marquee {
    max-width: 840px;
  }
  .blog-en .nav-menu-marquee {
    max-width: 338px;
  }
  .blog-de .nav-menu-marquee {
    max-width: 598px;
  }
}
</style>
