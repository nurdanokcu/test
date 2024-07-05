<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
});
defineEmits(['unsubscribe']);
</script>

<template>
  <button
    :class="[
      'button-unsubscribe',
      { 'button-unsubscribe--loading': isLoading },
    ]"
    type="button"
    :disabled="isLoading"
    @click="$emit('unsubscribe')"
  >
    <span class="button-unsubscribe-text">
      {{ $t("unsubscribe.unsubscribe") }}
    </span>
    <IconsGeneralUnsubscribe
      v-if="!isLoading"
      class="button-unsubscribe-icon--white"
      :color="'var(--primary-white)'"
    />
    <IconsGeneralUnsubscribe
      v-if="!isLoading"
      class="button-unsubscribe-icon--orange"
      :color="'var(--secondary-orange-dark)'"
    />
    <IconsLoading v-if="isLoading" color="var(--primary-white)" />
  </button>
</template>

<style scoped>
.button-unsubscribe {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 16px;
  width: 100%;
  border-radius: 0px 2px 16px 0px;
  background-color: var(--secondary-orange-dark, #dd3d0c);
  border: 2px solid var(--secondary-orange-dark, #dd3d0c);
  transition: all 0.3s ease-in-out;
}
.button-unsubscribe--loading {
  opacity: 0.5;
  cursor: not-allowed;
}
.button-unsubscribe-icon--orange {
  display: none;
}
.button-unsubscribe:hover {
  background-color: #c9390d;
  border: 2px solid #c9390d;
}
.button-unsubscribe:active {
  background-color: #fff;
}
.button-unsubscribe-text {
  color: var(--White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.button-unsubscribe:active .button-unsubscribe-text {
  color: var(--secondary-orange-dark, #dd3d0c);
}
.button-unsubscribe:active .button-unsubscribe-icon--white {
  display: none;
}
.button-unsubscribe:active .button-unsubscribe-icon--orange {
  display: block;
}
</style>
