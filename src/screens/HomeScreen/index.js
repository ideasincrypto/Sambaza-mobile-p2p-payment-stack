import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Provider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
import Emoji from 'react-native-emoji';
import TopCard from '../../components/TopCard';
import Transactions from '../../components/Transactions';
import Transfer from '../../components/Transfer';
import TopupfromSlide from '../../components/TopupfromSlide';

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => {
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);
  const [topupView, showTopupView] = useState(false);
  return (
    <Provider>
      <View style={styles.container}>
        <LinearGradient
          colors={['#3D0B86', '#121c20']}
          style={styles.topContainer}
          start={{x: 0.2, y: 0.2}}
          end={{x: 1, y: 1}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handlePressMenuButton}
              style={{
                borderRadius: 50,
                top: -10,
                alignItems: 'center',
                justifyContent: 'center',
                left: 20,
                width: 40,
                height: 40,
              }}>
              <Image
                source={require('../../../assets/menu.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  tintColor: 'white',
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'MontserratAlternates-Medium',
              bottom: 20,
              fontSize: 16,
              color: 'white',
            }}>
            <Emoji name="hand"></Emoji>
            Hello,David
          </Text>
          <Text
            style={{
              fontFamily: 'MontserratAlternates-Medium',
              bottom: 10,
              fontSize: 14,
              color: 'gray',
            }}>
            Your balance
          </Text>
          <Text
            style={{
              fontFamily: 'MontserratAlternates-Medium',
              fontSize: 40,
              bottom: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            $40000
          </Text>

          <TopCard showTopupView={showTopupView} />
        </LinearGradient>

        <Transfer />

        <Transactions />
        <TopupfromSlide
          show={topupView}
          onDismiss={() => {
            showTopupView(false);
          }}
          enableBackDropDismiss
        />
      </View>
    </Provider>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Contact" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    height: 200,
    backgroundColor: 'blue',
  },
});
