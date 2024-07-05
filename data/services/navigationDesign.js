import { slugsDesignEN, slugsDesignDE } from '~/data/services/slugs';

export const navigationDesignEN = {
  pageSlug: 'design',
  categories: [
    {
      title: 'Web Design & Digital Presence',
      slug: slugsDesignEN.webDesign,
      subCategories: [
        {
          title: 'Website Design & Development',
          slug: slugsDesignEN.webDesignDevelopment,
        },
        {
          title: 'UI/UX Design',
          slug: slugsDesignEN.uiUxDesign,
        },
        {
          title: 'Social Media Graphics',
          slug: slugsDesignEN.socialMediaGraphics,
        },
        {
          title: 'Email Newsletter Design',
          slug: slugsDesignEN.emailNewsLetter,
        },
        {
          title: 'Infographic Design',
          slug: slugsDesignEN.infoGraphicDesign,
        },
      ],
    },
    {
      title: 'Branding & Identity',
      slug: slugsDesignEN.brandingIdentity,
      subCategories: [
        {
          title: 'Graphic Design',
          slug: slugsDesignEN.graphicDesign,
        },
        {
          title: 'Packaging Design',
          slug: slugsDesignEN.packagingDesign,
        },
        {
          title: 'Print Design',
          slug: slugsDesignEN.printDesign,
        },
        {
          title: 'Typography Design',
          slug: slugsDesignEN.typographyDesign,
        },
        {
          title: 'Icon Design',
          slug: slugsDesignEN.iconDesign,
        },
      ],
    },
  ],
};

export const navigationDesignDE = {
  pageSlug: 'design',
  categories: [
    {
      title: 'Webdesign & Digitale Präsenz',
      slug: slugsDesignDE.webDesign,
      subCategories: [
        {
          title: 'Website-Design & -Entwicklung',
          slug: slugsDesignDE.webDesignDevelopment,
        },
        {
          title: 'UI/UX-Design',
          slug: slugsDesignDE.uiUxDesign,
        },
        {
          title: 'Grafikdesign für soziale Medien',
          slug: slugsDesignDE.socialMediaGraphics,
        },
        {
          title: 'E-Mail-Newsletter-Design',
          slug: slugsDesignDE.emailNewsLetter,
        },
        {
          title: 'Infografik-Design',
          slug: slugsDesignDE.infoGraphicDesign,
        },
      ],
    },
    {
      title: 'Markenbildung & Identität',
      slug: slugsDesignDE.brandingIdentity,
      subCategories: [
        {
          title: 'Grafikdesign',
          slug: slugsDesignDE.graphicDesign,
        },
        {
          title: 'Verpackungsdesign',
          slug: slugsDesignDE.packagingDesign,
        },
        {
          title: 'Printdesign',
          slug: slugsDesignDE.printDesign,
        },
        {
          title: 'Typografiedesign',
          slug: slugsDesignDE.typographyDesign,
        },
        {
          title: 'Icondesign',
          slug: slugsDesignDE.iconDesign,
        },
      ],
    },
  ],
};
