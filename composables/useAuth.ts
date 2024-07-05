import { type TypeUser } from '~/types/user';

export const useAuth = () => {
  const user = useState('user', (): TypeUser | null => null);
  const isAuthenticated = useState('isAuthenticated', (): boolean => false);

  return {
    user,
    isAuthenticated,
  };
};
