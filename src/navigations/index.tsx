import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
// import {AuthNavigator} from './AuthNavigator';
import {DrawNavigator} from './DrawNavigator';
import HomeNavigator from './HomeNavigator';

function AppNavContainer() {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  console.log({isLoggedIn});
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawNavigator /> : <HomeNavigator />}
    </NavigationContainer>
  );
}

export {AppNavContainer};
