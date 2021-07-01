export type authType = {
  isLoggedIn: boolean;
  data: null | {[key: string]: any};
  error: null | {[key: string]: any};
  loading: boolean;
};

export default {
  isLoggedIn: false,
  data: null,
  error: null,
  loading: false,
};
