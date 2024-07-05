export interface TypeBlog {
  id: number | null;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  total_views: number | null;
  average_read: string | null;
  status: string;
  featured_image: string;
  published_at?: string | null;
  category: {
    id: number;
    name: string;
  };
  created_at: string;
  author: {
    id: number;
    name: string;
  };
  meta_description?: string;
  meta_title?: string;
  is_featured?: string | null;
  last_edited_date?: string;
  time_created: string;
}

export interface TypeBlogLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface TypeBlogMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface TypeCategory {
  id: number;
  name: string;
  slug: string;
}

export enum TypeKeysForSort {
  NAME = 'name',
  OLDEST = 'oldest',
  LATEST = 'latest',
}

export interface TypeBlogSitemapData {
  id: number;
  slug: {
    en: string;
    de: string;
  };
}
