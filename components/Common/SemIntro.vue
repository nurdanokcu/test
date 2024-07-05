<template>
  <p class="sem-intro-title">
    {{ title }}
  </p>
  <div class="line" />
  <p class="sem-intro-text">
    {{ text }}
  </p>
  <p class="sem-intro-text">
    {{ text1 }}
  </p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  text1: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.sem-intro-title {
  color: #1f1f1f;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.line {
  width: 100%;
  background: var(--gradient-logo);
  height: 1px;
  margin: 15px 0px;
}

.sem-intro-text {
  color: #1f1f1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
}

.social-gradient-text p {
  color: #fff;
}

.data-gradient-container p {
  color: #fff;
}

.data-gradient-container .line {
  display: none;
}
</style>
