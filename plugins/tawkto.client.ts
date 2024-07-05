import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TawkMessengerVue, {
    propertyId: '6576e17f07843602b800b87b',
    widgetId: '1hhc61muu',
  });
});
