import { slugsDevelopmentEN, slugsDevelopmentDE } from '~/data/services/slugs';
import { security } from '~/assets/images/service_images';

export const securityEN = {
  id: 'en-security',
  name: 'Security & Performance',
  slug: slugsDevelopmentEN.securityPerformance,
  icon: security,
  subCategories: [
    {
      name: 'Website Performance Optimization',
      slug: slugsDevelopmentEN.websitePerformance,
      texts: [
        'Improving the speed, responsiveness, and overall performance of your website to enhance user experience, increase search engine rankings, and reduce bounce rates.',
      ],
    },
    {
      name: 'Regular Maintenance & Updates',
      slug: slugsDevelopmentEN.regularMaintenance,
      texts: [
        'Providing ongoing support, maintenance, and updates to ensure your website or application remains secure, up-to-date, and functioning optimally over time.',
      ],
    },
    {
      name: 'Cloud Hosting Setup & Management',
      slug: slugsDevelopmentEN.cloudHosting,
      texts: [
        'Setting up and managing cloud hosting services to host your website or application on secure and scalable cloud platforms, ensuring reliability, flexibility, and cost-efficiency.',
      ],
    },
  ],
};

export const securityDE = {
  id: 'de-security',
  name: 'Sicherheit & Leistung',
  slug: slugsDevelopmentDE.securityPerformance,
  icon: security,
  subCategories: [
    {
      name: 'Optimierung der Website-Performance',
      slug: slugsDevelopmentDE.websitePerformance,
      texts: [
        'Verbesserung der Geschwindigkeit, Reaktionsfähigkeit und allgemeinen Leistung Ihrer Website, um die Benutzererfahrung zu verbessern, die Suchmaschinenplatzierung zu erhöhen und die Absprungraten zu reduzieren.',
      ],
    },
    {
      name: 'Regelmäßige Wartung & Updates',
      slug: slugsDevelopmentDE.regularMaintenance,
      texts: [
        'Bereitstellung kontinuierlicher Unterstützung, Wartung und Updates, um sicherzustellen, dass Ihre Website oder Anwendung im Laufe der Zeit sicher, aktuell und optimal funktioniert.',
      ],
    },
    {
      name: 'Cloud-Hosting-Einrichtung & -Verwaltung',
      slug: slugsDevelopmentDE.cloudHosting,
      texts: [
        'Einrichtung und Verwaltung von Cloud-Hosting-Services, um Ihre Website oder Anwendung auf sicheren und skalierbaren Cloud-Plattformen zu hosten, um Zuverlässigkeit, Flexibilität und Kosteneffizienz zu gewährleisten.',
      ],
    },
  ],
};
