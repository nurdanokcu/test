import { slugsDevelopmentEN, slugsDevelopmentDE } from '~/data/services/slugs';
import { webDev } from '~/assets/images/service_images';

export const webDevEN = {
  id: 'en-web-dev',
  name: 'Web Development & Digital Platforms',
  slug: slugsDevelopmentEN.webDevelopmentDigitalPlatforms,
  icon: webDev,
  subCategories: [
    {
      name: 'Website Development',
      slug: slugsDevelopmentEN.websiteDevelopment,
      texts: [
        'Building and coding the structure, layout, and features of a website, ensuring it is functional, user-friendly, and aligned with your business goals.',
      ],
    },
    {
      name: 'eCommerce Development',
      slug: slugsDevelopmentEN.eCommerce,
      texts: [
        'Creating online stores with secure payment gateways, product catalogs, and checkout processes to facilitate seamless transactions and enhance the shopping experience for customers.',
      ],
    },
    {
      name: 'CMS Development',
      slug: slugsDevelopmentEN.cms,
      texts: [
        'Developing custom CMS platforms tailored to your specific content management needs, allowing for easy creation, editing, and publishing of digital content on your website.',
      ],
    },
    {
      name: 'Custom Web Application Development',
      slug: slugsDevelopmentEN.customWebApplication,
      texts: [
        'Designing and programming web-based applications that address unique business requirements, providing customized solutions to streamline processes and improve efficiency.',
      ],
    },
    {
      name: 'Mobile App Development',
      slug: slugsDevelopmentEN.mobileAppDevelopment,
      texts: [
        'Designing and developing mobile applications for iOS and Android platforms, offering users convenient access to your products or services on their smartphones and tablets.',
      ],
    },
  ],
};

export const webDevDE = {
  id: 'de-web-dev',
  name: 'Webentwicklung & Digitale Plattformen',
  slug: slugsDevelopmentDE.webDevelopmentDigitalPlatforms,
  icon: webDev,
  subCategories: [
    {
      name: 'Website-Entwicklung',
      slug: slugsDevelopmentDE.websiteDevelopment,
      texts: [
        'Aufbau und Codierung der Struktur, des Layouts und der Funktionen einer Website, um sicherzustellen, dass sie funktional, benutzerfreundlich und auf Ihre Geschäftsziele ausgerichtet ist.',
      ],
    },
    {
      name: 'E-Commerce-Entwicklung',
      slug: slugsDevelopmentDE.eCommerce,
      texts: [
        'Erstellung von Online-Shops mit sicheren Zahlungsgateways, Produktkatalogen und Checkout-Prozessen, um reibungslose Transaktionen zu ermöglichen und das Einkaufserlebnis für Kunden zu verbessern.',
      ],
    },
    {
      name: 'CMS-Entwicklung',
      slug: slugsDevelopmentDE.cms,
      texts: [
        'Entwicklung maßgeschneiderter CMS-Plattformen, die auf Ihre spezifischen Anforderungen an das Content Management zugeschnitten sind und einfache Erstellung, Bearbeitung und Veröffentlichung digitaler Inhalte auf Ihrer Website ermöglichen.',
      ],
    },
    {
      name: 'Entwicklung individueller Webanwendungen',
      slug: slugsDevelopmentDE.customWebApplication,
      texts: [
        'Design und Programmierung webbasierter Anwendungen, die einzigartige Geschäftsanforderungen adressieren und maßgeschneiderte Lösungen bieten, um Prozesse zu optimieren und die Effizienz zu steigern.',
      ],
    },
    {
      name: 'Entwicklung von mobilen Apps',
      slug: slugsDevelopmentDE.mobileAppDevelopment,
      texts: [
        'Design und Entwicklung von mobilen Anwendungen für iOS- und Android-Plattformen, um Benutzern bequemen Zugriff auf Ihre Produkte oder Dienstleistungen auf ihren Smartphones und Tablets zu bieten.',
      ],
    },
  ],
};
