import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PageHeader from '../../components/PageHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
export default function AddPhonecreen({navigation}) {
  const operator = ['Safaricom', 'Airtel'];
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.Container}>
      <PageHeader goBack={goBack} />
      <View style={{marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Text
            style={{
              fontSize: 22,

              color: 'black',
              fontFamily: 'MontserratAlternates-SemiBold',
            }}>
            Link Phone Number
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 22, marginTop: 10}}>
        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 500,
              marginVertical: 8,
            }}>
            Operator
          </Text>

          <SelectDropdown
            data={operator}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select Operator'}
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
        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 500,
              marginVertical: 8,
            }}>
            Phone Number
          </Text>
          <View
            style={{
              width: '100%',
              borderColor: 'gray',
              height: 50,
              borderWidth: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',

              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="+254"
              editable={false}
              placeholderTextColor={'black'}
              keyboardType="numeric"
              style={{
                width: '15%',
                borderRightWidth: 1,
                borderRightColor: 'black',
              }}></TextInput>
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={'black'}
              keyboardType="numeric"
              style={{
                width: '85%',
              }}></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...styles.button,
          }}>
          <Text style={{fontSize: 18, ...{color: 'white'}}}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'white',
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', fontSize: 16, textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', fontSize: 16, textAlign: 'left'},

  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    backgroundColor: '#4D3AA5',

    borderRadius: 12,
    marginTop: 18,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
