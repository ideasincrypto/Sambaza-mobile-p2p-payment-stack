import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
const data = [
  {
    recipient: 'Spotify',
    amount: 122.2,
    transactiontype: 'debit',
    date:
      new Date().getDate() +
      '-' +
      new Date().getMonth() +
      '-' +
      new Date().getFullYear(),
  },
];

const TransactionCard = () => {
  return (
    <TouchableOpacity style={{...style.container, ...style.shadow}}>
      <View style={style.box}>
        <View style={style.imagebox}>
          <Image
            source={require('../../../assets/spotify.png')}
            style={{width: 50, height: 50, left: 20}}
          />
        </View>
        <View style={style.innerbox}>
          <Text style={style.recipient}>Spotify</Text>
          <Text style={style.date}>{data[0].date}</Text>
        </View>
      </View>
      <Text style={style.amount}>
        {data[0].transactiontype === 'debit' ? '-' : '+'} ${data[0].amount}
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionCard;

const style = StyleSheet.create({
  container: {
    right: 20,
    top: 10,
    backgroundColor: 'white',
    height: 90,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  date: {
    top: 5,
  },
  amount: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    right: 20,
  },
  recipient: {
    fontWeight: 'bold',
    color: 'black',
  },
  imagebox: {},
  box: {
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
  },
  innerbox: {
    left: 40,
  },

  title: {
    fontFamily: 'MontserratAlternates-Medium',
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  boxContainer: {
    right: 40,
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
});
