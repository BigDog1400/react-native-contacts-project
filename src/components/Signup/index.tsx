import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from '../../components/common/Container';
import {CustomButton} from '../../components/common/CustomButton';
import {Input} from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
const RegisterComponent = () => {
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
        <Text style={styles.subTitle}>Create a Free Account</Text>
        <View style={styles.form}>
          <Input
            label="First Name"
            value={text}
            onChangeText={text => onChangeText(text)}
            placeholder="Enter First Name"
          />
          <Input
            label="Last Name"
            value={text}
            onChangeText={text => onChangeText(text)}
            placeholder="Enter Last Name"
          />
          <Input
            label="Username"
            value={text}
            onChangeText={text => onChangeText(text)}
            placeholder="Enter Username"
          />
          <Input
            label="Email"
            value={text}
            onChangeText={text => onChangeText(text)}
            placeholder="Enter Email"
          />

          <Input
            label="Password"
            value={text}
            onChangeText={text => onChangeText(text)}
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry
            placeholder="Enter Password"
          />
          <CustomButton
            onPress={e => console.log(e)}
            loading
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
