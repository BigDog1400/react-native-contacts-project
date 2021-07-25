import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import {Login} from '../screens/Login';
import {SignUp} from '../screens/Register';

export type AuthNavigatorStackParamList = {
  [LOGIN]: any;
  [REGISTER]: undefined;
};

function AuthNavigator() {
  const AuthStack = createStackNavigator<AuthNavigatorStackParamList>();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
    </AuthStack.Navigator>
  );
}

export {AuthNavigator};
