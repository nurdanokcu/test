<script setup lang="ts">
const props = defineProps({
  time: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'gradient',
  },
});

function convertTimeFormat(timeStr: string) {
  const parts = timeStr.split(' ');
  let minutes = 0;
  let seconds = 0;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i + 1] === 'min') {
      minutes = parseInt(parts[i]);
    } else if (parts[i + 1] === 'sec') {
      seconds = parseInt(parts[i]);
    }
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

const formattedTime = computed(() => convertTimeFormat(props.time));
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
  <div class="time">
    <div class="time-content">
      <p class="time-text">
        {{ $t("admin.blog.readingTime") }}
      </p>
      <p class="time-reading">
        <span :style="styleObjectText" class="time-number">
          {{ formattedTime }}
        </span>
        <span :style="styleObjectText" class="time-unit">
          {{ $t("admin.blog.minute") }}
        </span>
      </p>
    </div>
    <IconsAdminTimer
      class="timer-icon"
      :is-gradient="color === 'gradient'"
      :color="color"
    />
  </div>
</template>

<style scoped>
.time {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0 4px 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.time-text {
  color: var(--secondary-dark-blue);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.time-reading {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.time-number {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.time-unit {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.timer-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-shrink: 0;
  opacity: 0.2;
}
</style>
