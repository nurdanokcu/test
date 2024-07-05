<script setup>
const emits = defineEmits(['onClose']);
const popupContent = ref('popupContent');
function close() {
  emits('onClose');
}
onClickOutside(popupContent, close);
function handleKeyDown(event) {
  if (event.key === 'Escape') {
    close();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div class="popup-wrapper">
    <div ref="popupContent">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
