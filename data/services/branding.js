import { slugsDesignEN, slugsDesignDE } from '~/data/services/slugs';
import { branding } from '~/assets/images/service_images';

export const brandingEN = {
  id: 'en-branding',
  name: 'Branding & Identity',
  slug: slugsDesignEN.brandingIdentity,
  icon: branding,
  subCategories: [
    {
      name: 'Graphic Design',
      slug: slugsDesignEN.graphicDesign,
      texts: [
        'Creating visually striking graphics for various marketing materials such as brochures, flyers, posters, business cards, and social media posts to effectively communicate your message.',
      ],
    },
    {
      name: 'Packaging Design',
      slug: slugsDesignEN.packagingDesign,
      texts: [
        'Designing attractive and functional packaging solutions that not only protect your products but also enhance their shelf appeal and reflect your brand identity.',
      ],
    },
    {
      name: 'Print Design',
      slug: slugsDesignEN.printDesign,
      texts: [
        'Creating high-quality print materials such as business cards, stationery, banners, and promotional materials that reinforce your brand\'s message and leave a lasting impression.',
      ],
    },
    {
      name: 'Typography Design',
      slug: slugsDesignEN.typographyDesign,
      texts: [
        'Curating unique typography styles and fonts that align with your brand\'s personality and message, ensuring consistency and coherence across all communication channels.',
      ],
    },
    {
      name: 'Icon Design',
      slug: slugsDesignEN.iconDesign,
      texts: [
        'Designing custom icons and symbols that effectively communicate key information and enhance the usability and visual appeal of your digital products and interfaces.',
      ],
    },
  ],
};

export const brandingDE = {
  id: 'de-branding',
  name: 'Markenbildung & Identität',
  slug: slugsDesignDE.brandingIdentity,
  icon: branding,
  subCategories: [
    {
      name: 'Grafikdesign',
      slug: slugsDesignDE.graphicDesign,
      texts: [
        'Erstellung visuell ansprechender Grafiken für verschiedene Marketingmaterialien wie Broschüren, Flyer, Poster, Visitenkarten und Social-Media-Beiträge, um Ihre Botschaft effektiv zu kommunizieren.',
      ],
    },
    {
      name: 'Verpackungsdesign',
      slug: slugsDesignDE.packagingDesign,
      texts: [
        'Gestaltung attraktiver und funktionaler Verpackungslösungen, die nicht nur Ihre Produkte schützen, sondern auch ihren Regalappeal steigern und Ihre Markenidentität widerspiegeln.',
      ],
    },
    {
      name: 'Printdesign',
      slug: slugsDesignDE.printDesign,
      texts: [
        'Erstellung hochwertiger Druckmaterialien wie Visitenkarten, Briefpapier, Banner und Werbematerialien, die die Botschaft Ihrer Marke stärken und einen bleibenden Eindruck hinterlassen.',
      ],
    },
    {
      name: 'Typografiedesign',
      slug: slugsDesignDE.typographyDesign,
      texts: [
        'Zusammenstellung einzigartiger Typografie-Stile und Schriftarten, die mit der Persönlichkeit und Botschaft Ihrer Marke übereinstimmen und für Konsistenz und Kohärenz in allen Kommunikationskanälen sorgen.',
      ],
    },
    {
      name: 'Icon-Design',
      slug: slugsDesignDE.iconDesign,
      texts: [
        'Entwurf individueller Symbole und Icons, die wichtige Informationen effektiv vermitteln und die Benutzerfreundlichkeit sowie die visuelle Attraktivität Ihrer digitalen Produkte und Schnittstellen verbessern.',
      ],
    },
  ],
};
