import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import React, {useContext} from 'react';
import {Dispatch} from 'react';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {GlobalContext} from '../context/Provider';
import HomeNavigator from './HomeNavigator';
import {SideMenu} from './SideMenu/indes';

const getDrawerContent = (
  navigation: DrawerNavigationHelpers,
  dispatch: React.Dispatch<any>,
) => {
  return <SideMenu navigation={navigation} dispatch={dispatch} />;
};

function DrawNavigator() {
  const Drawer = createDrawerNavigator();
  const {dispatch} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) => getDrawerContent(navigation, dispatch)}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export {DrawNavigator};
