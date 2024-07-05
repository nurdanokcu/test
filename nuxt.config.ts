// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Digital Marketing Agency - Propaganda Solutions -  United Kingdom England',
      link:[
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
          tagPriority: 0
        }
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: 'blfcUyz_o9hX53rn-i3ynInjB10DGv3-7HF78GVbLKs',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          tagPriority: 0,
        },
        {
          name: 'charset',
          content: 'utf-8',
          tagPriority: 0,
        },
        {
          name: 'color-scheme',
          content: 'light',
          tagPriority: 0,
        },
        {
          name: 'theme-color',
          content: '#faf8f5',
          tagPriority: 0,
        },
        {
          property: 'og:image',
          content: '/logo.png',
          tagPriority: 0,
        },
        {
          property: 'og:og:image:type',
          content: 'image/png',
          tagPriority: 0,
        },
        {
          property: 'og:type',
          content: 'website',
          tagPriority: 0,
        },
        {
          name: 'twitter:image',
          content: '/logo.png',
          tagPriority: 0,
        },
        {
          name: 'twitter:card',
          content: 'summary',
          tagPriority: 0,
        },
        {
          name: 'ogType',
          content: 'website',
          tagPriority: 0,
        },
      ],
    },
  },
  i18n: {
    baseUrl: process.env.APP_DOMAIN_URL,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
    locales: [
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de.json',
        iso: 'de-DE',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        iso: 'en-GB',
      },
    ],
    customRoutes: 'config',
    lazy: true,
    pages: {
      'about': {
        en: '/about-us',
        de: '/uber-uns',
      },
      'services': {
        en: '/services',
        de: '/dienstleistungen',
      },
      'development': {
        en: '/development',
        de: '/entwicklung',
      },
      'design': {
        en: '/design',
        de: '/design',
      },
      'digital': {
        en: '/digital-marketing',
        de: '/digitales-marketing',
      },
      'privacy': {
        en: '/privacy-policy',
        de: '/datenschutzbestimmungen',
      },
      'faq': {
        en: '/frequently-asked-questions',
        de: '/haufig-gestellte-fragen',
      },
      'studies/sektor': {
        en: '/case-study/sektor',
        de: '/fallstudie/sektor',
      },
      'studies/regio': {
        en: '/case-study/regio',
        de: '/fallstudie/regio',
      },
      'studies/citycampus': {
        en: '/case-study/citycampus',
        de: '/fallstudie/citycampus',
      },
      'studies/fahrwerk': {
        en: '/case-study/fahrwerk',
        de: '/fallstudie/fahrwerk',
      },
      'studies/fahrwerk-marketing': {
        en: '/case-study/fahrwerk-marketing',
        de: '/fallstudie/fahrwerk-marketing',
      },
      'studies/link': {
        en: '/case-study/link',
        de: '/fallstudie/link',
      },
      'studies/quadratum': {
        en: '/case-study/quadratum-potsdam',
        de: '/fallstudie/quadratum-potsdam',
      },
      'studies/wirebond': {
        en: '/case-study/wire-and-bond',
        de: '/fallstudie/wire-and-bond',
      },
      'studies/mybudapester': {
        en: '/case-study/mybudapester',
        de: '/fallstudie/mybudapester',
      },
      'studies/ahouse': {
        en: '/case-study/ahouse',
        de: '/fallstudie/ahouse',
      },
      'studies/quatsch': {
        en: '/case-study/quatsch',
        de: '/fallstudie/quatsch',
      },
      'studies/lilienthal': {
        en: '/case-study/lilienthal',
        de: '/fallstudie/lilienthal',
      },
      'studies/struktur': {
        en: '/case-study/struktur',
        de: '/fallstudie/struktur',
      },
    },
  },
  sitemap: {
    sources: ['/api/sitemap', '/api/sitemapBlogs'],
  },
  googleFonts: {
    families: {
      'Source Sans 3': {
        wght: [300, 400, 600, 700, 900],
        ital: [300, 400, 600, 700, 900],
      },
    },
    display: 'swap',
  },
  site: {
    url: process.env.APP_DOMAIN_URL,
  },
  pwa: {
    manifest: {
      name: 'Propaganda Solutions',
      short_name: 'Propaganda Solutions',
      theme_color: '#740F49',
      background_color: '#ffffff',
      display: 'standalone',
      description:
        'Digital Marketing Agency in the United Kingdom, we specialize in innovative site design and development. Our expert team excels in SEO optimization, elevating your online presence. Trust us for effective site promotion and advertisement Google, Facebook & Instagram ads',
      lang: 'en',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: undefined,
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
        },
      ],
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/layout.css',
    '~/assets/tiptap/tiptap.css',
    '~/assets/css/datePicker.css',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@formkit/auto-animate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    '@vite-pwa/nuxt',
  ],
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  devtools: {
    enabled: true,
  },
});
