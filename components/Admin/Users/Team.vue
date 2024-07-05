<script setup lang="ts">
import { type TypeUser, type GroupedUsers } from '~/types/user';

const { getUsers } = userManagementApi();
const { users } = useUsers();

const isLoading = ref(true);
const errorMessage = ref('');

const groupedUsers = computed(() => groupByRole(users.value));

// Functions
const handleFetchUsers = async () => {
  isLoading.value = true;
  try {
    const response = await getUsers();
    users.value = response.data;
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    if (error.statusCode === 500) {
      errorMessage.value = 'Something went wrong. Please try again later.';
    } else {
      errorMessage.value = error.data?.message;
    }
  }
};
function groupByRole(data: TypeUser[]): GroupedUsers[] {
  const groupedData = data.reduce((acc: GroupedUsers[], user: TypeUser) => {
    const role = user.role || 'Unspecified';
    let group = acc.find(g => g.role === role);
    if (!group) {
      group = { role, users: [] };
      acc.push(group);
    }
    group.users.push(user);
    return acc;
  }, []);

  return groupedData;
}

onMounted(async () => {
  if (users.value.length > 0) {
    isLoading.value = false;
    return;
  }
  if (users.value.length === 0) {
    await handleFetchUsers();
  }
});
</script>

<template>
  <div class="team">
    <div class="team-content">
      <h1 class="team-title">
        {{ $t("admin.manageUser.teamMembers") }}
      </h1>
      <AdminLoadingBoxes v-if="isLoading" :height="'72px'" />
      <CommonTransitionError>
        <CommonErrorMessage v-if="errorMessage" :error-message="errorMessage" />
      </CommonTransitionError>
      <div v-if="groupedUsers.length > 0 && !isLoading" class="team-users">
        <AdminUsersTeamGroup
          v-for="group in groupedUsers"
          :key="group.role"
          :group="group"
        />
      </div>
    </div>
    <AdminUsersNewUser />
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  min-height: calc(100vh - var(--nav-top-height) - 48px);
}
.team-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex-grow: 1;
}
.team-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
}
.team-users {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
