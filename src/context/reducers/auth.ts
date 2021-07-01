import {ActionMap} from '../../utils/actionMap';
import {authType} from '../initialStates/authState';

export enum Types {
  LOGIN = 'LOGIN',
  SIGN_OUT = 'SIGN_OUT',
  REGISTER_LOADING = 'REGISTER_LOADING',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE',
}

type AuthPayload = {
  [Types.LOGIN]: {
    email: string;
    password: string;
  };
  [Types.REGISTER_LOADING]: undefined;
  [Types.CLEAR_AUTH_STATE]: undefined;
  [Types.REGISTER_SUCCESS]: object;
  [Types.REGISTER_FAIL]: object;
  [Types.SIGN_OUT]: {};
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

const auth = (state: authType, action: AuthActions) => {
  switch (action.type) {
    case Types.LOGIN:
      return state;
    case Types.REGISTER_LOADING:
      return {...state, loading: true};
    case Types.REGISTER_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case Types.REGISTER_FAIL:
      return {...state, loading: false, error: action.payload};
    case Types.CLEAR_AUTH_STATE:
      return {...state, loading: false, data: null, error: null};
    default:
      return state;
  }
};

export default auth;
