import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import WalletScreen from '../screens/WalletScreen';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();
const SambazaBtn = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -17,
      justifyContent: 'center',
      alignItems: 'center',
    
    }}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FFF',
        justifyContent:'center'
        ,alignItems:'center',
    
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
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
     
       
          backgroundColor: '#FFFFFF',
         
          height: 70,
          
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,

                  tintColor: focused ? '#3D0B86' : '#FFFFFF',
                }}>
                <Image
                  source={require('../../assets/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#3D0B86' : 'gray',
                  }}
                />
         
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Sambaza"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({focused}) => (
          <>
              <Image
                source={require('../../assets/transfer.png')}
                resizeMode="contain"
                style={{
                  width: 29,
                  height: 29,
                  tintColor: '#3D0B86' ,
                }}
              />
              <Text
              style={{
                color:  '#000' ,
                fontSize: 15,
                top:15,
                fontFamily:'LeagueSpartan',
                fontWeight: 'bold',
              }}>
           
            </Text>
             
            </>
          ),
          tabBarButton: (props) => (<SambazaBtn {...props} />)
          ,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,

                  tintColor: focused ? '#3D0B86' : 'gray',
                }}>
                <Image
                  source={require('../../assets/wallet.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#3D0B86' : 'gray',
                  }}
                />
               
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
