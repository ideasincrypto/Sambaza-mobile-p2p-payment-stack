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
import CheckBox from '@react-native-community/checkbox';
export default function SignUpScreen({navigation}) {
  const [isPasswordShown, setPassowrdShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
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
            Create Your Account
          </Text>
          <Text style={{fontSize: 12, color: 'white'}}>
            Sambaza money today!
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          style={{...styles.navbar}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
                First Name
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
                  placeholder="Enter your first name"
                  placeholderTextColor={'black'}
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
                Second Name
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
                  placeholder="Enter your second name"
                  placeholderTextColor={'black'}
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
                  placeholder="Enter your email address"
                  placeholderTextColor={'black'}
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
                User Tag
              </Text>
              <View
                style={{
                  width: '100%',
                  borderColor: 'gray',
                  height: 50,
                  borderWidth: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',

                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 22,
                }}>
                <TextInput
                  placeholder="@"
                  value="@"
                  editable={false}
                  placeholderTextColor={'black'}
                  style={{
                    width: '15%',
                    borderRightWidth: 1,
                    borderRightColor: 'black',
                  }}></TextInput>
                <TextInput
                  placeholder="Enter your user tag"
                  placeholderTextColor={'black'}
                  style={{
                    width: '85%',
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
                Phone Number
              </Text>
              <View
                style={{
                  width: '100%',
                  borderColor: 'gray',
                  height: 50,
                  borderWidth: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',

                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 22,
                }}>
                <TextInput
                  placeholder="+254"
                  editable={false}
                  placeholderTextColor={'black'}
                  keyboardType="numeric"
                  style={{
                    width: '15%',
                    borderRightWidth: 1,
                    borderRightColor: 'black',
                  }}></TextInput>
                <TextInput
                  placeholder="Enter your phone number"
                  placeholderTextColor={'black'}
                  keyboardType="numeric"
                  style={{
                    width: '85%',
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                  marginTop: 10,
                }}>
                <CheckBox
                  style={{marginRight: 8}}
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={isChecked ? '#3D0B86' : undefined}
                />

                <Text style={{color: 'black'}}>
                  I agree to the terms and conditions
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  ...styles.button,
                }}>
                <Text style={{fontSize: 18, ...{color: 'white'}}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                marginBottom: 50,
              }}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: 'grey',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 14}}>Already have an account?</Text>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#4D3AA5',

                    fontFamily: 'MontserratAlternates-SemiBold',
                    marginLeft: 6,
                  }}>
                  Login
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
}

const styles = StyleSheet.create({
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
});
