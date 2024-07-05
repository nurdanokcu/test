import { slugsDigitalEN, slugsDigitalDE } from '~/data/services/slugs';
import { marketplacePromotion } from '~/assets/images/service_images';

export const marketPlacePromotionEN = {
  id: 'en-marketplace-promotion',
  name: 'Marketplace promotion',
  slug: slugsDigitalEN.marketPlacePromotion,
  icon: marketplacePromotion,
  subCategories: [
    {
      name: 'Amazon Advertising',
      slug: slugsDigitalEN.amazon,
      texts: [
        'Boost your product visibility on the world\'s largest online marketplace. We specialize in targeted ad campaigns that increase product discoverability and sales, leveraging Amazon\'s vast customer base.',
      ],
    },
    {
      name: 'Ebay Advertising',
      slug: slugsDigitalEN.ebay,
      texts: [
        'Maximizing your product\'s exposure on one of the leading online marketplaces. We craft strategic ad campaigns that attract more buyers, enhancing visibility and sales on E-bay’s diverse and competitive platform.',
      ],
    },
  ],
};

export const marketPlacePromotionDE = {
  id: 'de-marketplace-promotion',
  name: 'Marktplatz-Promotion',
  slug: slugsDigitalDE.marketPlacePromotion,
  icon: marketplacePromotion,
  subCategories: [
    {
      name: 'Amazon-Werbung',
      slug: slugsDigitalDE.amazon,
      texts: [
        'Steigern Sie die Sichtbarkeit Ihres Produkts auf dem weltweit größten Online-Marktplatz. Wir sind spezialisiert auf zielgerichtete Werbekampagnen, die die Auffindbarkeit und den Verkauf von Produkten steigern und die riesige Kundenbasis von Amazon nutzen.',
      ],
    },
    {
      name: 'Ebay-Werbung',
      slug: slugsDigitalDE.ebay,
      texts: [
        'Maximieren Sie die Sichtbarkeit Ihres Produkts auf einem der führenden Online-Marktplätze. Wir gestalten strategische Werbekampagnen, die mehr Käufer anziehen und die Sichtbarkeit und Verkäufe auf der vielfältigen und wettbewerbsintensiven Plattform von Ebay steigern.',
      ],
    },
  ],
};
