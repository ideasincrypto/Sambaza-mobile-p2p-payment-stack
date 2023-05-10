import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideMenu from '../screens/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import Tabs from './tabs';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      initialRouteName={Tabs}
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
}
