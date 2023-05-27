import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
          data={currency}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'Select currency'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
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
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

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
