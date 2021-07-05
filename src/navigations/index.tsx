import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {GlobalContext} from '../context/Provider';
import {AuthNavigator} from './AuthNavigator';
import {DrawNavigator} from './DrawNavigator';

function AppNavContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {
    state: {authState},
  } = useContext(GlobalContext);
  const [authLoaded, setAuthLoaded] = useState(false);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated || authState.isLoggedIn ? (
            <DrawNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

export {AppNavContainer};
