import { seoAuditEN, seoAuditDE } from '~/data/digital-marketing/seoAudit.js';
import {
  technicalSeoEN,
  technicalSeoDE,
} from '~/data/digital-marketing/technicalSeo.js';
import {
  googleSearchAdsEN,
  googleSearchAdsDE,
} from '~/data/digital-marketing/googleSearch.js';
import {
  googleDisplayAdsEN,
  googleDisplayAdsDE,
} from '~/data/digital-marketing/googleDisplay.js';
import {
  seoLinkBuildingEN,
  seoLinkBuildingDE,
} from '~/data/digital-marketing/seoLinkBuilding.js';
import {
  internationalSeoEN,
  internationalSeoDE,
} from '~/data/digital-marketing/internationalSeo.js';
import { localSeoEN, localSeoDE } from '~/data/digital-marketing/localSeo.js';
import {
  googleRemarketingAdsDE,
  googleRemarketingAdsEN,
} from '~/data/digital-marketing/googleRemarketing.js';
import {
  googleShoppingEN,
  googleShoppingDE,
} from '~/data/digital-marketing/googleShopping.js';
import {
  youtubeAdsEN,
  youtubeAdsDE,
} from '~/data/digital-marketing/youtube.js';
import { appAdsEN, appAdsDE } from '~/data/digital-marketing/appAds.js';
import { ppcAuditEN, ppcAuditDE } from '~/data/digital-marketing/ppcAudit.js';
import { bingAdsDE, bingAdsEN } from '~/data/digital-marketing/bingAds.js';
import {
  facebookAdsEN,
  facebookAdsDE,
} from '~/data/digital-marketing/facebookAds.js';
import {
  instagramAdsDE,
  instagramAdsEN,
} from '~/data/digital-marketing/instagramAds.js';
import {
  linkedinAdsEN,
  linkedinAdsDE,
} from '~/data/digital-marketing/linkedinAds.js';
import {
  pinterestAdsEN,
  pinterestAdsDE,
} from '~/data/digital-marketing/pinterestAds.js';
import {
  tiktokAdsEN,
  tiktokAdsDE,
} from '~/data/digital-marketing/tiktokAds.js';
import {
  socialMediaDesignEN,
  socialMediaDesignDE,
} from '~/data/digital-marketing/socialMediaDesign.js';
import {
  pageMarketingStrategyEN,
  pageMarketingStrategyDE,
} from '~/data/digital-marketing/pageMarketingStrategy.js';
import {
  contentForSmmEN,
  contentForSmmDE,
} from '~/data/digital-marketing/contentForSMM.js';
import {
  socialMediaAuditEN,
  socialMediaAuditDE,
} from '~/data/digital-marketing/socialMediaAudit.js';
import {
  contentForSiteEN,
  contentForSiteDE,
} from '~/data/digital-marketing/contentForSite.js';
import {
  amazonAdvertisingEN,
  amazonAdvertisingDE,
} from '~/data/digital-marketing/amazonAdvertising.js';
import {
  ebayAdvertisingEN,
  ebayAdvertisingDE,
} from '~/data/digital-marketing/ebayAdvertising.js';
import { slugsDigitalEN, slugsDigitalDE } from '~/data/services/slugs';

export const digitalMarketingEN = [
  {
    id: 'en-1',
    category: 'Search Engine Optimisation',
    slug: slugsDigitalEN.seo,
    subCategories: [
      seoAuditEN,
      technicalSeoEN,
      seoLinkBuildingEN,
      internationalSeoEN,
      localSeoEN,
    ],
  },
  {
    id: 'en-2',
    category: 'PPC Management',
    slug: slugsDigitalEN.ppcManagement,
    subCategories: [
      googleSearchAdsEN,
      googleDisplayAdsEN,
      googleRemarketingAdsEN,
      googleShoppingEN,
      youtubeAdsEN,
      appAdsEN,
      ppcAuditEN,
      bingAdsEN,
    ],
  },
  {
    id: 'en-3',
    category: 'Paid Social Advertisement',
    slug: slugsDigitalEN.paidSocialAdvertisement,
    subCategories: [
      facebookAdsEN,
      instagramAdsEN,
      linkedinAdsEN,
      pinterestAdsEN,
      tiktokAdsEN,
    ],
  },
  {
    id: 'en-4',
    category: 'Social Media Marketing',
    slug: slugsDigitalEN.socialMediaMarketing,
    subCategories: [
      socialMediaDesignEN,
      pageMarketingStrategyEN,
      contentForSmmEN,
      socialMediaAuditEN,
    ],
  },
  {
    id: 'en-5',
    category: 'Content Services',
    slug: slugsDigitalEN.contentServices,
    subCategories: [contentForSiteEN, contentForSmmEN],
  },
  {
    id: 'en-6',
    category: 'Marketplace promotion',
    slug: slugsDigitalEN.marketPlacePromotion,
    subCategories: [amazonAdvertisingEN, ebayAdvertisingEN],
  },
  {
    id: 'en-7',
    category: 'Digital Audit',
    slug: slugsDigitalEN.digitalAudit,
    subCategories: [ppcAuditEN, seoAuditEN, socialMediaAuditEN],
  },
];

export const digitalMarketingDE = [
  {
    id: 'de-1',
    category: 'Suchmaschinenoptimierung',
    slug: slugsDigitalDE.seo,
    subCategories: [
      seoAuditDE,
      technicalSeoDE,
      seoLinkBuildingDE,
      internationalSeoDE,
      localSeoDE,
    ],
  },
  {
    id: 'de-2',
    category: 'PPC Management',
    slug: slugsDigitalDE.ppcManagement,
    subCategories: [
      googleSearchAdsDE,
      googleDisplayAdsDE,
      googleRemarketingAdsDE,
      googleShoppingDE,
      youtubeAdsDE,
      appAdsDE,
      ppcAuditDE,
      bingAdsDE,
    ],
  },
  {
    id: 'de-3',
    category: 'Bezahlte Social Media Werbung',
    slug: slugsDigitalDE.paidSocialAdvertisement,
    subCategories: [
      facebookAdsDE,
      instagramAdsDE,
      linkedinAdsDE,
      pinterestAdsDE,
      tiktokAdsDE,
    ],
  },
  {
    id: 'de-4',
    category: 'Social Media Marketing',
    slug: slugsDigitalDE.socialMediaMarketing,
    subCategories: [
      socialMediaDesignDE,
      pageMarketingStrategyDE,
      contentForSmmDE,
      socialMediaAuditDE,
    ],
  },
  {
    id: 'de-5',
    category: 'Inhaltsdienste',
    slug: slugsDigitalDE.contentServices,
    subCategories: [contentForSiteDE, contentForSmmDE],
  },
  {
    id: 'de-6',
    category: 'Marktplatz-Promotion',
    slug: slugsDigitalDE.marketPlacePromotion,
    subCategories: [amazonAdvertisingDE, ebayAdvertisingDE],
  },
  {
    id: 'de-7',
    category: 'Digital Audit',
    slug: slugsDigitalDE.digitalAudit,
    subCategories: [ppcAuditDE, seoAuditDE, socialMediaAuditDE],
  },
];
