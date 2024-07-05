import {
  digitalMarketingEN,
  digitalMarketingDE,
} from '~/data/digital-marketing';
import { designEN, designDE } from '~/data/design';
import { developmentEN, developmentDE } from '~/data/development';
import {
  slugsDigitalEN,
  slugsDigitalDE,
  slugsDevelopmentEN,
  slugsDevelopmentDE,
} from '~/data/services/slugs';

export const menuItemsEn = {
  about: {
    name: 'about',
    class: 'about-en',
    path: '/about-us',
    submenuItems: [
      {
        name: 'reviews',
        path: '/about-us',
        id: 'about-reviews',
      },
      {
        name: 'team',
        path: '/about-us',
        id: 'about-team',
      },
      {
        name: 'history',
        path: '/about-us',
        id: 'about-history',
      },
    ],
  },
  services: {
    name: 'service',
    class: 'service service-en',
    path: '/services',
    submenuItems: [
      {
        name: 'digital marketing',
        path: `/${slugsDigitalEN.digitalMarketing}/${digitalMarketingEN[0].slug}/${digitalMarketingEN[0].subCategories[0].slug}`,
      },
      {
        name: 'design',
        path: `/design/${designEN[0].slug}/${designEN[0].subCategories[0].slug}`,
      },
      {
        name: 'development',
        path: `/${slugsDevelopmentEN.development}/${developmentEN[0].slug}/${developmentEN[0].subCategories[0].slug}`,
      },
    ],
  },
  /* resources: {
    name: "resources",
    class: "resources-en",
    path: "/resources"
  }, */
  blog: {
    name: 'blog',
    class: 'blog-en',
    path: '/blog',
  },
  additional: {
    name: 'additional',
    class: 'additional',
    submenuItems: [
      {
        name: 'cookies',
        path: '/privacy-policy',
        id: 'cookies',
      },
      {
        name: 'policies',
        path: '/privacy-policy',
        id: 'privacy-policy',
      },
      {
        name: 'impressum',
        path: '/impressum',
      },
      {
        name: 'faq',
        path: '/frequently-asked-questions',
      },
    ],
  },
};

export const menuItemsDe = {
  about: {
    name: 'über',
    class: 'about-de',
    path: '/de/uber-uns',
    submenuItems: [
      {
        name: 'bewertungen',
        path: '/de/uber-uns',
        id: 'uber-uns-bewertungen',
      },
      {
        name: 'team',
        path: '/de/uber-uns',
        id: 'uber-uns-team',
      },
      {
        name: 'geschichte',
        path: '/de/uber-uns',
        id: 'uber-uns-geschichte',
      },
    ],
  },
  services: {
    name: 'dienst',
    class: 'service service-de',
    path: '/de/dienstleistungen',
    submenuItems: [
      {
        name: 'digitales marketing',
        path: `/de/${slugsDigitalDE.digitalMarketing}/${digitalMarketingDE[0].slug}/${digitalMarketingDE[0].subCategories[0].slug}`,
      },
      {
        name: 'design',
        path: `/de/design/${designDE[0].slug}/${designDE[0].subCategories[0].slug}`,
      },
      {
        name: 'entwicklung',
        path: `/de/${slugsDevelopmentDE.development}/${developmentDE[0].slug}/${developmentDE[0].subCategories[0].slug}`,
      },
    ],
  },
  /*   resources: {
    name: "Ressourcen",
    class: "resources-de",
    path: "/ressourcen"
  }, */
  blog: {
    name: 'bloggen',
    class: 'blog-de',
    path: '/de/blog',
  },
  additional: {
    name: 'zusätzlich',
    class: 'additional',
    path: '/de/datenschutzbestimmungen',
    submenuItems: [
      {
        name: 'cookies',
        path: '/de/datenschutzbestimmungen',
        id: 'cookies',
      },
      {
        name: 'richtlinien',
        path: '/de/datenschutzbestimmungen',
        id: 'privacy-policy',
      },
      {
        name: 'impressum',
        path: '/de/impressum',
      },
      {
        name: 'faq',
        path: '/de/haufig-gestellte-fragen',
      },
    ],
  },
};
