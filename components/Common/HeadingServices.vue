<template>
  <div class="subtext-content">
    <p class="subtext">
      <span class="subtext-heading">
        {{ text1 }}
      </span>
      <span class="subtext-text">
        {{ text2 }}
      </span>
    </p>
    <p class="subtext">
      <span class="subtext-heading">{{ subtext1 }}</span>
      <span class="subtext-text">{{ subtext2 }}</span>
    </p>
    <p class="subtext spanitem">
      <span class="subtext-heading">{{ subtext3 }}</span>
      <span class="subtext-text">
        {{ subtext4 }}
      </span>
    </p>
  </div>
</template>

<script setup>
defineProps({
  text1: {
    type: String,
    default: ' ',
  },
  text2: {
    type: String,
    default: ' ',
  },
  subtext1: {
    type: String,
    default: ' ',
  },
  subtext2: {
    type: String,
    default: ' ',
  },
  subtext3: {
    type: String,
    default: ' ',
  },
  subtext4: {
    type: String,
    default: ' ',
  },
});
</script>

<style scoped>
.subtext {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 16px;
}

.subtext-heading {
  color: var(--white, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.subtext-text {
  color: var(--white, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media (min-width: 768px) {
  .subtext-content {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .spanitem {
    grid-column: span 2;
  }
}
</style>
