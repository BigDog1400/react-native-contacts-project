import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from '../../components/common/Container';
import {CustomButton} from '../../components/common/CustomButton';
import {Input} from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import styles from './styles';
const LoginComponent = () => {
  const [text, onChangeText] = useState('Useless Text');
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            value={text}
            onChangeText={text => onChangeText(text)}
            placeholder="Enter Username"
            // error="This field is required"
          />

          <Input
            label="Password"
            value={text}
            onChangeText={text => onChangeText(text)}
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry
            placeholder="Enter Password"
            error="This field is required"
          />
          <CustomButton
            onPress={e => console.log(e)}
            loading
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
