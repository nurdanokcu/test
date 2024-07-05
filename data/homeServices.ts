import {
  slugsDigitalEN,
  slugsDigitalDE,
  slugsDevelopmentEN,
  slugsDevelopmentDE,
  slugsDesignEN,
  slugsDesignDE,
} from '~/data/services/slugs';
import {
  navigationDigitalEN,
  navigationDigitalDE,
} from '~/data/services/navigationDigital';
import {
  navigationDevEN,
  navigationDevDE,
} from '~/data/services/navigationDev';
import {
  navigationDesignEN,
  navigationDesignDE,
} from '~/data/services/navigationDesign';
import { type TypeHomeServiceCard } from '~/types/services';

export const servicesCardsEn: TypeHomeServiceCard[] = [
  {
    id: 1,
    title: 'Digital Marketing',
    text: 'Promoting a website by increasing its visibility in search engine results pages (SERPs) through paid advertising and optimization techniques.',
    themeColor: '#006FEC',
    path: `/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.seoAudit}`,
    navigation: navigationDigitalEN.categories,
    pageSlug: `${slugsDigitalEN.digitalMarketing}`,
  },
  {
    id: 2,
    title: 'Design',
    text: 'Visually appealing and strategically effective marketing materials, such as logos, advertisements, packaging, and websites, that effectively communicate a brand\'s message and values to its target audience.',
    themeColor: '#740F49',
    path: `/design/${slugsDesignEN.webDesign}/${slugsDesignEN.webDesignDevelopment}`,
    navigation: navigationDesignEN.categories,
    pageSlug: 'design',
  },
  {
    id: 3,
    title: 'Development',
    text: 'Research, prototyping, testing, and refinement to ensure that the final product meets the needs and expectations of the target audience.',
    themeColor: '#FF5900',
    path: `/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.websiteDevelopment}`,
    navigation: navigationDevEN.categories,
    pageSlug: `${slugsDevelopmentEN.development}`,
  },
];

export const servicesCardsDe: TypeHomeServiceCard[] = [
  {
    id: 1,
    title: 'Digitales Marketing',
    text: 'Der strategische Einsatz von Online-Kanälen, um Kunden zu erreichen, Marken aufzubauen und Verkäufe zu fördern.',
    themeColor: '#006FEC',
    path: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.seoAudit}`,
    navigation: navigationDigitalDE.categories,
    pageSlug: `${slugsDigitalDE.digitalMarketing}`,
  },
  {
    id: 2,
    title: 'Design',
    text: 'Optisch ansprechende und strategisch effektive Marketingmaterialien, wie wie Logos, Anzeigen, Verpackungen und Websites, die die Botschaft und die die die Botschaft und die Werte Ihrer Marke effektiv an die Zielgruppe vermitteln.',
    themeColor: '#740F49',
    path: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.webDesignDevelopment}`,
    navigation: navigationDesignDE.categories,
    pageSlug: 'design',
  },
  {
    id: 3,
    title: 'Entwicklung',
    text: 'Forschung, Prototyping, Testen und Verfeinerung, um sicherzustellen, dass das endgültige Produkt den Bedürfnissen und Erwartungen der Zielgruppe entspricht.',
    themeColor: '#FF5900',
    path: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.websiteDevelopment}`,
    navigation: navigationDevDE.categories,
    pageSlug: `${slugsDevelopmentDE.development}`,
  },
];
