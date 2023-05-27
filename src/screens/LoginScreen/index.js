import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Login} from '../../store/actions';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isPasswordShown, setPassowrdShow] = useState(true);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(Login(email, password));
  };

  /*let user = {
      username: username,
      password: password,
    };
    dispatch(login(user))
      .then(response => {
        if (response.status == 'success') {
          navigation.replace('HomeScreen');
        }
      })
      .catch(error => {
        navigation.replace('LoginScreen');
      });
      */

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{
          height: 170,
          width: '100%',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,

          resizeMode: 'cover',
        }}
        source={require('../../../assets/backgroundcard.jpg')}></Image>

      <View style={{marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontFamily: 'MontserratAlternates-SemiBold',
            }}>
            Sign in to your Account
          </Text>
          <Text style={{fontSize: 12, color: 'white'}}>
            Sambaza money today!
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          style={{...styles.navbar}}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}>
          <View style={{marginHorizontal: 22, marginTop: 10}}>
            <View style={{marginBottom: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 500,
                  marginVertical: 8,
                }}>
                Email Address
              </Text>
              <View
                style={{
                  width: '100%',
                  borderColor: 'gray',
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 22,
                }}>
                <TextInput
                  placeholder="Enter your email address or tag"
                  placeholderTextColor={'black'}
                  value={email}
                  onChangeText={e => {
                    setEmail(e);
                  }}
                  keyboardType="email-address"
                  style={{
                    width: '100%',
                  }}></TextInput>
              </View>
            </View>

            <View style={{marginBottom: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 500,
                  marginVertical: 8,
                }}>
                Password
              </Text>
              <View
                style={{
                  width: '100%',
                  borderColor: 'gray',
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 22,
                }}>
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={'black'}
                  value={password}
                  onChangeText={e => {
                    setPassword(e);
                  }}
                  secureTextEntry={isPasswordShown}
                  style={{
                    width: '100%',
                  }}></TextInput>
                <TouchableOpacity
                  onPress={() => setPassowrdShow(!isPasswordShown)}
                  style={{
                    position: 'absolute',
                    right: 12,
                  }}>
                  {isPasswordShown == true ? (
                    <Image
                      source={require('../../../assets/hide.png')}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/eye.png')}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  onLogin();
                }}
                style={{
                  ...styles.button,
                }}>
                <Text style={{fontSize: 18, ...{color: 'white'}}}>Login</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: 'grey',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 14}}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate('SignupScreen')}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#4D3AA5',

                    fontFamily: 'MontserratAlternates-SemiBold',
                    marginLeft: 6,
                  }}>
                  Sign up
                </Text>
              </Pressable>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: 'grey',
                  marginHorizontal: 10,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    backgroundColor: '#4D3AA5',

    borderRadius: 12,
    marginTop: 18,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    marginTop: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: 'white',
    resizeMode: 'cover',
    display: 'flex',

    color: 'white',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
