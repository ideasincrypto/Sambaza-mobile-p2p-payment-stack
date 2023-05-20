import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const TopCard = props => {
  return (
    <View style={{...style.container, ...style.shadow}}>
      <TouchableOpacity
        onPress={() => {
          props.showTopupView(true);
        }}
        style={style.button}>
        <Image
          source={require('../../../assets/deposit.png')}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Text style={style.text}>Top up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          source={require('../../../assets/withdraw.png')}
          resizeMode="contain"
          style={{
            width: 30,

            height: 30,
          }}
        />
        <Text style={style.text}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          source={require('../../../assets/more.png')}
          resizeMode="contain"
          style={{
            width: 29,
            tintColor: '#290b54',
            height: 29,
          }}
        />
        <Text style={style.text}>More</Text>
      </TouchableOpacity>
    </View>
  );
};
<Text>Top up</Text>;

export default TopCard;
const style = StyleSheet.create({
  container: {
    left: 20,
    right: 20,
    position: 'absolute',
    top: 170,
    backgroundColor: 'white',
    height: 90,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
  },
  button: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.5,
    elevation: 1,
  },
});
