import {
  type TypeActionHistories,
  type TypeArgsFilterPosts,
} from '~/types/privateBlog';
import {
  type TypeBlog,
  type TypeBlogMeta,
  type TypeBlogLinks,
} from '~/types/blog';

type ResponseBlogs = {
  data: TypeBlog[];
  links: TypeBlogLinks;
  meta: TypeBlogMeta;
};
type ResponseBestBlog = {
  status: string;
  data: TypeBlog[];
};

type ResponsePost = {
  status: string;
  message: string;
  post: TypeBlog;
};
type ResponseSingleBlog = {
  data: TypeBlog;
};
type ResponseDelete = {
  status: string;
  message: string;
};

type TypeDataCategory = {
  name: {
    en: string;
    de: string;
  };
};

type ResponseNewCategory = {
  data: {
    id: number;
    name: string;
    slug: string;
  };
};
type TypeResponseUploadImage = {
  status: string;
  data: string;
};
export const privateBlogApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie('ps-auth');

  const getActionHistory = async (limit = '') => {
    let url = '/api/v1/posts-action-histories';
    if (limit !== '') {
      url += '?limit=' + limit;
    }
    return await wrapperFetchGetAuthorized<TypeActionHistories>(url);
  };

  type TypeArgsFetchBlogs = {
    limit?: string;
    page?: string;
    locale?: string;
  };
  const fetchPrivatePosts = async (args: TypeArgsFetchBlogs) => {
    let url = '/api/v1/private-posts';
    const { limit = '', page = '' } = args;
    const params = [];
    if (limit !== '') {
      params.push('limit=' + limit);
    }
    if (page !== '') {
      params.push('page=' + page);
    }
    if (args.locale !== '') {
      params.push('locale=' + args.locale);
    }
    if (params.length > 0) {
      url += '?' + params.join('&');
    }
    return await wrapperFetchGetAuthorized<ResponseBlogs>(url);
  };

  const filterPosts = async (args: TypeArgsFilterPosts) => {
    let url = '/api/v1/private-posts?type=filter';
    const params = [];
    if (args.name) {
      params.push('name=' + args.name);
    }
    if (args.status) {
      params.push('status=' + args.status);
    }
    if (args.date) {
      params.push('date=' + args.date);
    }
    if (args.locale) {
      params.push('locale=' + args.locale);
    }
    if (args.page) {
      params.push('page=' + args.page);
    }
    if (args.limit) {
      params.push('limit=' + args.limit);
    }
    if (params.length > 0) {
      url += '&' + params.join('&');
    }
    return await wrapperFetchGetAuthorized<ResponseBlogs>(url);
  };

  const fetchSpecificPost = async (id: number, locale = '') => {
    let endpoint = '/api/v1/private-posts/' + id;
    if (locale !== '') {
      endpoint += '?locale=' + locale;
    }
    return await wrapperFetchGetAuthorized<ResponseSingleBlog>(endpoint);
  };

  const getBestPosts = async (locale = '') => {
    let endpoint = '/api/v1/private-posts?query=best_post';
    if (locale !== '') {
      endpoint += '&&locale=' + locale;
    }
    return await wrapperFetchGetAuthorized<ResponseBestBlog>(endpoint);
  };

  const getDraftPosts = async (locale = '') => {
    let endpoint = '/api/v1/private-posts?status=draft&&limit=3';
    if (locale !== '') {
      endpoint += '&&locale=' + locale;
    }
    return await wrapperFetchGetAuthorized<ResponseBlogs>(endpoint);
  };

  const getScheduledPosts = async (locale = '') => {
    let endpoint = '/api/v1/private-posts?status=scheduled&&limit=5';
    if (locale !== '') {
      endpoint += '&&locale=' + locale;
    }
    return await wrapperFetchGetAuthorized<ResponseBlogs>(endpoint);
  };
  const getLastPostedPosts = async (locale = '') => {
    let endpoint = '/api/v1/private-posts?status=published&&limit=4';
    if (locale !== '') {
      endpoint += '&&locale=' + locale;
    }
    return await wrapperFetchGetAuthorized<ResponseBlogs>(endpoint);
  };

  const getFeaturedPosts = async (locale = '') => {
    let endpoint = '/api/v1/private-posts?type=filter&&featured=1';
    if (locale !== '') {
      endpoint += '&&locale=' + locale;
    }
    return await wrapperFetchGetAuthorized<ResponseBlogs>(endpoint);
  };

  const toggleFeatured = async (id: number, newValue: 0 | 1) => {
    const url
      = config.public.baseURL
      + '/api/v1/private-posts/'
      + id
      + '?type=is_featured';
    const data = {
      _method: 'PATCH',
      is_featured: newValue,
    };
    const response = await $fetch<ResponsePost>(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: data,
    });
    return response;
  };

  const updatePublishedDate = async (id: number, newDate: string) => {
    const url
      = config.public.baseURL
      + '/api/v1/private-posts/'
      + id
      + '?type=published_at';
    const data = {
      _method: 'PATCH',
      published_at: newDate,
    };
    const response = await $fetch<ResponsePost>(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: data,
    });
    return response;
  };

  /**
   * Creates a new post.
   * @param {FormData} data - An object containing the data to be sent to the API.
   * It should have the following properties:
   * @param {string} data.title - The title of the post.
   * @param {string} data.content - The content of the post.
   * @param {string} data.category_id - The category of the post.
   * @param {array} data.tags - The tags of the post. it is not required.
   * @param {string} data.status - The status of the post. It can be "draft", "scheduled" or "published".
   * @param {string} data.published_at - The date when the post will be published. It should be in the format "YYYY-MM-DD HH:MM:SS".
   * @param {string} data.featured_image - The featured image of the post.
   */
  const createNewPost = async (data: FormData) => {
    const url = config.public.baseURL + '/api/v1/private-posts';
    const response = await $fetch<ResponsePost>(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: data,
    });
    return response;
  };

  /**
   * Creates a new post.
   * @param {FormData} data - An object containing the data to be sent to the API.
   * It should have the following properties:
   * @param {string} data.title - The title of the post.
   * @param {string} data.content - The content of the post.
   * @param {string} data.category_id - The category of the post.
   * @param {array} data.tags - The tags of the post. it is not required.
   * @param {string} data.status - The status of the post. It can be "draft", "scheduled" or "published".
   * @param {string} data.published_at - The date when the post will be published. It should be in the format "YYYY-MM-DD".
   * @param {string} data.featured_image - The featured image of the post.
   * @param {string} data._method - The method to be used. It should be "PATCH".
   */
  const updatePost = async (data: FormData, id: number) => {
    const url = config.public.baseURL + '/api/v1/private-posts/' + id;
    const response = await $fetch<ResponsePost>(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: data,
    });
    return response;
  };

  const deleteBlogPost = async (id: number) => {
    const url = config.public.baseURL + '/api/v1/private-posts/' + id;
    const response = await $fetch<ResponseDelete>(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
    });
    return response;
  };

  const createCategory = async (data: TypeDataCategory) => {
    const url = config.public.baseURL + '/api/v1/categories';
    const response = await $fetch<ResponseNewCategory>(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: data,
    });
    return response;
  };

  const updateCategory = async (id: number, data: TypeDataCategory) => {
    const url = config.public.baseURL + '/api/v1/categories/' + id;
    const finalData = {
      ...data,
      _method: 'PATCH',
    };
    const response = await $fetch<ResponseNewCategory>(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: finalData,
    });
    return response;
  };

  /**
   * @param data formData { photo: File }
   * @returns
   */
  const uploadImageForBlogs = async (data: FormData) => {
    const url = config.public.baseURL + '/api/v1/posts-image-upload';
    const response = await $fetch<TypeResponseUploadImage>(url, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      method: 'POST',
      body: data,
    });
    return response;
  };

  return {
    getActionHistory,
    fetchPrivatePosts,
    filterPosts,
    fetchSpecificPost,
    getBestPosts,
    getDraftPosts,
    getLastPostedPosts,
    getScheduledPosts,
    getFeaturedPosts,
    createNewPost,
    updatePost,
    createCategory,
    updateCategory,
    deleteBlogPost,
    toggleFeatured,
    updatePublishedDate,
    uploadImageForBlogs,
  };
};
