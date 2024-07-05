import { type AsyncData } from '~/types/asyncData';
import { type TypeUser } from '~/types/user';

type DataLogin = {
  email: string;
  password: string;
};

type ResponseLogin = {
  status: string;
  message: string;
  data: {
    token_type: string;
    token: string;
    user: TypeUser;
  };
};

type ErrorLogin = {
  status: number;
  statusCode: number;
  statusMessage: string;
  message: string;
  errors: {
    [key: string]: string[];
  };
  data: {
    message: string;
  };
};

type ResponseUser = {
  data: TypeUser;
};

export const userApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie('ps-auth');

  const login = async (data: DataLogin) => {
    const url = config.public.baseURL + '/api/v1/login';
    const response = await $fetch<ResponseLogin>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  };

  const getUser = async () => {
    const url = config.public.baseURL + '/api/v1/me';
    const response = await useFetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      method: 'GET',
    });
    return response as AsyncData<ResponseUser, ErrorLogin>;
  };

  const logout = async () => {
    const url = config.public.baseURL + '/api/v1/logout';
    const response = await $fetch<ResponseLogin>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      method: 'POST',
    });
    return response;
  };

  return {
    login,
    getUser,
    logout,
  };
};
