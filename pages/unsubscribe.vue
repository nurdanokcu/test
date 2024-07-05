<script setup lang="ts">
definePageMeta({
  middleware: [

    function (to, _from) {
      const token = to.query.confirmation_token as string;
      if (!token) {
        return navigateTo('/');
      }
    },
  ],
});
const isSuccessUnsubscribe = ref(false);
const isSuccessFrequency = ref(false);
const updateFrequency = (value: boolean) => {
  isSuccessFrequency.value = value;
};
const updateUnsubscribe = (value: boolean) => {
  isSuccessUnsubscribe.value = value;
};
watch(
  [() => isSuccessUnsubscribe.value, () => isSuccessFrequency.value],
  () => {
    if (isSuccessUnsubscribe.value || isSuccessFrequency.value) {
      window.scrollTo(0, 0);
    }
  },
);
</script>

<template>
  <div class="unsubscribe">
    <UnsubscribeSuccess v-if="isSuccessUnsubscribe" />
    <UnsubscribeFrequencySuccess v-if="isSuccessFrequency" />
    <Unsubscribe
      v-else-if="!isSuccessUnsubscribe && !isSuccessFrequency"
      @on-update-unsubscribe="updateUnsubscribe"
      @on-update-frequency="updateFrequency"
    />
  </div>
</template>

<style scoped>
.unsubscribe {
  padding: 180px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .unsubscribe {
    padding: 180px 32px;
  }
}
@media (min-width: 1024px) {
  .unsubscribe {
    padding: 180px 64px;
  }
}
</style>
