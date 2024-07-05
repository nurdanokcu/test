export interface TypeSubCategory {
  name: string;
  navTitle: string;
  slug: string;
  iconColored: string;
  iconWhite: string;
  image?: string;
  whatIs: string;
  whatIsDescription: string;
  ourApproach: string;
  ourApproachDescription: string;
  facts: string;
  aboutService: string;
  process: string;
  processItems: {
    title: string;
    description: string;
  }[];
}

export interface TypeCategory {
  id: string;
  category: string;
  slug: string;
  subCategories: TypeSubCategory[];
}

export interface TypeServiceItem {
  name: string;
  slug: string;
  subtitle?: string;
  texts: string[];
}
export interface TypeServicePageSubSection {
  id: string;
  name: string;
  slug: string;
  icon: string;
  subCategories: TypeServiceItem[];
}

export interface TypeServicePageSection {
  themeColor: string;
  themeBgColor: string;
  themeHoverColor: string;
  pageSlug: string;
  services: TypeServicePageSubSection[];
}

export interface TypeNavItem {
  title: string;
  slug: string;
  subCategories: {
    title: string;
    slug: string;
  }[];
}

export interface TypeNavSection {
  id: string;
  name: string;
  title: string;
  color: string;
  pageSlug: string;
  isActive: boolean;
  items: TypeNavItem[];
}

export interface TypeHomeServiceCard {
  id: number;
  title: string;
  text: string;
  themeColor: string;
  pageSlug: string;
  path: string;
  navigation: TypeNavItem[];
}
