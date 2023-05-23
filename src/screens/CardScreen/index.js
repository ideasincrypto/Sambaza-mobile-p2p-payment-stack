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
  return (
    <View style={styles.container}>
      <PageHeader goBack={goBack} navigation={navigation} />
      <View style={styles.cardContainer}>
        <VirtualCard show={show} />
      </View>

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
      <View style={styles.btn}>
        <TouchableOpacity>
          <FAB
            style={{backgroundColor: '#3D0B86'}}
            color="#393a39"
            icon="pencil"></FAB>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
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
