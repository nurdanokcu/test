import { type TypeUser } from '~/types/user';

export const useUsers = () => {
  const users = useState('users', (): TypeUser[] => []);

  return {
    users,
  };
};
