/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {RegisterComponent} from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/register';
import {GlobalContext} from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';
import {userSignUpFormValues} from '../../types/userSignUpFormValues';

const SignUp = () => {
  const [form, setForm] = useState<userSignUpFormValues>({});
  const [errors, setErrors] = useState<userSignUpFormValues>({});
  useEffect(() => {
    axiosInstance.get('/contacts').catch(err => console.log({err}));
  }, []);
  const {
    state: {authState},
    dispatch,
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();
  const onChange = ({name, value}: {name: string; value: string}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password' && value.length < 6) {
        setErrors(prev => {
          return {...prev, [name]: 'This field needs min 6 characters'};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onSubmit = () => {
    // validations

    if (
      Object.values(form).length === 5 &&
      Object.values(errors).every(item => !item) &&
      Object.values(form).every(item => item && item?.trim().length > 0)
    ) {
      register(form)(dispatch)(response => {
        console.log('trigger');
        navigate(LOGIN, {data: response});
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (authState.data || authState.error) {
          clearAuthState()(dispatch);
        }
      };
    }, [authState.data, authState.error]),
  );
  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      error={authState.error}
      loading={authState.loading}
    />
  );
};

export {SignUp};
