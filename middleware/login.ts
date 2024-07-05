export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const token = useCookie('ps-auth');
  const localePath = useLocalePath();
  const { getUser } = userApi();
  const { user, isAuthenticated } = useAuth();

  if (token.value) {
    if (user.value === null) {
      const { data, error } = await getUser();
      if (error.value) {
        isAuthenticated.value = false;
        return;
      }
      if (data.value) {
        user.value = data.value.data;
        isAuthenticated.value = true;
        return navigateTo(localePath('/admin/dashboard'));
      }
    }
    if (user.value) {
      isAuthenticated.value = true;
      return navigateTo(localePath('/admin/dashboard'));
    }
  }
});
