import {
  slugsDigitalEN,
  slugsDigitalDE,
  slugsDesignEN,
  slugsDesignDE,
  slugsDevelopmentEN,
  slugsDevelopmentDE,
} from '~/data/services/slugs';

export default defineSitemapEventHandler(() => {
  const links = [];

  // English version
  const enLinks = [
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.seoAudit}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.technicalSeo}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.seoLinkBuilding}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.internationalSeo}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.seo}/${slugsDigitalEN.localSeo}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.searchAds}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.displayAds}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.remarketing}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.shoppingAds}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.youtubeAds}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.appAds}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.ppcAudit}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.ppcManagement}/${slugsDigitalEN.bing}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.paidSocialAdvertisement}/${slugsDigitalEN.facebook}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.paidSocialAdvertisement}/${slugsDigitalEN.instagram}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.paidSocialAdvertisement}/${slugsDigitalEN.linkedin}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.paidSocialAdvertisement}/${slugsDigitalEN.pinterest}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.paidSocialAdvertisement}/${slugsDigitalEN.tiktok}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.socialMediaMarketing}/${slugsDigitalEN.pageCreationAndDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.socialMediaMarketing}/${slugsDigitalEN.pageMarketingStrategy}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.socialMediaMarketing}/${slugsDigitalEN.contentForSmm}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.socialMediaMarketing}/${slugsDigitalEN.socialMediaAudit}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.contentServices}/${slugsDigitalEN.contentForSite}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.contentServices}/${slugsDigitalEN.contentForSmm}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.marketPlacePromotion}/${slugsDigitalEN.amazon}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.marketPlacePromotion}/${slugsDigitalEN.ebay}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.digitalAudit}/${slugsDigitalEN.ppcAudit}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.digitalAudit}/${slugsDigitalEN.seoAudit}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDigitalEN.digitalMarketing}/${slugsDigitalEN.digitalAudit}/${slugsDigitalEN.socialMediaAudit}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.webDesign}/${slugsDesignEN.webDesignDevelopment}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.webDesign}/${slugsDesignEN.uiUxDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.webDesign}/${slugsDesignEN.socialMediaGraphics}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.webDesign}/${slugsDesignEN.emailNewsLetter}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.webDesign}/${slugsDesignEN.infoGraphicDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.brandingIdentity}/${slugsDesignEN.graphicDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.brandingIdentity}/${slugsDesignEN.packagingDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.brandingIdentity}/${slugsDesignEN.printDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.brandingIdentity}/${slugsDesignEN.typographyDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/design/${slugsDesignEN.brandingIdentity}/${slugsDesignEN.iconDesign}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.websiteDevelopment}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.eCommerce}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.cms}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.customWebApplication}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.webDevelopmentDigitalPlatforms}/${slugsDevelopmentEN.mobileAppDevelopment}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.securityPerformance}/${slugsDevelopmentEN.websitePerformance}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.securityPerformance}/${slugsDevelopmentEN.regularMaintenance}`,
      lang: 'en',
    },
    {
      loc: `/en/${slugsDevelopmentEN.development}/${slugsDevelopmentEN.securityPerformance}/${slugsDevelopmentEN.cloudHosting}`,
      lang: 'en',
    },
  ];
  links.push(...enLinks);

  // German version
  const deLinks = [
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.seoAudit}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.technicalSeo}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.seoLinkBuilding}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.internationalSeo}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.seo}/${slugsDigitalDE.localSeo}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.searchAds}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.displayAds}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.remarketing}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.shoppingAds}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.youtubeAds}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.appAds}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.ppcAudit}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.ppcManagement}/${slugsDigitalDE.bing}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.paidSocialAdvertisement}/${slugsDigitalDE.facebook}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.paidSocialAdvertisement}/${slugsDigitalDE.instagram}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.paidSocialAdvertisement}/${slugsDigitalDE.linkedin}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.paidSocialAdvertisement}/${slugsDigitalDE.pinterest}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.paidSocialAdvertisement}/${slugsDigitalDE.tiktok}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.socialMediaMarketing}/${slugsDigitalDE.pageCreationAndDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.socialMediaMarketing}/${slugsDigitalDE.pageMarketingStrategy}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.socialMediaMarketing}/${slugsDigitalDE.contentForSmm}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.socialMediaMarketing}/${slugsDigitalDE.socialMediaAudit}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.contentServices}/${slugsDigitalDE.contentForSite}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.contentServices}/${slugsDigitalDE.contentForSmm}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.marketPlacePromotion}/${slugsDigitalDE.amazon}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.marketPlacePromotion}/${slugsDigitalDE.ebay}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.digitalAudit}/${slugsDigitalDE.ppcAudit}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.digitalAudit}/${slugsDigitalDE.seoAudit}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDigitalDE.digitalMarketing}/${slugsDigitalDE.digitalAudit}/${slugsDigitalDE.socialMediaAudit}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.webDesignDevelopment}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.uiUxDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.socialMediaGraphics}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.emailNewsLetter}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.webDesign}/${slugsDesignDE.infoGraphicDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.brandingIdentity}/${slugsDesignDE.graphicDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.brandingIdentity}/${slugsDesignDE.packagingDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.brandingIdentity}/${slugsDesignDE.printDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.brandingIdentity}/${slugsDesignDE.typographyDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/design/${slugsDesignDE.brandingIdentity}/${slugsDesignDE.iconDesign}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.websiteDevelopment}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.eCommerce}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.cms}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.customWebApplication}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.webDevelopmentDigitalPlatforms}/${slugsDevelopmentDE.mobileAppDevelopment}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.securityPerformance}/${slugsDevelopmentDE.websitePerformance}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.securityPerformance}/${slugsDevelopmentDE.regularMaintenance}`,
      lang: 'de',
    },
    {
      loc: `/de/${slugsDevelopmentDE.development}/${slugsDevelopmentDE.securityPerformance}/${slugsDevelopmentDE.cloudHosting}`,
      lang: 'de',
    },
  ];
  links.push(...deLinks);

  return links;
});
