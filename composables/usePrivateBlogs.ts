import { type TypeActionHistories } from '~/types/privateBlog';

export const usePrivateBlogs = () => {
  const actionHistory = useState<TypeActionHistories | null>(
    'actionHistory',
    () => null,
  );

  return {
    actionHistory,
  };
};
