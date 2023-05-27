import AsyncStorage from '@react-native-async-storage/async-storage';
// get all user data from backend on login
export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const Login = (email, password) => {
  return async dispatch => {
    let token = null;
    if (email === 'admin@admin.com' && password == '1234') {
      token = email + password;
      await AsyncStorage.setItem('token', token);
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    });
  };
};

export const SignUp = (email, password) => {
  return async () => {};
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
