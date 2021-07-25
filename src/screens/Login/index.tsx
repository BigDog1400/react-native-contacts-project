/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {useEffect} from 'react';

import {LoginComponent} from '../../components/Login';
import {LOGIN} from '../../constants/routeNames';
import loginUser from '../../context/actions/loginUser';
import {GlobalContext} from '../../context/Provider';
import {AuthNavigatorStackParamList} from '../../navigations/AuthNavigator';
import {userSignInFormValues} from '../../types/userSignInFormValues';

type LoginScreenRouteProp = RouteProp<AuthNavigatorStackParamList, 'Login'>;

type Props = {
  route: LoginScreenRouteProp;
};
const Login = ({route}: Props) => {
  const [form, setForm] = useState<userSignInFormValues>({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [errors, setErrors] = useState({});
  const {params} = useRoute<LoginScreenRouteProp>();

  useEffect(() => {
    if (params) {
      setJustSignedUp(true);
      setForm({...form, username: params.data.username});
      console.log('Login params', params);
    }
  }, [params]);
  const {
    state: {authState},
    dispatch,
  } = useContext(GlobalContext);
  const onSubmit = () => {
    if (form.username && form.password) {
      loginUser(form)(dispatch);
    }
  };
  const onChange = ({name, value}: {name: string; value: string}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      justSignedUp={justSignedUp}
      onDismiss={() => console.log('disssmied')}
      error={authState.error}
      loading={authState.loading}
      errors={errors}
    />
  );
};

export {Login};
