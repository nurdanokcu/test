<script setup lang="ts">
import { type GroupedUsers } from '~/types/user';

defineProps({
  group: {
    type: Object as PropType<GroupedUsers>,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <p class="item-level">
      {{ group.role }}
    </p>
    <TransitionGroup
      tag="ul"
      name="fade"
      class="item-users"
    >
      <AdminUsersTeamUser
        v-for="user in group.users"
        :key="user.id"
        :user-item="user"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.item-level {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--gradient-logo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  text-transform: capitalize;
}
.item-users {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
.fade-leave-active {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
