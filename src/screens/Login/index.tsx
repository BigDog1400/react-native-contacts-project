/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useState} from 'react';

import {LoginComponent} from '../../components/Login';
import loginUser from '../../context/actions/loginUser';
import {GlobalContext} from '../../context/Provider';
import {userSignInFormValues} from '../../types/userSignInFormValues';

const Login = () => {
  const [form, setForm] = useState<userSignInFormValues>({});
  const [errors, setErrors] = useState({});
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
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      onDismiss={() => console.log('disssmied')}
      error={authState.error}
      loading={authState.loading}
      errors={errors}
    />
  );
};

export {Login};
