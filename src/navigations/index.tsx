import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
// import {AuthNavigator} from './AuthNavigator';
import {DrawNavigator} from './DrawNavigator';
import HomeNavigator from './HomeNavigator';

function AppNavContainer() {
  const {
    state: {authState},
  } = useContext(GlobalContext);
  console.log({authState});
  return (
    <NavigationContainer>
      {authState.isLoggedIn ? <DrawNavigator /> : <HomeNavigator />}
    </NavigationContainer>
  );
}

export {AppNavContainer};
