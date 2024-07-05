<template>
  <div class="why-choose-us-container">
    <div class="why-choose-us-heading">
      <IconsGeneralCircleArrow :theme="theme" class="icon" />
      <p :class="['title', `title-color--${color}`]">
        {{ title }}
      </p>
    </div>
    <p class="text">
      {{ text }}
    </p>
  </div>
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
  theme: {
    type: String,
    default: '#006FEC',
  },
  color: {
    type: String,
    default: 'black',
  },
});
</script>

<style scoped>
.why-choose-us-container {
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
}

.why-choose-us-heading {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 10px;
}

.title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.title-color--blue {
  color: var(--primary-blue);
}

.title-color--orange {
  color: var(--primary-orange);
}

.text {
  color: var(--primary-black);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.stories .icon {
  display: none;
}

.stories .text {
  padding-top: 30px;
}

.stories .why-choose-us-container {
  padding: 20px 25px;
}
</style>
