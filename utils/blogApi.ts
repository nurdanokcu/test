import {
  type TypeBlog,
  type TypeCategory,
  type TypeBlogLinks,
  type TypeBlogMeta,
} from '~/types/blog';
import { type TypeError } from '~/types/asyncData';

interface DataSubscribeForm {
  email: string;
}
interface BlogResponse {
  data: {
    post: TypeBlog;
    next_post: {
      id: number;
      title: string;
      average_read: string;
      category: string;
    };
  };
}

interface BlogsResponse {
  data: TypeBlog[];
  links: TypeBlogLinks;
  meta: TypeBlogMeta;
}

interface CategoriesResponse {
  data: TypeCategory[];
}
export const blogApi = () => {
  const config = useRuntimeConfig();

  const fetchAllCategories = async (locale: string) => {
    let endpoint = '/api/v1/categories';
    if (locale !== '') {
      endpoint += `?locale=${locale}`;
    }
    return await wrapperFetchGet<CategoriesResponse>(endpoint);
  };
  const fetchAllCategoriesPublic = async (locale: string) => {
    let endpoint = '/api/v1/categories?posts=true';
    if (locale !== '') {
      endpoint += `&&locale=${locale}`;
    }
    return await wrapperFetchGet<CategoriesResponse>(endpoint);
  };

  type TypeArgsFetchBlogs = {
    sort?: string;
    page?: number;
    locale?: string;
  };
  const fetchAllBlogs = async (args: TypeArgsFetchBlogs) => {
    let endpoint = '/api/v1/posts';
    const params = [];
    if (args.sort !== '') {
      params.push(`sort=${args.sort}`);
    }
    if (args.page !== 1) {
      params.push(`page=${args.page}`);
    }
    if (args.locale !== '') {
      params.push(`locale=${args.locale}`);
    }
    if (params.length > 0) {
      endpoint += `?${params.join('&')}`;
    }
    return await wrapperFetchGet<BlogsResponse>(endpoint);
  };

  type TypeArgsFetchBlogsByCategory = {
    id: number;
    sort?: string;
    page?: number;
    locale?: string;
  };

  const fetchBlogsByCategory = async (args: TypeArgsFetchBlogsByCategory) => {
    let endpoint = `/api/v1/categories/${args.id}/posts`;
    const params = [];
    if (args.sort !== '') {
      params.push(`sort=${args.sort}`);
    }
    if (args.page !== 1) {
      params.push(`page=${args.page}`);
    }
    if (args.locale !== '') {
      params.push(`locale=${args.locale}`);
    }
    if (params.length > 0) {
      endpoint += `?${params.join('&')}`;
    }
    return await wrapperFetchGet<BlogsResponse>(endpoint);
  };

  const fetchSpecificBlog = async (id: number, locale = '') => {
    let endpoint = `/api/v1/posts/${id}`;
    if (locale !== '') {
      endpoint += `?locale=${locale}`;
    }
    return await wrapperUseFetchGet<BlogResponse, TypeError>(endpoint);
  };

  const sendSubscribeForm = async (data: DataSubscribeForm) => {
    const url = config.public.baseURL + '';
    const response = await $fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  };

  const fetchFeaturedBlogs = async (locale: string) => {
    let endpoint = '/api/v1/posts?featured=1';
    if (locale !== '') {
      endpoint += `&locale=${locale}`;
    }
    return await wrapperUseFetchGet<BlogsResponse, TypeError>(endpoint);
  };

  return {
    fetchAllBlogs,
    fetchSpecificBlog,
    fetchAllCategories,
    fetchAllCategoriesPublic,
    fetchBlogsByCategory,
    sendSubscribeForm,
    fetchFeaturedBlogs,
  };
};
