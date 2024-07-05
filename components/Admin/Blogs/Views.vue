<script setup lang="ts">
const props = defineProps({
  views: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: 'gradient',
  },
  hasChartIcon: {
    type: Boolean,
    default: true,
  },
  borderRadius: {
    type: String,
    default: '8px',
  },
});

const styleObjectText = computed(() => {
  if (props.color === 'gradient') {
    return `background: var(--Gradient-Logo, linear-gradient(112deg, #2400FF 0.23%, #EB6F0E 101.08%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`;
  } else {
    return {
      color: props.color,
    };
  }
});
</script>

<template>
  <div
    :style="{
      borderRadius: borderRadius,
    }"
    class="views"
  >
    <p class="views-text">
      {{ $t("admin.blog.views") }}
    </p>
    <p :style="styleObjectText" class="views-number">
      {{ views }}
    </p>
    <div v-if="hasChartIcon" class="icon-chart-wrapper">
      <IconsAdminUnion :is-gradient="color === 'gradient'" :color="color" />
    </div>
    <div class="icon-eye-wrapper">
      <IconsAdminEyeGradient v-if="color === 'gradient'" />
      <IconsAdminEye v-else :color="color" />
    </div>
  </div>
</template>

<style scoped>
.views {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  padding: 4px 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.views-text {
  color: var(--secondary-dark-blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 40px;
}
.views-number {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: fit-content;
}
.icon-eye-wrapper {
  position: absolute;
  right: 4px;
  top: 8px;
  transform: translateX(50%);
  opacity: 0.2;
}
.icon-chart-wrapper {
  display: flex;
  justify-content: center;
}
</style>
