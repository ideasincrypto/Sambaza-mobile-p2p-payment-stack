import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'white',
  },

  cardContainer: {
    margin: 'auto',
    width: '100%',
    alignItems: 'center',
  },
});
