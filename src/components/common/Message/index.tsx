/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  View,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
type MessageProps = {
  message: string;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  retry: boolean;
  retryFn: () => void;
  danger?: boolean;
  success?: boolean;
  onDismiss: () => void;
};

const Message = ({
  message,
  danger,
  info,
  success,
  primary,
  retry,
  onDismiss,
  retryFn,
}: MessageProps) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  if (userDismissed) {
    return null;
  }
  return (
    <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          {message}
        </Text>
        {retry && typeof onDismiss !== 'function' && (
          <TouchableOpacity onPress={retryFn}>
            <Text
              style={{
                color: 'white',
              }}>
              Retry
            </Text>
          </TouchableOpacity>
        )}
        {typeof onDismiss === 'function' && (
          <TouchableOpacity
            onPress={() => {
              setUserDismissed(true);
              onDismiss();
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              X
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export {Message};
