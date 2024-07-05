import { type TypeUser } from '~/types/user';

type ResponseUsers = {
  data: TypeUser[];
};
type ResponseUser = {
  data: TypeUser;
};

type ResponseCreateUser = {
  status: string;
  message: string;
  user: TypeUser;
};

type ResponseDelete = {
  status: string;
  message: string;
};
type TypeDataNewUser = {
  name: string;
  email: string;
  position: string;
  role: string;
  profile_photo_path?: File;
};

type DataUpdateUser = {
  name?: string;
  email?: string;
  password?: string;
  position?: string;
  password_confirmation?: string;
  profile_photo_path?: string;
  role: string;
};

type DataChangePassword = {
  password: string;
  password_confirmation: string;
};

export const userManagementApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie('ps-auth');

  const getUsers = async () => {
    const url = '/api/v1/users';
    return await wrapperFetchGetAuthorized<ResponseUsers>(url);
  };

  const getSpecificUser = async (userId: string) => {
    const url = '/api/v1/users/' + userId;
    return await wrapperFetchGetAuthorized<ResponseUser>(url);
  };

  const createNewUser = async (data: TypeDataNewUser) => {
    const url = config.public.baseURL + '/api/v1/users';
    const response = await $fetch<ResponseCreateUser>(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
      body: data,
    });

    return response;
  };

  const updateUserInfo = async (data: DataUpdateUser, userId: number) => {
    const url = config.public.baseURL + '/api/v1/users/' + userId;
    const finalData = {
      ...data,
      _method: 'PATCH',
    };
    const response = await $fetch<ResponseCreateUser>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      method: 'POST',
      body: JSON.stringify(finalData),
    });

    return response;
  };

  const deleteUser = async (userId: number) => {
    const url = config.public.baseURL + '/api/v1/users/' + String(userId);
    const response = await $fetch<ResponseDelete>(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json',
      },
    });
    return response;
  };

  const sendConfirmationLink = async (email: string) => {
    const url = config.public.baseURL + '';
    const response = await $fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    return response;
  };

  const changePassword = async (data: DataChangePassword) => {
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

  return {
    getUsers,
    createNewUser,
    getSpecificUser,
    updateUserInfo,
    deleteUser,
    sendConfirmationLink,
    changePassword,
  };
};
