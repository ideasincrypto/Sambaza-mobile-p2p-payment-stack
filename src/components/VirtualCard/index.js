import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import GradientText from '../GradientText';
export default function VirtualCard(props) {
  return (
    <TouchableOpacity
      style={{
        width: '85%',
        ...style.shadow,
      }}
      activeOpacity={0.5}>
      <View
        style={{
          borderRadius: 50,
          marginBottom: 40,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/backgroundcard2.jpg')}
            resizeMode="cover"
            style={{
              width: '100%',
              margin: 10,

              height: 200,
              borderRadius: 15,
              borderRadius: 15,
            }}></Image>
        </View>
        <View style={style.priceTag}>
          <GradientText style={{fontWeight: 'bold'}}>SAMBAZA CARD</GradientText>
        </View>
        <View style={style.cardInner}>
          <Text style={{fontWeight: '500', fontSize: 20, color: 'black'}}>
            {props.show ? `1234 5678 9303 3849` : `1234 **** **** ***`}
          </Text>

          <View style={style.validity}>
            <Text style={{fontSize: 10, fontWeight: '500'}}>
              VALID {`\n`}THRU
            </Text>
            <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
              05/21
            </Text>
            <View style={style.vvContainer}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                }}>
                CVV
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                }}>
                {props.show ? `279` : `***`}
              </Text>
            </View>
          </View>
          <View style={style.bottomContainer}>
            <Text
              style={{
                fontWeight: '400',
                color: 'black',
                top: 20,
                fontSize: 16,
              }}>
              {props.show ? `John Doe` : 'John ***'}
            </Text>

            <Text
              style={{
                fontWeight: '400',
                color: 'black',
                top: 20,
                fontSize: 16,
              }}>
              {props.show ? `$120` : '$***'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  priceTag: {
    width: 'auto',

    position: 'absolute',
    flexDirection: 'row',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,

    margin: 20,
    right: 0,

    borderRadius: 100,
  },
  vvContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 9,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: '#290B54',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  validity: {
    alignItems: 'center',
    top: 10,
    flexDirection: 'row',
  },
  cardInner: {
    height: 200,
    padding: 25,

    bottom: 40,
  },
});
