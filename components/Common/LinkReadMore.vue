<script setup>
defineProps({
  path: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <NuxtLink
    aria-label="blog-link"
    :to="path"
    class="message-link-wrapper"
  >
    <span class="message-link">
      <span class="message-link-inner">
        <span class="message-link-text">
          {{ text }}
        </span>
        <span class="arrow">
          <IconsGeneralArrow
            color="#000"
            :width="16"
            :height="16"
          />
        </span>
      </span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.message-link-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  height: 48px;
}
.message-link {
  display: block;
  box-sizing: border-box;
  background: linear-gradient(111.68deg, #2400ff 0.23%, #eb6f0e 101.08%);
  border-radius: 40px;
  width: 100%;
  height: 40px;
  padding: 5px;
}
.message-link-inner {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  border-radius: 40px;
  width: 100%;
  height: 100%;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  border: none;
}
.message-link-text {
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0em;
  color: white;
  transition: all 0.3s ease-in-out;
}
.arrow {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
}
.message-link:hover .message-link-inner {
  background: var(--secondary-dark-blue);
}
.message-link:active .message-link-inner {
  background: var(--secondary-darker-blue);
}
.message-link:active .message-link-text {
  color: var(--primary-white);
}
</style>
