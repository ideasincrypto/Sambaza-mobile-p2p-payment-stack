import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function WelcomScreen() {
  const navigation = useNavigation();
  return (
    <Swiper style={styles.wrapper}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../assets/man-pocket.jpg')}>
        <View style={{flex: 1, backgroundColor: 'black', opacity: 0.2}} />
        <View
          style={{
            position: 'absolute',
            height: '100%',
            zIndex: 2,
            width: '100%',
            justifyContent: 'flex-end',
            paddingHorizontal: 10 * 2,
            paddingBottom: 10 * 6,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontFamily: 'MontserratAlternates-Medium',
                fontSize: 10 * 4,
                textTransform: 'capitalize',
              }}>
              Welcome to Sambaza Cashless
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: 10 * 1.4,
                marginTop: 5,

                fontFamily: 'MontserratAlternates-Medium',
              }}>
              The simplest way to make online payments and money transfers to
              friends and family hassle free.
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.slide2}>
        <Image
          source={require('../../../assets/wallet2.png')}
          style={{width: 200, height: 240}}></Image>
        <Text style={styles.textheading}>The future of finance</Text>
        <Text style={styles.text}>
          Send or receive money, or pay bills, our application is designed to
          simplify your financial life.
        </Text>
      </View>
      <View style={styles.slide2}>
        <Image
          source={require('../../../assets/credit-card-3d.webp')}
          style={{width: 250, height: 240}}></Image>
        <Text style={styles.textheading}>Let's get started</Text>
        <Text style={styles.text}>
          It's now easier to shop on your favorite online store with Sambaza
          virtual cards.
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={{
            padding: 10 * 2,
            backgroundColor: '#4D3AA5',
            borderRadius: 10,
            alignItems: 'center',
            width: '90%',
            justifyContent: 'center',

            marginTop: 10 * 3,
          }}>
          <Text
            style={{
              color: 'white',

              fontSize: 10 * 2,
              fontWeight: '700',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  textheading: {
    fontSize: 27,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'MontserratAlternates-SemiBold',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  getstartedBtn: {
    width: 320,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    backgroundColor: '#3D0B86',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    fontFamily: 'MontserratAlternates-Medium',
    marginBottom: 40,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    textAlign: 'center',
  },

  slide2: {flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20},
});
