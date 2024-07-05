import { type TypeBlog } from '~/types/blog';

export const usePublicBlog = () => {
  const emptyBlog: TypeBlog = {
    id: 0,
    title: '',
    excerpt: '',
    slug: '',
    content: '',
    featured_image: '',
    average_read: '',
    status: '',
    total_views: 0,
    category: {
      id: 0,
      name: '',
    },
    created_at: '',
    author: {
      id: 0,
      name: '',
    },
    time_created: '',
    is_featured: '0',
    meta_description: '',
    meta_title: '',
  };
  const post = useState(
    'post',
    (): TypeBlog => ({
      ...emptyBlog,
    }),
  );
  const nextPost = useState('nextPost', () => ({
    id: 0,
    title: '',
    average_read: '',
    category: '',
  }));
  const test = useState('test', () => ({}));

  return {
    post,
    nextPost,
    test,
  };
};
