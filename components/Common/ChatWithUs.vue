<script setup>
const chatClicked = () => {};
</script>

<template>
  <button
    type="button"
    class="chat"
    :class="$t('common.chatClass')"
    aria-label="Chat with us"
    @click="chatClicked"
  >
    <span class="chat-content">
      <span class="chat-text">
        {{ $t("common.chat") }}
      </span>
      <IconsGeneralChat />
    </span>
  </button>
</template>
