import React from 'react';
import PaymentScreen from '../screens/PaymentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CardScreen from '../screens/CardScreen';
import WalletScreen from '../screens/WalletScreen';

const Stack = createStackNavigator();
export default function WalletStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
    </Stack.Navigator>
  );
}
