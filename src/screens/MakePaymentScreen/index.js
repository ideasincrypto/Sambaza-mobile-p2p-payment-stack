import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import PageHeader from '../../components/PageHeader';
import VirtualKeyboard from 'react-native-virtual-keyboard';
const MakePaymentScreen = ({navigation, route}) => {
  const [amount, setAmount] = useState(0);
  const currency = ['KES', 'USD'];
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader goBack={goBack} />

      <View style={styles.details}>
        <Image
          source={require('../../../assets/avatar.jpg')}
          resizeMode="contain"
          style={{
            width: 85,
            height: 85,
            borderRadius: 50,
          }}
        />
        <Text style={styles.recipient}>John Doe</Text>
        <Text style={styles.amount}>{amount}</Text>
        <SelectDropdown
          searchPlaceHolder="currency"
          data={currency}
          buttonStyle={styles.dropdown1BtnStyle}
          defaultButtonText={'Currency'}
          onSelect={(selectedItem, index) => {}}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <VirtualKeyboard
          color="black"
          pressMode="string"
          onPress={val => setAmount(val)}
        />
        <View style={styles.details}>
          <TouchableOpacity
            style={{
              ...styles.appButtonContainer,
              marginTop: 20,
              paddingVertical: 16,
              backgroundColor: '#3D0B86',
            }}>
            <Text style={[styles.appButtonText]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakePaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  currency: {
    color: 'black',
    fontSize: 16,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipient: {
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 16,
    color: 'black',
  },
  dropdown1BtnStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    
    borderRadius: 15,
  },
  amount: {
    fontFamily: 'MontserratAlternates-Medium',
    marginTop: 10,
    fontSize: 50,
    color: 'black',
  },
  appButtonContainer: {
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    margin: 'auto',
    width: '80%',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
