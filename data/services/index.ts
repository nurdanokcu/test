import { seoEN, seoDE } from '~/data/services/seo';
import { ppcEN, ppcDE } from '~/data/services/ppc';
import {
  paidSocialAdsEN,
  paidSocialAdsDE,
} from '~/data/services/paidSocialAds';
import { webDevEN, webDevDE } from '~/data/services/webDev';
import { webDesignEN, webDesignDE } from '~/data/services/webDesign';
import { securityEN, securityDE } from '~/data/services/security';
import { brandingEN, brandingDE } from '~/data/services/branding';
import {
  socialMediaMarketingEN,
  socialMediaMarketingDE,
} from '~/data/services/socialMediaMarketing';
import {
  contentServicesEN,
  contentServicesDE,
} from '~/data/services/contentServices';
import {
  marketPlacePromotionEN,
  marketPlacePromotionDE,
} from '~/data/services/marketPlace';
import { digitalAuditEN, digitalAuditDE } from '~/data/services/digitalAudit';
import { type TypeServicePageSection } from '~/types/services';

export const digitalMarketingEN: TypeServicePageSection = {
  themeColor: '#006FEC',
  themeBgColor: 'rgba(0, 111, 236, 0.10)',
  themeHoverColor: 'rgba(0, 111, 236, 0.30)',
  pageSlug: 'digital-marketing',
  services: [
    seoEN,
    ppcEN,
    paidSocialAdsEN,
    socialMediaMarketingEN,
    contentServicesEN,
    marketPlacePromotionEN,
    digitalAuditEN,
  ],
};
export const digitalMarketingDE: TypeServicePageSection = {
  themeColor: '#006FEC',
  themeBgColor: 'rgba(0, 111, 236, 0.10)',
  themeHoverColor: 'rgba(0, 111, 236, 0.30)',
  pageSlug: 'digitales-marketing',
  services: [
    seoDE,
    ppcDE,
    paidSocialAdsDE,
    socialMediaMarketingDE,
    contentServicesDE,
    marketPlacePromotionDE,
    digitalAuditDE,
  ],
};

export const developmentEN: TypeServicePageSection = {
  themeColor: '#FF5900',
  themeBgColor: 'rgba(178, 116, 70, 0.10)',
  themeHoverColor: 'rgba(178, 116, 70, 0.30)',
  pageSlug: 'development',
  services: [webDevEN, securityEN],
};
export const developmentDE: TypeServicePageSection = {
  themeColor: '#FF5900',
  themeBgColor: 'rgba(178, 116, 70, 0.10)',
  themeHoverColor: 'rgba(178, 116, 70, 0.30)',
  pageSlug: 'entwicklung',
  services: [webDevDE, securityDE],
};
export const designEN: TypeServicePageSection = {
  themeColor: '#740F49',
  themeBgColor: 'rgba(116, 15, 73, 0.10)',
  themeHoverColor: 'rgba(116, 15, 73, 0.30)',
  pageSlug: 'design',
  services: [webDesignEN, brandingEN],
};
export const designDE: TypeServicePageSection = {
  themeColor: '#740F49',
  themeBgColor: 'rgba(116, 15, 73, 0.10)',
  themeHoverColor: 'rgba(116, 15, 73, 0.30)',
  pageSlug: 'design',
  services: [webDesignDE, brandingDE],
};
