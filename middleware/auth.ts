export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const token = useCookie('ps-auth');
  const localePath = useLocalePath();
  const { getUser } = userApi();
  const { user, isAuthenticated } = useAuth();

  if (!token.value) {
    return navigateTo(localePath('/login'));
  }
  if (user.value === null) {
    const { data, error } = await getUser();
    if (error.value) {
      isAuthenticated.value = false;
      return navigateTo(localePath('/login'));
    }
    if (data.value) {
      user.value = data.value.data;
    }
    if (!user.value) {
      return navigateTo(localePath('/login'));
    }
    if (user.value.role !== 'admin') {
      return navigateTo(localePath('/admin/dashboard'));
    }
    isAuthenticated.value = true;
  }
});
