<script setup>
const { showMenu } = useNavbarMenu();
</script>

<template>
  <div class="div">
    <nav>
      <NavbarTop />
      <Transition name="menu">
        <LazyNavbarMenuOpen v-if="showMenu" />
      </Transition>
      <!--       <CommonChatWithUs /> -->
    </nav>
    <div class="main-container">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.menu-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-in-out;
}
.menu-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
