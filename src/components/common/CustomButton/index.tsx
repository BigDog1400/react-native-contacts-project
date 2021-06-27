import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  View,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
type CustomButtonProps = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const CustomButton = ({
  loading,
  title,
  disabled = false,
  danger,
  primary,
  secondary,
  onPress,
}: CustomButtonProps) => {
  const getBgColor = () => {
    if (disabled) return colors.grey;
    if (primary) return colors.primary;
    if (secondary) return colors.secondary;
    if (danger) return colors.danger;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        <Text
          style={{
            color: disabled ? 'black' : 'white',
            paddingLeft: loading ? 5 : 0,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {CustomButton};
