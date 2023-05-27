import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FAB, IconButton, Portal} from 'react-native-paper';
import PageHeader from '../../components/PageHeader';

const MobilePhonecreen = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [show, setShowDetails] = useState(false);
  const action = () => {
    setShowDetails(!show);
  };
  const [phonenumber, setPhoneNumberDetails] = useState([
    {name: '', cvv: '', expireson: '', balance: '', cardnumber: ''},
  ]);
  return (
    <View style={styles.container}>
      <PageHeader goBack={goBack} navigation={navigation} />

      {phonenumber[0].name === '' && (
        <>
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text style={{color: 'black'}}>Link a phone number below</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              navigation.navigate('AddPhoneScreen');
            }}
            style={styles.touchableOpacityStyle}>
            <Image
              // FAB using TouchableOpacity with an image
              // For online image

              source={require('../../../assets/add2.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
        </>
      )}

      <View style={styles.btn}></View>
    </View>
  );
};

export default MobilePhonecreen;

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    borderRadius: 50,
    backgroundColor: '#3D0B86',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    elevation: 5,

    bottom: 80,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    tintColor: 'white',
    height: 50,
  },
  btn: {
    position: 'absolute',
    right: 30,
    bottom: 90,
  },
  container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'white',
  },
  button: {
    top: -90,
    paddingBottom: 16,

    paddingVertical: 10,
    backgroundColor: '#4D3AA5',
    marginHorizontal: 30,
    borderRadius: 12,
    marginTop: 18,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    margin: 'auto',
    width: '100%',
    alignItems: 'center',
  },
});
