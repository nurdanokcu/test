import {
  slugsDigitalEN,
  slugsDigitalDE,
  slugsDesignEN,
  slugsDesignDE,
  slugsDevelopmentEN,
  slugsDevelopmentDE,
} from '~/data/services/slugs';

export const servicesGridItemsEN = [
  {
    name: 'Digital Marketing',
    path: `/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.seoAudit}`,
  },
  {
    name: 'design',
    path: `/design/${slugsDesignEN.webDesign}/${slugsDesignEN.webDesignDevelopment}`,
  },
  {
    name: 'development',
    path: `/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.websiteDevelopment}`,
  },
];
export const servicesGridItemsDE = [
  {
    name: 'Digitales Marketing',
    path: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.seoAudit}`,
  },
  {
    name: 'design',
    path: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.webDesignDevelopment}`,
  },
  {
    name: 'Entwicklung',
    path: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.websiteDevelopment}`,
  },
];
