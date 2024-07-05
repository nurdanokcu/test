<template>
  <Transition name="dropdown">
    <slot />
  </Transition>
</template>

<style scoped>
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}
</style>
