import React, {useState} from 'react';
import {RegisterComponent} from '../../components/Signup';
import {userSignUpFormValues} from '../../types/userSignUpFormValues';

const SignUp = () => {
  const [form, setForm] = useState<userSignUpFormValues>({});
  const [errors, setErrors] = useState<userSignUpFormValues>({});

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
  };
  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
};

export {SignUp};
