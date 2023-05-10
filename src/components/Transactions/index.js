import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import TransactionCard from '../TransactionCard';

const Transactions = () => {
  return (
    <View style={style.constainer}>
      <View style={style.header}>
        <Text style={style.title}>Recent Transactions</Text>
        <View style={style.boxContainer}>
          <Text>Show All</Text>
        </View>
      </View>

      <TransactionCard />
    </View>
  );
};

export default Transactions;

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    top: -30,
    left: 20,

    right: 20,
    padding: 20,
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
});
