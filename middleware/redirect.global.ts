export default defineNuxtRouteMiddleware(async (to, _from) => {
  if (to.path.startsWith('/en')) {
    const newPath = to.path.replace(/^\/en/, '');
    return navigateTo(newPath || '/');
  }
});
