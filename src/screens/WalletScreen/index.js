import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SettingsCard from '../../components/SettingsCard';
import {useNavigation} from '@react-navigation/native';
const WalletScreen = ({navigation}) => {
  const navigatione = useNavigation();
  const data = [
    {
      name: 'Cards',
      icon: require('../../../assets/card.png'),
      screen: 'CardScreen',
    },
    {
      name: 'Banks',
      icon: require('../../../assets/bank.png'),
      screen: 'BankScreen',
    },
    {
      name: 'Link to M-pesa',
      icon: require('../../../assets/phone.png'),
      screen: 'MpesaScreen',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        contentInset={{
          // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          flex: 1,
          top: 0,
          left: 20,

          right: 20,
          padding: 20,
        }}>
        {data.map((item, index) => (
          <SettingsCard key={index} data={item}></SettingsCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default WalletScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
