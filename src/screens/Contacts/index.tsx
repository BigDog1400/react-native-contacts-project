/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../components/common/Container';
import {RouteProp, DrawerActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeNavigatorStackParamList} from '../../navigations/HomeNavigator';

type ProfileScreenRouteProp = RouteProp<
  HomeNavigatorStackParamList,
  'Contacts'
>;

type ProfileScreenNavigationProp = StackNavigationProp<
  HomeNavigatorStackParamList,
  'Contacts'
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Contacts = ({route, navigation}: Props) => {
  const {setOptions, dispatch} = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => dispatch(DrawerActions.toggleDrawer())}>
          <Text
            style={{
              padding: 10,
            }}>
            NAV
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <Text>Contacts Component</Text>
    </Container>
  );
};

export {Contacts};
