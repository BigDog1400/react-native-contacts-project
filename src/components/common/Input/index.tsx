/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ReactNode} from 'react';
import {Text, TextInputProps, TextStyle, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';

type InputProps = {
  onChangeText: ((text: string) => void) | undefined;
  value: string | undefined;
  style?: TextStyle;
  label?: string;
  icon?: string | ReactNode;
  iconPosition?: 'right' | 'left';
  error?: string;
} & TextInputProps;

const Input = ({
  onChangeText,
  value,
  style,
  label,
  icon,
  iconPosition,
  error,
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const getFlexDirection = (iconPosition: InputProps['iconPosition']) => {
    if (icon && iconPosition === 'left') {
      return 'row';
    }
    if (icon && iconPosition === 'right') {
      return 'row-reverse';
    }
    return undefined;
  };

  const getBorderColor = (error: InputProps['error']) => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    }
    return colors.grey;
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            alignItems: icon ? 'center' : 'baseline',
            flexDirection: getFlexDirection(iconPosition),
            borderColor: getBorderColor(error),
          },
        ]}>
        <View>{icon && iconPosition === 'right' && icon}</View>
        <TextInput
          {...rest}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export {Input};
