export type AsyncData<DataT, ErrorT> = {
  data: Ref<DataT | null>;
  pending: Ref<boolean>;
  error: Ref<ErrorT | null>;
};

export type TypeError = {
  status: number;
  statusCode: number;
  statusMessage: string;
  message: string;
  data: {
    message: string;
  };
};
