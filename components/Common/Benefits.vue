<template>
  <div class="benefit-container">
    <div class="icon-container">
      <div :class="['icon-content', `icon-bgcolor--${theme}`]">
        <slot></slot>
      </div>
    </div>
    <div class="texts">
      <p class="title">
        {{ title }}
      </p>
      <p class="text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.benefit-container {
  border-radius: 16px;
  background: var(--primary-white);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 15px;
}

.icon-container {
  width: 63px;
  height: 63px;
  margin: auto;
  box-shadow: 0px 0px 13px 8px rgba(0, 111, 236, 0.2);
  border-radius: 13px;
  transform: rotate(-18.864deg);
  margin-bottom: 20px;
}

.icon-content {
  width: 61px;
  height: 61px;
  border-radius: 13px;
  transform: rotate(18.864deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-bgcolor--blue {
  background: var(--primary-blue);
  box-shadow: 0px 0px 13px 8px rgba(0, 111, 236, 0.2);
}

.icon-bgcolor--orange {
  background: var(--primary-orange);
}

.texts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  color: var(--primary-black);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.text {
  color: var(--primary-black);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.stories .icon-container,
.stories .icon-content {
  box-shadow: 0px 0px 13px 6px rgba(255, 89, 0, 0.2);
}

@media (min-width: 768px) {
  .benefit-container {
    display: flex;
    gap: 16px;
    /* justify-content: space-between; */
    align-items: center;
  }

  .icon-container {
    margin: 0px;
  }
}
</style>
