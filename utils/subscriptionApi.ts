import { type DataUnsubscribe } from '~/types/unsubscribe';

interface DataContactForm {
  full_name: string;
  email: string;
  comment: string;
  service_name: string;
}

interface ContactFormResponse {
  status: string;
  message: string;
}

export const subscriptionApi = () => {
  const config = useRuntimeConfig();

  const sendContactForm = async (data: DataContactForm) => {
    const url = config.public.baseURL + '/api/v1/services';
    const response = await $fetch<ContactFormResponse>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  };

  const subscribeToNewsletter = async (email: string) => {
    const url = config.public.baseURL + '/api/v1/subscriptions';
    const response = await $fetch<ContactFormResponse>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: {
        email,
      },
    });
    return response;
  };

  const confirmSubscription = async (token: string) => {
    const url = config.public.baseURL + '/api/v1/subscriptions/confirmation';
    const response = await $fetch<ContactFormResponse>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: {
        confirmation_token: token,
      },
    });
    return response;
  };

  const unsubscribe = async (data: DataUnsubscribe) => {
    const url = config.public.baseURL + '/api/v1/unsubscribe-notification';
    const response = await $fetch<ContactFormResponse>(url, {
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
    sendContactForm,
    subscribeToNewsletter,
    confirmSubscription,
    unsubscribe,
  };
};
