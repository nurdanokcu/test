import { slugsDigitalEN, slugsDigitalDE } from '~/data/services/slugs';
import { seo } from '~/assets/images/service_images';

export const seoEN = {
  id: 'en-seo',
  name: 'Search Engine Optimisation',
  slug: slugsDigitalEN.seo,
  icon: seo,
  subCategories: [
    {
      name: 'Technical SEO',
      slug: slugsDigitalEN.technicalSeo,
      texts: [
        'Enhance your website\'s technical aspects for better search engine rankings. Our Technical SEO services focus on site speed, mobile-friendliness, and crawlability, ensuring your site meets key search engine criteria.',
      ],
    },
    {
      name: 'SEO Link-Building',
      slug: slugsDigitalEN.seoLinkBuilding,
      texts: [
        'Boost your website\'s authority and search rankings with our SEO Link-Building services. We specialize in acquiring high-quality backlinks from reputable sources, enhancing your site\'s credibility and visibility.',
      ],
    },
    {
      name: 'International SEO',
      slug: slugsDigitalEN.internationalSeo,
      texts: [
        'Expand your global reach with International SEO. Our services optimize your website for different languages and regions, ensuring cultural relevancy and improved visibility in international search engines.',
      ],
    },
    {
      name: 'Local SEO',
      slug: slugsDigitalEN.localSeo,
      texts: [
        'Maximize your local market presence with Local SEO. We optimize your online visibility for local searches, targeting customers in your specific geographic area and improving local search rankings and foot traffic.',
      ],
    },
    {
      name: 'SEO Audit',
      slug: slugsDigitalEN.seoAudit,
      texts: [
        'Check how well your site is optimized for effective promotion in search networks. We look for points of growth. What needs to be fixed as a matter of urgency. Make a short audit of competitors\' sites',
      ],
    },
  ],
};

export const seoDE = {
  id: 'de-seo',
  name: 'Suchmaschinenoptimierung',
  slug: slugsDigitalDE.seo,
  icon: seo,
  subCategories: [
    {
      name: 'Technisches SEO',
      slug: slugsDigitalDE.technicalSeo,
      texts: [
        'Verbessern Sie die technischen Aspekte Ihrer Website für bessere Suchmaschinenplatzierungen. Unsere technischen SEO-Dienste konzentrieren sich auf Seitenladegeschwindigkeit, Mobilfreundlichkeit und Crawling, um sicherzustellen, dass Ihre Website wichtige Kriterien der Suchmaschinen erfüllt.',
      ],
    },
    {
      name: 'SEO-Linkaufbau',
      slug: slugsDigitalDE.seoLinkBuilding,
      texts: [
        'Steigern Sie die Autorität und Suchmaschinenplatzierungen Ihrer Website mit unseren SEO-Linkaufbau-Diensten. Wir sind spezialisiert auf den Erwerb hochwertiger Backlinks von seriösen Quellen, um die Glaubwürdigkeit und Sichtbarkeit Ihrer Website zu erhöhen.',
      ],
    },
    {
      name: 'Internationales SEO',
      slug: slugsDigitalDE.internationalSeo,
      texts: [
        'Erweitern Sie Ihre globale Reichweite mit internationalem SEO. Unsere Dienstleistungen optimieren Ihre Website für verschiedene Sprachen und Regionen, um kulturelle Relevanz und verbesserte Sichtbarkeit in internationalen Suchmaschinen zu gewährleisten.',
      ],
    },
    {
      name: 'Lokales SEO',
      slug: slugsDigitalDE.localSeo,
      texts: [
        'Maximieren Sie Ihre lokale Marktpräsenz mit lokalem SEO. Wir optimieren Ihre Online-Sichtbarkeit für lokale Suchanfragen und richten uns an Kunden in Ihrem spezifischen geografischen Gebiet, um lokale Suchplatzierungen und Fußverkehr zu verbessern.',
      ],
    },
    {
      name: 'SEO-Überprüfung',
      slug: slugsDigitalDE.seoAudit,
      texts: [
        'Überprüfen Sie, wie gut Ihre Website für eine effektive Promotion in Suchnetzwerken optimiert ist. Wir suchen nach Wachstumspunkten. Was dringend behoben werden muss. Führen Sie eine kurze Überprüfung der Websites der Wettbewerber durch.',
      ],
    },
  ],
};
