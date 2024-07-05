<template>
  <Transition name="fade">
    <slot />
  </Transition>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0.3;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
