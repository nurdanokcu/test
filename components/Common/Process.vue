<script setup lang="ts">
type TypeItem = {
  title: string;
  description: string;
};
defineProps({
  items: {
    type: Array as PropType<TypeItem[]>,
    required: true,
  },
  themeColor: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="items">
    <CommonProcessItem
      v-for="(item, index) in items"
      :key="`item-${index}`"
      class="process-item"
      :index="index"
      :item="item"
      :theme-color="themeColor"
    />
  </div>
</template>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.process-item:last-child .item-line {
  display: none;
}
</style>
