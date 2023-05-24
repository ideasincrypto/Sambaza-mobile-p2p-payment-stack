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
import VirtualCard from '../../components/VirtualCard';
import CardDetails from '../../components/CardDetails';

const CardScreen = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [show, setShowDetails] = useState(false);
  const action = () => {
    setShowDetails(!show);
  };
  const [card, setCardDetails] = useState([
    {name: '', cvv: '', expireson: '', balance: '', cardnumber: ''},
  ]);
  return (
    <View style={styles.container}>
      <PageHeader goBack={goBack} navigation={navigation} />
      <View style={styles.cardContainer}>
        <VirtualCard show={show} />
      </View>
      {card[0].name !== '' && (
        <>
          <CardDetails
            action={action}
            show={show}
            title="Show Card Details"
            image={require('../../../assets/hide.png')}
          />
          <CardDetails
            title="Fund Card"
            image={require('../../../assets/fund.png')}
          />
          <CardDetails
            title="Delete Card"
            image={require('../../../assets/trash.png')}
          />
        </>
      )}

      {card[0].name === '' && (
        <>
          <View
            style={{justifyContent: 'center', top: -90, alignItems: 'center'}}>
            <Text style={{color: 'black'}}>Create a card below.</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
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

export default CardScreen;

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
