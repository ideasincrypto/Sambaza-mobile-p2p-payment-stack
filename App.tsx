import React,{useState ,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeStackNavigator from './src/navigation/welcome';
import Drawers from './src/navigation/drawers';
import { Provider } from 'react-redux';
import {View} from 'react-native'
import { store } from './src/store';
import { ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { Init } from "./src/store/actions";
import Loader from './src/components/Loader';
const App = () => {
  const RootNavigator = () => {
    const token = useSelector((state) => state.Reducers.authToken);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const init = async () => {
      await dispatch(Init());
      setLoading(false);
    };

    useEffect(() => {
      init();
    }, []);

    if (loading) {
      return (
      <Loader/>
      );
    }
    return (
      <NavigationContainer>
        {token === null ?<WelcomeStackNavigator/>:<Drawers/>}
      </NavigationContainer>
    );
  };
  const [userState, setUserState] = useState('logged in');
 
  return (
  <Provider store={store}>
 <RootNavigator/>
    </Provider>
  
  );
};

export default App;
