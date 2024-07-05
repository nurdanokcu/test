import { slugsDevelopmentEN, slugsDevelopmentDE } from '~/data/services/slugs';

export const navigationDevEN = {
  pageSlug: slugsDevelopmentEN.development,
  categories: [
    {
      title: 'Web Development',
      slug: slugsDevelopmentEN.webDevelopmentDigitalPlatforms,
      subCategories: [
        {
          title: 'Website Development',
          slug: slugsDevelopmentEN.websiteDevelopment,
        },
        {
          title: 'eCommerce Development',
          slug: slugsDevelopmentEN.eCommerce,
        },
        {
          title: 'CMS Development',
          slug: slugsDevelopmentEN.cms,
        },
        {
          title: 'Custom Web Application Development',
          slug: slugsDevelopmentEN.customWebApplication,
        },
        {
          title: 'Mobile App Development',
          slug: slugsDevelopmentEN.mobileAppDevelopment,
        },
      ],
    },
    {
      title: 'Security & Performance',
      slug: slugsDevelopmentEN.securityPerformance,
      subCategories: [
        {
          title: 'Website Performance Optimization',
          slug: slugsDevelopmentEN.websitePerformance,
        },
        {
          title: 'Regular Maintenance & Updates',
          slug: slugsDevelopmentEN.regularMaintenance,
        },
        {
          title: 'Cloud Hosting Setup & Management',
          slug: slugsDevelopmentEN.cloudHosting,
        },
      ],
    },
  ],
};

export const navigationDevDE = {
  pageSlug: slugsDevelopmentDE.development,
  categories: [
    {
      title: 'Webentwicklung',
      slug: slugsDevelopmentDE.webDevelopmentDigitalPlatforms,
      subCategories: [
        {
          title: 'Website-Entwicklung',
          slug: slugsDevelopmentDE.websiteDevelopment,
        },
        {
          title: 'E-Commerce-Entwicklung',
          slug: slugsDevelopmentDE.eCommerce,
        },
        {
          title: 'CMS-Entwicklung',
          slug: slugsDevelopmentDE.cms,
        },
        {
          title: 'Entwicklung individueller Webanwendungen',
          slug: slugsDevelopmentDE.customWebApplication,
        },
        {
          title: 'Mobile App-Entwicklung',
          slug: slugsDevelopmentDE.mobileAppDevelopment,
        },
      ],
    },
    {
      title: 'Sicherheit & Leistung',
      slug: slugsDevelopmentDE.securityPerformance,
      subCategories: [
        {
          title: 'Optimierung der Website-Performance',
          slug: slugsDevelopmentDE.websitePerformance,
        },
        {
          title: 'Regelmäßige Wartung & Updates',
          slug: slugsDevelopmentDE.regularMaintenance,
        },
        {
          title: 'Cloud-Hosting-Einrichtung & -Verwaltung',
          slug: slugsDevelopmentDE.cloudHosting,
        },
      ],
    },
  ],
};
