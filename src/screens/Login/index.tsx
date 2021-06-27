import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Container} from '../../components/common/Container';
import {CustomButton} from '../../components/common/CustomButton';
import {Input} from '../../components/common/Input';
import {LoginComponent} from '../../components/Login';

const Login = () => {
  const [text, onChangeText] = useState('Useless Text');

  return <LoginComponent />;
};

export {Login};
