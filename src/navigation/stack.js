import React from 'react';
import PaymentScreen from '../screens/PaymentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import RequestPaymentScreen from '../screens/RequestPaymentRequest';
import MakePaymentScreen from '../screens/MakePaymentScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createStackNavigator();
export default function PaymentStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen
        name="RequestPaymentScreen"
        component={RequestPaymentScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen name="MakePaymentScreen" component={MakePaymentScreen} />
    </Stack.Navigator>
  );
}
