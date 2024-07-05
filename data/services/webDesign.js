import { slugsDesignEN, slugsDesignDE } from '~/data/services/slugs';
import { webDesign } from '~/assets/images/service_images';

export const webDesignEN = {
  id: 'en-web-design',
  name: 'Web Design & Digital Presence',
  slug: slugsDesignEN.webDesign,
  icon: webDesign,
  subCategories: [
    {
      name: 'Website Design & Development',
      slug: slugsDesignEN.webDesignDevelopment,
      texts: [
        'Crafting visually appealing and user-friendly websites tailored to your brand\'s identity and target audience, with a focus on functionality and aesthetics.',
      ],
    },
    {
      name: 'UI/UX Design',
      slug: slugsDesignEN.uiUxDesign,
      texts: [
        'Designing intuitive and engaging user interfaces (UI) coupled with seamless user experiences (UX) for digital products and platforms to enhance user satisfaction and retention.',
      ],
    },
    {
      name: 'Social Media Graphics',
      slug: slugsDesignEN.socialMediaGraphics,
      texts: [
        'Crafting visually appealing graphics and illustrations tailored for different social media platforms to increase engagement, followership, and brand awareness.',
      ],
    },
    {
      name: 'Email Newsletter Design',
      slug: slugsDesignEN.emailNewsLetter,
      texts: [
        'Designing visually appealing and responsive email templates for newsletters and promotional campaigns to effectively engage and nurture your email subscribers.',
      ],
    },
    {
      name: 'Infographic Design',
      slug: slugsDesignEN.infoGraphicDesign,
      texts: [
        'Creating visually engaging infographics that present complex information in a clear and concise manner, helping to convey your message and drive engagement.',
      ],
    },
  ],
};

export const webDesignDE = {
  id: 'de-web-design',
  name: 'Webdesign & Digitale Präsenz',
  slug: slugsDesignDE.webDesign,
  icon: webDesign,
  subCategories: [
    {
      name: 'Website-Design & -Entwicklung',
      slug: slugsDesignDE.webDesignDevelopment,
      texts: [
        'Gestaltung visuell ansprechender und benutzerfreundlicher Websites, die auf die Identität Ihrer Marke und Ihre Zielgruppe zugeschnitten sind, mit einem Schwerpunkt auf Funktionalität und Ästhetik.',
      ],
    },
    {
      name: 'UI/UX-Design',
      slug: slugsDesignDE.uiUxDesign,
      texts: [
        'Gestaltung intuitiver und ansprechender Benutzeroberflächen (UI) in Verbindung mit nahtlosen Benutzererfahrungen (UX) für digitale Produkte und Plattformen, um die Benutzerzufriedenheit und -bindung zu erhöhen.',
      ],
    },
    {
      name: 'Grafikdesign für soziale Medien',
      slug: slugsDesignDE.socialMediaGraphics,
      texts: [
        'Gestaltung visuell ansprechender Grafiken und Illustrationen, die für verschiedene soziale Medienplattformen maßgeschneidert sind, um Engagement, Follower und Markenbekanntheit zu steigern.',
      ],
    },
    {
      name: 'E-Mail-Newsletter-Design',
      slug: slugsDesignDE.emailNewsLetter,
      texts: [
        'Gestaltung visuell ansprechender und responsiver E-Mail-Vorlagen für Newsletter und Werbekampagnen, um Ihre E-Mail-Abonnenten effektiv einzubinden und zu pflegen.',
      ],
    },
    {
      name: 'Infografik-Design',
      slug: slugsDesignDE.infoGraphicDesign,
      texts: [
        'Erstellung visuell ansprechender Infografiken, die komplexe Informationen auf klare und prägnante Weise präsentieren und dazu beitragen, Ihre Botschaft zu vermitteln und Engagement zu fördern.',
      ],
    },
  ],
};
