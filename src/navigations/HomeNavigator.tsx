import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  SETTINGS,
  CREATE_CONTRACT,
} from '../constants/routeNames';
import {Contacts} from '../screens/Contacts';
import {ContactDetails} from '../screens/ContactDetails';
import {CreateContact} from '../screens/CreateContact';
import {Settings} from '../screens/Settings';
import {Text} from 'react-native';

export type HomeNavigatorStackParamList = {
  [CONTACT_LIST]: undefined;
  [CONTACT_DETAILS]: undefined;
  [CREATE_CONTRACT]: undefined;
  [SETTINGS]: undefined;
};

function HomeNavigator() {
  const HomeStack = createStackNavigator<HomeNavigatorStackParamList>();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTRACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
