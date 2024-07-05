export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue-renderer:ssr:context', (context) => {
    if (context.nuxt && context.nuxt.head) {
      const head = context.nuxt.head;

      // Move meta tags to the top
      head.meta = head.meta || [];
      head.link = head.link || [];
      head.style = head.style || [];
      head.script = head.script || [];
      console.log('head', head);

      context.nuxt.head = {
        ...head,
        meta: head.meta,
        link: head.link,
        style: head.style,
        script: head.script,
      };
    }
  });
});
