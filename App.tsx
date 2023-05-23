import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeStackNavigator from './src/navigation/welcome';
import Drawers from './src/navigation/drawers';

const App = () => {
  
  const [userState, setUserState] = useState('logged out');
 
  return (
    <NavigationContainer>
      {userState==="logged out" ?<WelcomeStackNavigator/>:<Drawers/>}
    </NavigationContainer>
  );
};

export default App;
