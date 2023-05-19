import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WalletScreen from '../screens/WalletScreen';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PaymentStackNavigator from './paymentstack';
import HomeStackNavigator from '../screens/HomeScreen';
import WalletStackNavigator from './walletstack';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');
const SambazaBtn = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -10,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        ...styles.shadow,
        backgroundColor: '#3D0B86',
        alignItems: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',

          ...styles.shadow,

          backgroundColor: '#FFFFFF',

          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 7,

                  tintColor: focused ? '#3D0B86' : '#FFFFFF',
                }}>
                <Image
                  source={require('../../assets/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: focused ? '#3D0B86' : 'gray',
                  }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 13,
                    color: focused ? '#3D0B86' : 'gray',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Sambaza"
        component={PaymentStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={require('../../assets/transfer.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'white',
                }}
              />
            </>
          ),
          tabBarButton: props => <SambazaBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 7,

                  tintColor: focused ? '#3D0B86' : 'gray',
                }}>
                <Image
                  source={require('../../assets/wallet.png')}
                  resizeMode="contain"
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: focused ? '#3D0B86' : 'gray',
                  }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 13,
                    color: focused ? '#3D0B86' : 'gray',
                    fontWeight: '100',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Wallet
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
