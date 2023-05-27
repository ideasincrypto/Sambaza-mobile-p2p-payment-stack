import AsyncStorage from '@react-native-async-storage/async-storage';
// get all user data from backend on login
export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
    }
  };
};
