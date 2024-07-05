import { slugsDigitalEN, slugsDigitalDE } from '~/data/services/slugs';
import { digitalAudit } from '~/assets/images/service_images';

export const digitalAuditEN = {
  id: 'en-digital-audit',
  name: 'Digital Audit',
  slug: slugsDigitalEN.digitalAudit,
  icon: digitalAudit,
  subCategories: [
    {
      name: 'PPC Audit',
      slug: slugsDigitalEN.ppcAudit,
      texts: [
        'Detailed audit of advertising settings. Individual recommendations - how to improve advertising for your business, taking into account the sales and income data. Suggestion of effective advertising strategy.',
      ],
    },
    {
      name: 'SEO Audit',
      slug: slugsDigitalEN.seoAudit,
      texts: [
        'Check how well your site is optimized for effective promotion in search networks. We look for points of growth. What needs to be fixed as a matter of urgency. Make a short audit of competitors\' sites.',
      ],
    },
    {
      name: 'Social Media Audit',
      slug: slugsDigitalEN.socialMediaAudit,
      texts: [
        'Discover the strengths and opportunities of your social media presence with our comprehensive audit service. We evaluate your strategies, engagement, content quality, and audience insights to optimize performance and align with your goals.',
      ],
    },
  ],
};

export const digitalAuditDE = {
  id: 'de-digital-audit',
  name: 'Digitale Überprüfung',
  slug: slugsDigitalDE.digitalAudit,
  icon: digitalAudit,
  subCategories: [
    {
      name: 'PPC-Überprüfung',
      slug: slugsDigitalDE.ppcAudit,
      texts: [
        'Detaillierte Überprüfung der Werbeeinstellungen. Individuelle Empfehlungen - wie Sie die Werbung für Ihr Unternehmen verbessern können, unter Berücksichtigung der Umsatz- und Einkommensdaten. Vorschlag einer effektiven Werbestrategie.',
      ],
    },
    {
      name: 'SEO-Überprüfung',
      slug: slugsDigitalDE.seoAudit,
      texts: [
        'Überprüfen Sie, wie gut Ihre Website für eine effektive Promotion in Suchnetzwerken optimiert ist. Wir suchen nach Wachstumspunkten. Was dringend behoben werden muss. Führen Sie eine kurze Überprüfung der Websites der Wettbewerber durch.',
      ],
    },
    {
      name: 'Social-Media-Überprüfung',
      slug: slugsDigitalDE.socialMediaAudit,
      texts: [
        'Entdecken Sie mit unserem umfassenden Überprüfungsservice die Stärken und Chancen Ihrer Präsenz in den sozialen Medien. Wir bewerten Ihre Strategien, Engagement, Inhaltsqualität und Publikumseinblicke, um die Leistung zu optimieren und mit Ihren Zielen in Einklang zu bringen.',
      ],
    },
  ],
};
