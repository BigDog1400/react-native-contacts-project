import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'react';
import {userSignUpFormValues} from './../../types/userSignUpFormValues';
import axiosInstance from '../../helpers/axiosInterceptor';
import {AuthActions, Types} from '../reducers/auth';

export default ({password, username}: userSignUpFormValues) =>
  (dispatch: Dispatch<AuthActions>) => {
    dispatch({
      type: Types.LOGIN_LOADING,
    });
    axiosInstance
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: Types.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: Types.LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        });
      });
  };
