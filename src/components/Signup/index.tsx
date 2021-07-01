import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from '../../components/common/Container';
import {CustomButton} from '../../components/common/CustomButton';
import {Input} from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import {authType} from '../../context/initialStates/authState';
import {userSignUpFormValues} from '../../types/userSignUpFormValues';
import styles from './styles';

type RegisterComponentProps = {
  onSubmit: () => void;
  form: userSignUpFormValues;
  errors: userSignUpFormValues;
  onChange: ({name, value}: {name: string; value: string}) => void;
} & Pick<authType, 'error' | 'loading'>;

const RegisterComponent = ({
  onSubmit,
  form,
  errors,
  onChange,
  loading,
  error,
}: RegisterComponentProps) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a Free Account</Text>
        <View style={styles.form}>
          {error?.error && <Text>{error?.error}</Text>}
          {error && <Text>{JSON.stringify(error)}</Text>}
          <Input
            label="Username"
            value={form.username}
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            placeholder="Enter Username"
            error={errors.username}
          />
          <Input
            label="First Name"
            value={form.firstName}
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            value={form.lastName}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            placeholder="Enter Last Name"
            error={errors.lastName}
          />

          <Input
            label="Email"
            value={form.email}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            placeholder="Enter Email"
            error={errors.email}
          />

          <Input
            label="Password"
            value={form.password}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry
            placeholder="Enter Password"
            error={errors.password}
          />
          <CustomButton
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
            primary
            title="Submit"
          />
        </View>
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an Account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export {RegisterComponent};
