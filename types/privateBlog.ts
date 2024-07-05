import { type TypeUser } from '~/types/user';

export interface TypeActionHistory {
  id: number;
  user_id: TypeUser;
  post_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface TypeActionHistories {
  [key: string]: TypeActionHistory[];
}

export interface TypeDropdownOption {
  id: number;
  name: string;
  slug?: string;
}

export interface TypeEditableCategory {
  id: number;
  nameEn: string;
  nameDe: string;
}

export enum TypeFilterOptions {
  NONE = 'none',
  NAME = 'name',
  DATE = 'date',
  STATUS = 'status',
}

export type TypeArgsFilterPosts = {
  name?: string;
  status?: string;
  date?: string;
  page?: string;
  locale?: string;
  limit?: string;
};

export enum TypePostStatus {
  NONE = 'none',
  DRAFT = 'draft',
  PUBLISHED = 'published',
  SCHEDULED = 'scheduled',
}
