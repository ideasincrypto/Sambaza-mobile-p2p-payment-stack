import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';

import PageHeader from '../../components/PageHeader';
import {useDispatch} from 'react-redux';
import {Logout} from '../../store/actions';
const SettingsScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
  };
  const goBack = () => {
    navigation.navigate('Home');
  };
  const elements = [
    {
      id: 0,
      image: require('../../../assets/profile.png'),
      title: 'First Name',
      data: '',
    },
    {
      id: 1,
      image: require('../../../assets/profile.png'),
      title: 'Last Name',
      data: '',
    },
    {
      id: 2,
      image: require('../../../assets/email.png'),
      title: 'Email',
      data: '',
    },
    {
      id: 3,
      image: require('../../../assets/call.png'),
      title: 'Phone',
      data: '',
    },
    {
      id: 4,
      image: require('../../../assets/accounttype.png'),
      title: 'Accounttype',
      data: '',
    },
    {
      id: 5,
      image: require('../../../assets/location.png'),
      title: 'Address',
      data: '',
    },
  ];
  return (
    <View style={styles.container}>
      <PageHeader goBack={goBack} />
      <ScrollView
        contentContainerStyle={{
          top: 0,
          left: 0,
          bottom: 70,
          right: 0,
          padding: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.details}>
          <Image
            source={require('../../../assets/avatar.jpg')}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
          />
          <View style={{marginHorizontal: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'black'}}>
                John Doe
              </Text>
              <Image
                source={require('../../../assets/verified.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'blue',
                  borderRadius: 50,
                }}
              />
            </View>
            <Text>@Johndoe</Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'column',
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 16}}>Account</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                Profile Data
              </Text>
            </View>
            <Image
              source={require('../../../assets/right-arrow.png')}
              resizeMode="contain"
              style={{
                width: 30,
                tintColor: 'gray',
                height: 30,
                tintColor: 'gray',
              }}
            />
          </TouchableOpacity>

          <Text style={{fontSize: 16}}>Security</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/lock.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  marginHorizontal: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Two-factor Authentication
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? 'lightblue' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/hide.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  marginHorizontal: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Change Password
              </Text>
            </View>
            <Image
              source={require('../../../assets/right-arrow.png')}
              resizeMode="contain"
              style={{
                width: 30,
                tintColor: 'gray',
                height: 30,
                tintColor: 'gray',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 16}}>Preferences</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/onetap.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  marginHorizontal: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Sambaza Tap
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? 'lightblue' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/language.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Language
              </Text>
            </View>
            <Text>English(USA)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/currency.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',

                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Default Currency
              </Text>
            </View>
            <Text>USD</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16}}>App</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/info.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                About
              </Text>
            </View>
            <Image
              source={require('../../../assets/right-arrow.png')}
              resizeMode="contain"
              style={{
                width: 30,
                tintColor: 'gray',
                height: 30,
                tintColor: 'gray',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              logout();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/logout.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  tintColor: 'gray',
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  containerElement: {
    flex: 1,
    top: 0,
    left: 20,

    right: 20,
    padding: 20,
  },
  user: {
    marginTop: 10,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
  },
  verificationTxt: {
    fontSize: 13,
  },
  verification: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    top: 7,

    borderRadius: 15,
    width: '100%',

    borderWidth: 1,
  },
  details: {
    flexDirection: 'column',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  recipient: {
    marginTop: 10,
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 16,
    color: 'black',
  },
  verifyBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
