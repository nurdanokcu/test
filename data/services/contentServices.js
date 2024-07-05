import { slugsDigitalEN, slugsDigitalDE } from '~/data/services/slugs';
import { contentServices } from '~/assets/images/service_images';

export const contentServicesEN = {
  id: 'en-content-services',
  name: 'Content Services',
  slug: slugsDigitalEN.contentServices,
  icon: contentServices,
  subCategories: [
    {
      name: 'Content for Site',
      slug: slugsDigitalEN.contentForSite,
      texts: [
        'Creating engaging, SEO-optimized content for websites. We focus on creating informative, engaging copy and visuals that resonate with your audience, increasing the appeal and effectiveness of your website.',
      ],
    },
    {
      name: 'Content for social Media',
      slug: slugsDigitalEN.contentForSmm,
      texts: [
        'Our content creation for social media specializes in developing engaging, platform-tailored posts and visuals. We aim to captivate your audience, boost interaction, and strengthen your social media presence with creative and relevant content.',
      ],
    },
  ],
};

export const contentServicesDE = {
  id: 'de-content-services',
  name: 'Content-Services',
  slug: slugsDigitalDE.contentServices,
  icon: contentServices,
  subCategories: [
    {
      name: 'Inhalte für die Website',
      slug: slugsDigitalDE.contentForSite,
      texts: [
        'Erstellung ansprechender, SEO-optimierter Inhalte für Websites. Wir konzentrieren uns darauf, informative, ansprechende Texte und visuelle Elemente zu erstellen, die bei Ihrem Publikum Anklang finden und die Attraktivität und Effektivität Ihrer Website steigern.',
      ],
    },
    {
      name: 'Inhalte für Social Media',
      slug: slugsDigitalDE.contentForSmm,
      texts: [
        'Unsere Inhalts-Erstellung für Social Media ist darauf spezialisiert, ansprechende, plattformspezifische Beiträge und visuelle Elemente zu entwickeln. Wir zielen darauf ab, Ihr Publikum zu fesseln, die Interaktion zu steigern und Ihre Präsenz in den sozialen Medien mit kreativen und relevanten Inhalten zu stärken.',
      ],
    },
  ],
};
