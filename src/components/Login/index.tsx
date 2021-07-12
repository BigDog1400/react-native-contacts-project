import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from '../../components/common/Container';
import {CustomButton} from '../../components/common/CustomButton';
import {Input} from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import {authType} from '../../context/initialStates/authState';
import {userSignInFormValues} from '../../types/userSignInFormValues';
import {Message} from '../common/Message';
import styles from './styles';

type LoginComponentProps = {
  onSubmit: () => void;
  form: userSignInFormValues;
  errors: userSignInFormValues;
  onChange: ({name, value}: {name: string; value: string}) => void;
  onDismiss: () => void;
} & Pick<authType, 'error' | 'loading'>;

const LoginComponent = ({
  onSubmit,
  form,
  errors,
  onChange,
  loading,
  error,
  onDismiss,
}: LoginComponentProps) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        {error?.error && (
          <Message onDismiss={onDismiss} message={error?.error} />
        )}
        {error && (
          <Message
            onDismiss={onDismiss}
            danger
            message={JSON.stringify(error)}
          />
        )}
        <View style={styles.form}>
          <Input
            label="Username"
            value={form.username}
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            placeholder="Enter Username"
          />

          <Input
            label="Password"
            value={form.password}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={isSecureEntry}
            placeholder="Enter Password"
          />
          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Submit"
          />
        </View>
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a New Account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export {LoginComponent};
