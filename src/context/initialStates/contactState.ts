export type contactType = {
  getContacts: {
    data: {};
    error: null | {};
    loading: boolean;
  };
  createContacts: {
    data: {};
    error: null | {};
    loading: boolean;
  };
  deleteContacts: {
    data: {};
    error: null | {};
    loading: boolean;
  };
};

export default {
  getContacts: {data: {}, error: null, loading: false},
  createContacts: {data: {}, error: null, loading: false},
  deleteContacts: {data: {}, error: null, loading: false},
};
