import {ActionMap} from '../../utils/actionMap';
import {authType} from '../initialStates/authState';

export enum Types {
  LOGIN = 'LOGIN',
  SIGN_OUT = 'SIGN_OUT',
}

type AuthPayload = {
  [Types.LOGIN]: {
    email: string;
    password: string;
  };
  [Types.SIGN_OUT]: {};
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

const auth = (state: authType, action: AuthActions) => {
  switch (action.type) {
    case Types.LOGIN:
      return state;
    default:
      return state;
  }
};

export default auth;
