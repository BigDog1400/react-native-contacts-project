import {DEV_BACKEND_URL, PROD_BACKEND_URL} from 'react-native-dotenv';

const devEnvironmentVariables = {
  DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
