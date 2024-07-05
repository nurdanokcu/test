import { slugsDigitalEN, slugsDigitalDE } from '~/data/services/slugs';
import { paidSocialAdvertisement } from '~/assets/images/service_images';

export const paidSocialAdsEN = {
  id: 'en-paid-social-ads',
  name: 'Paid Social Advertisement',
  slug: slugsDigitalEN.paidSocialAdvertisement,
  icon: paidSocialAdvertisement,
  subCategories: [
    {
      name: 'Facebook Advertising',
      slug: slugsDigitalEN.facebook,
      texts: [
        'Harness the power of the world\'s largest social network with Facebook Advertising. Reach a vast audience with targeted ads tailored to specific demographics, interests, and behaviors, driving brand awareness and conversion.',
      ],
    },
    {
      name: 'Instagram Advertising',
      slug: slugsDigitalEN.instagram,
      texts: [
        'Elevate your brand with Instagram Advertising. Utilize this visually-driven platform to captivate and engage a diverse audience with stunning visuals and creative content, perfect for boosting engagement and sales.',
      ],
    },
    {
      name: 'LinkedIn Advertising',
      slug: slugsDigitalEN.linkedin,
      texts: [
        'Connect with professionals through LinkedIn Advertising. Target specific industries and decision-makers with tailored ads, ideal for B2B marketing and building professional brand authority.',
      ],
    },
    {
      name: 'Pinterest Advertising',
      slug: slugsDigitalEN.pinterest,
      texts: [
        'Tap into a world of inspiration with Pinterest Advertising. Reach a highly engaged audience interested in lifestyle, fashion, and home decor, using visually appealing ads to drive traffic and sales.',
      ],
    },
    {
      name: 'TikTok Advertising',
      slug: slugsDigitalEN.tiktok,
      texts: [
        'Make your mark with TikTok Advertising. Engage a younger audience through creative, short-form video content on one of the fastest-growing social media platforms, perfect for building brand awareness and viral potential.',
      ],
    },
  ],
};

export const paidSocialAdsDE = {
  id: 'de-paid-social-ads',
  name: 'Bezahlte Social-Medien-Anzeigen',
  slug: slugsDigitalDE.paidSocialAdvertisement,
  icon: paidSocialAdvertisement,
  subCategories: [
    {
      name: 'Facebook-Werbung',
      slug: slugsDigitalDE.facebook,
      texts: [
        'Nutzen Sie die Kraft des weltweit größten sozialen Netzwerks mit Facebook-Werbung. Erreichen Sie ein großes Publikum mit zielgerichteten Anzeigen, die auf spezifische demografische Merkmale, Interessen und Verhaltensweisen zugeschnitten sind, um die Markenbekanntheit und Konversion zu steigern.',
      ],
    },
    {
      name: 'Instagram-Werbung',
      slug: slugsDigitalDE.instagram,
      texts: [
        'Steigern Sie Ihre Marke mit Instagram-Werbung. Nutzen Sie diese visuell ansprechende Plattform, um ein vielfältiges Publikum mit atemberaubenden Bildern und kreativen Inhalten zu begeistern und zu binden, ideal zur Steigerung von Engagement und Verkäufen.',
      ],
    },
    {
      name: 'LinkedIn-Werbung',
      slug: slugsDigitalDE.linkedin,
      texts: [
        'Verbinden Sie sich mit Fachleuten durch LinkedIn-Werbung. Zielen Sie auf bestimmte Branchen und Entscheidungsträger mit maßgeschneiderten Anzeigen ab, ideal für B2B-Marketing und den Aufbau einer professionellen Markenautorität.',
      ],
    },
    {
      name: 'Pinterest-Werbung',
      slug: slugsDigitalDE.pinterest,
      texts: [
        'Tauchen Sie ein in eine Welt voller Inspiration mit Pinterest-Werbung. Erreichen Sie ein hoch engagiertes Publikum, das an Lifestyle, Mode und Wohnkultur interessiert ist, und nutzen Sie visuell ansprechende Anzeigen, um Traffic und Verkäufe zu steigern.',
      ],
    },
    {
      name: 'TikTok-Werbung',
      slug: slugsDigitalDE.tiktok,
      texts: [
        'Setzen Sie mit TikTok-Werbung ein Zeichen. Binden Sie ein jüngeres Publikum durch kreative, kurzweilige Videoinhalte auf einer der am schnellsten wachsenden Social-Media-Plattformen ein, ideal zum Aufbau von Markenbekanntheit und viralem Potenzial.',
      ],
    },
  ],
};
