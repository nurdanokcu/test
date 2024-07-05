export default defineNuxtRouteMiddleware((_to, _from) => {
  const token = useCookie('ps-auth');
  const localePath = useLocalePath();
  const { user } = useAuth();
  if (!token.value) {
    return navigateTo(localePath('/login'));
  }
  if (user.value !== null) {
    if (user.value.role !== 'admin') {
      return navigateTo(localePath('/admin/dashboard'));
    }
  }
});
