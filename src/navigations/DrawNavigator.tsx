import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import HomeNavigator from './HomeNavigator';

function DrawNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export {DrawNavigator};
