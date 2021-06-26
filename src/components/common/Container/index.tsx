import React from 'react';
import {ReactNode} from 'react';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
};
const Container = ({children, style}: ContainerProps) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export {Container};
