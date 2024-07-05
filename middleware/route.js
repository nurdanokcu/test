export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path !== from.path && import.meta.client) {
    await nextTick();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }
});
