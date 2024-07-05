<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
});
defineEmits(['onClick']);
</script>

<template>
  <button
    type="button"
    class="blog-category"
    name="category"
    :aria-label="`Click to load all blogs with category ${text}`"
    @click="$emit('onClick')"
  >
    <span class="blog-category-inner">
      <span class="blog-category-text">
        {{ text }}
      </span>
    </span>
  </button>
</template>

<style scoped>
.blog-category {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 1px;
  border-radius: 20px;
  background: var(--gradient-logo);
}
.blog-category-inner {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: var(--White, #fff);
  border-radius: 20px;
}
.blog-category-text {
  font-size: 14px;
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
