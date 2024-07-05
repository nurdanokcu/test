import {
  webDesignDevelopmentEN,
  webDesignDevelopmentDE,
} from '~/data/design/websiteDesign';
import { uiUxDesignEN, uiUxDesignDE } from '~/data/design/uiUxDesign';
import {
  socialMediaGraphicsEN,
  socialMediaGraphicsDE,
} from '~/data/design/socialMediaGraphics';
import {
  emailNewsletterDesignEN,
  emailNewsletterDesignDE,
} from '~/data/design/emailNewsletterDesign';
import {
  infographicDesignEN,
  infographicDesignDE,
} from '~/data/design/infographicDesign';
import { graphicDesignEN, graphicDesignDE } from '~/data/design/graphicDesign';
import {
  packagingDesignEN,
  packagingDesignDE,
} from '~/data/design/packagingDesign';
import { printDesignEN, printDesignDE } from '~/data/design/printDesign';
import {
  typographyDesignEN,
  typographyDesignDE,
} from '~/data/design/typographyDesign';
import { iconDesignEN, iconDesignDE } from '~/data/design/iconDesign';
import { slugsDesignEN, slugsDesignDE } from '~/data/services/slugs';

export const designEN = [
  {
    id: 'en-1',
    category: 'Web Design & Digital Presence',
    slug: slugsDesignEN.webDesign,
    subCategories: [
      webDesignDevelopmentEN,
      uiUxDesignEN,
      socialMediaGraphicsEN,
      emailNewsletterDesignEN,
      infographicDesignEN,
    ],
  },
  {
    id: 'en-2',
    category: 'Branding & Identity',
    slug: slugsDesignEN.brandingIdentity,
    subCategories: [
      graphicDesignEN,
      packagingDesignEN,
      printDesignEN,
      typographyDesignEN,
      iconDesignEN,
    ],
  },
];

export const designDE = [
  {
    id: 'de-1',
    category: 'Webdesign & digitale Präsenz',
    slug: slugsDesignDE.webDesign,
    subCategories: [
      webDesignDevelopmentDE,
      uiUxDesignDE,
      socialMediaGraphicsDE,
      emailNewsletterDesignDE,
      infographicDesignDE,
    ],
  },
  {
    id: 'de-2',
    category: 'Branding & Identität',
    slug: slugsDesignDE.brandingIdentity,
    subCategories: [
      graphicDesignDE,
      packagingDesignDE,
      printDesignDE,
      typographyDesignDE,
      iconDesignDE,
    ],
  },
];
