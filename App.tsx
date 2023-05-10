import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import Drawers from './src/navigation/drawers';

const App = () => {
  return (
    <NavigationContainer>
      <Drawers />
    </NavigationContainer>
  );
};

export default App;
