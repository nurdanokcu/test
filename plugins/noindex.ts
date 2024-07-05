// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    if (window.location.hostname === process.env.APP_DEPLOYMENT_DOMAIN) {
      useHead({
        meta: [{ name: 'robots', content: 'noindex, nofollow' }],
      });
    }
  }
});
