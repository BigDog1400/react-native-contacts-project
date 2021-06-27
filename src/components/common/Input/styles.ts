import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
  },
  error: {
    paddingTop: 4,
    color: colors.danger,
    fontSize: 12,
  },
});
