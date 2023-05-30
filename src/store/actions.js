import AsyncStorage from '@react-native-async-storage/async-storage';
import {config} from '../features/services/config';
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
    const data = {
      email: email,
      password,
    };
    await config
      .post(`/login`, data)
      .then(res => {
        token = res.data.data;
      })
      .catch(e => {
        return e;
      });
    await AsyncStorage.setItem('token', token);
    dispatch({
      type: 'LOGIN',
      payload: token,
    });
  };
};

export const SignUp = async (
  firstname,
  lastname,
  email,
  phonenumber,
  tag,
  password,
) => {
  const data = {
    firstname: firstname,
    lastname: lastname,
    password: password,
    email: email,
    phone: `+254` + phonenumber,
    tag: tag,
  };
  await config
    .post('/signup', data)
    .then(res => {
      return res.data.message;
    })
    .catch(e => {
      return e;
    });
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
