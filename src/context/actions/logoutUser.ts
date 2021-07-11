import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'react';
import {AuthActions, Types} from '../reducers/auth';

export default () => (dispatch: Dispatch<AuthActions>) => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: Types.LOGOUT_USER,
  });
};
