<script setup lang="ts">
interface Option {
  id: string;
  label: string;
  checked: boolean;
}
const props = defineProps({
  option: {
    type: Object as () => Option,
    required: true,
  },
});
const emits = defineEmits(['update:checked']);
const handleUpdate = (event: Event) => {
  emits(
    'update:checked',
    props.option.id,
    (event.target as HTMLInputElement).checked,
  );
};
</script>

<template>
  <label class="wrapper">
    {{ option.label }}
    <input
      :class="['checkbox', { 'checkbox--checked': option.checked }]"
      type="radio"
      :aria-label="option.label"
      tabindex="0"
      :aria-checked="option.checked"
      :checked="option.checked"
      @change="handleUpdate($event)"
    />
    <span class="checkmark-wrapper">
      <span class="checkmark"></span>
    </span>
  </label>
</template>

<style scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
  padding: 2px;
}
.checkmark {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
}

.wrapper:hover .checkmark {
  background-color: var(--primary-white-hover);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.wrapper .checkbox--checked ~ .checkmark-wrapper .checkmark:after {
  display: block;
}

.wrapper .checkmark:after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(
    --gradient-logo,
    linear-gradient(112deg, #2400ff 0.23%, #eb6f0e 101.08%)
  );
}
</style>
