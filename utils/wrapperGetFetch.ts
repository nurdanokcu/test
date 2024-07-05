import { type AsyncData } from '~/types/asyncData';

/**
 * Performs a GET request to a specified endpoint and returns the response.
 * This function utilizes the `useFetch` method from Nuxt to make an HTTP GET request.
 * It is designed to be used within a Nuxt environment where `useRuntimeConfig` is available.
 *
 * @param endpoint The endpoint to which the GET request will be sent. This endpoint is appended to the base URL obtained from the runtime configuration.
 * @returns An `AsyncData` object containing either the response data or an error object.
 */
export const wrapperUseFetchGet = async <ResponseT, ErrorT>(
  endpoint: string,
): Promise<AsyncData<ResponseT, ErrorT>> => {
  const config = useRuntimeConfig();
  const url = config.public.baseURL + endpoint;
  const response = await useFetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'GET',
  });
  return response as AsyncData<ResponseT, ErrorT>;
};

export const wrapperFetchGet = async <ResponseT>(
  endpoint: string,
): Promise<ResponseT> => {
  const config = useRuntimeConfig();
  const url = config.public.baseURL + endpoint;
  const response = await $fetch<ResponseT>(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'GET',
  });
  return response as unknown as ResponseT;
};

/**
 * Performs a GET request to a specified endpoint and returns the response.
 * This function utilizes the `$fetch` method from Nuxt to make an HTTP GET request.
 * It is designed to be used within a Nuxt environment where `useRuntimeConfig` is available.
 * This function also adds an authorization header to the request.
 * @param endpoint The endpoint to which the GET request will be sent. This endpoint is appended to the base URL obtained from the runtime configuration.
 * @returns An `AsyncData` object containing either the response data or an error object.
 */
export const wrapperFetchGetAuthorized = async <ResponseT>(
  endpoint: string,
) => {
  const token = useCookie('ps-auth');
  const config = useRuntimeConfig();
  const url = config.public.baseURL + endpoint;

  const response = await $fetch<ResponseT>(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token.value}`,
    },
    method: 'GET',
  });
  return response;
};
