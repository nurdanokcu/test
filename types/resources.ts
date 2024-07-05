export interface TypeArticle {
  topic: string;
  title: string;
  name: string;
  image: string;
  link: string;
}

export interface TypeEducational {
  id: number;
  title: string;
  topic: string;
}

export interface TypePodcast {
  id: number;
  title: string;
  topic: string;
  src: string;
}

export interface TypeAdminResourcesListItem {
  id: number;
  headline: string;
  description: string;
  lastEdited: string;
}
