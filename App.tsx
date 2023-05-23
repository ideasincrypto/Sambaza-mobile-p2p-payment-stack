import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeStackNavigator from './src/navigation/welcome';
import Drawers from './src/navigation/drawers';
import { Provider } from 'react-redux';

const App = () => {
  
  const [userState, setUserState] = useState('logged in');
 
  return (
  
    <NavigationContainer>
      {userState==="logged out" ?<WelcomeStackNavigator/>:<Drawers/>}
    </NavigationContainer>
  
  );
};

export default App;
