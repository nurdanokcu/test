<template>
  <Transition name="error">
    <slot />
  </Transition>
</template>

<style>
.error-enter-active,
.error-leave-active {
  transition: all 0.5s ease;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
