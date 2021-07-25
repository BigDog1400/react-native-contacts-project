import {Dispatch} from 'react';
import {userSignUpFormValues} from './../../types/userSignUpFormValues';
import axiosInstance from '../../helpers/axiosInterceptor';
import {AuthActions, Types} from '../reducers/auth';

export const clearAuthState = () => (dispatch: Dispatch<AuthActions>) => {
  dispatch({
    type: Types.CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    firstName: first_name,
    lastName: last_name,
    password,
    username,
  }: userSignUpFormValues) =>
  (dispatch: Dispatch<AuthActions>) =>
  (onSuccess: (response: any) => void) => {
    dispatch({
      type: Types.REGISTER_LOADING,
    });
    axiosInstance
      .post('auth/register', {
        password,
        email,
        first_name,
        last_name,
        username,
      })
      .then(res => {
        dispatch({
          type: Types.REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: Types.REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        });
      });
  };
