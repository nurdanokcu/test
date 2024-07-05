import {
  cloudHostingSetupManagementEN,
  cloudHostingSetupManagementDE,
} from '~/data/development/cloudHosting';
import { cmsDevelopmentEN, cmsDevelopmentDE } from '~/data/development/cmc';
import {
  customWebAppDevelopmentEN,
  customWebAppDevelopmentDE,
} from '~/data/development/customApplications';
import {
  eCommerceDevelopmentEN,
  eCommerceDevelopmentDE,
} from '~/data/development/eCommerce';
import {
  mobileAppDevelopmentEN,
  mobileAppDevelopmentDE,
} from '~/data/development/mobileApp';
import {
  regularMaintenanceUpdatesEN,
  regularMaintenanceUpdatesDE,
} from '~/data/development/regularMaintenance';
import {
  websiteDevelopmentEN,
  websiteDevelopmentDE,
} from '~/data/development/websiteDevelopment';
import {
  websitePerformanceOptimizationEN,
  websitePerformanceOptimizationDE,
} from '~/data/development/websitePerformance';
import { slugsDevelopmentDE, slugsDevelopmentEN } from '~/data/services/slugs';

export const developmentEN = [
  {
    id: 'en-1',
    category: 'Web Development & Digital Platforms',
    slug: slugsDevelopmentEN.webDevelopmentDigitalPlatforms,
    subCategories: [
      websiteDevelopmentEN,
      eCommerceDevelopmentEN,
      cmsDevelopmentEN,
      customWebAppDevelopmentEN,
      mobileAppDevelopmentEN,
    ],
  },
  {
    id: 'en-2',
    category: 'Security & Performance',
    slug: slugsDevelopmentEN.securityPerformance,
    subCategories: [
      websitePerformanceOptimizationEN,
      regularMaintenanceUpdatesEN,
      cloudHostingSetupManagementEN,
    ],
  },
];

export const developmentDE = [
  {
    id: 'de-1',
    category: 'Webentwicklung & digitale Plattformen',
    slug: slugsDevelopmentDE.webDevelopmentDigitalPlatforms,
    subCategories: [
      websiteDevelopmentDE,
      eCommerceDevelopmentDE,
      cmsDevelopmentDE,
      customWebAppDevelopmentDE,
      mobileAppDevelopmentDE,
    ],
  },
  {
    id: 'de-2',
    category: 'Sicherheit & Leistung',
    slug: slugsDevelopmentDE.securityPerformance,
    subCategories: [
      websitePerformanceOptimizationDE,
      regularMaintenanceUpdatesDE,
      cloudHostingSetupManagementDE,
    ],
  },
];
