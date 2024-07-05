<script setup lang="ts">
import { type TypeActionHistory } from '~/types/privateBlog';

const props = defineProps({
  action: {
    type: Object as PropType<TypeActionHistory>,
    required: true,
  },
});

const initials = computed(() => {
  const name = props.action.user_id.name.split(' ');
  return name.length > 1
    ? name[0].charAt(0) + '.' + name[1].charAt(0)
    : name[0].charAt(0);
});
</script>

<template>
  <div class="action">
    <div class="user-img-wrapper">
      <img
        v-if="action.user_id.profile_photo_url !== null"
        class="user-img"
        :src="action.user_id.profile_photo_url"
        :alt="action.user_id.name"
        loading="lazy"
      />
      <div v-else class="user-img">
        {{ initials }}
      </div>
    </div>
    <div class="user-info">
      <p class="user-name">
        {{ action.user_id.name }}
      </p>
      <p v-if="action.user_id.position" class="user-position">
        {{ action.user_id.position }}
      </p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_2920_23552)">
        <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#000B58" />
      </g>
      <defs>
        <clipPath id="clip0_2920_23552">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
    <p class="action-text">
      {{ action.description }}
    </p>
  </div>
</template>

<style scoped>
.action {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.user-img-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  flex-shrink: 0;
}
.user-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-dark-blue);
  background: var(--admin-page-white);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.user-info,
.action-text {
  width: 42%;
}
.user-name {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.user-position {
  color: var(--secondary-dark-blue);
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.action-text {
  color: var(--secondary-dark-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
