/* eslint-disable react-native/no-inline-styles */
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';
import {View, Alert, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container} from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({navigation}: {navigation: DrawerNavigationHelpers}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you shure?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container
        style={{
          alignItems: 'center',
        }}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/logo.png')}
        />
        <View>
          {menuItems.map(item => (
            <TouchableOpacity
              onPress={item.onPress}
              style={styles.items}
              key={item.name}>
              {item.icon}
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export {SideMenu};
