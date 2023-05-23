import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
export default function WelcomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomScreen} />
    </Stack.Navigator>
  );
}
