import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '@env';
export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
    }
  };
};
