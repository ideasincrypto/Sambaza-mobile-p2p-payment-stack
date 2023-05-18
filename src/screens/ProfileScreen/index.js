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
import ProfileElement from '../../components/ProfileElement';
const ProfileScreen = ({navigation}) => {
  const [verification, setVerification] = useState(true);
  const goBack = () => {
    navigation.navigate('Home');
  };
  const elements = [
    {
      id: 0,
      image: require('../../../assets/profile.png'),
      title: 'First Name',
      data: '',
    },
    {
      id: 1,
      image: require('../../../assets/profile.png'),
      title: 'Last Name',
      data: '',
    },
    {
      id: 2,
      image: require('../../../assets/email.png'),
      title: 'Email',
      data: '',
    },
    {
      id: 3,
      image: require('../../../assets/call.png'),
      title: 'Phone',
      data: '',
    },
    {
      id: 4,
      image: require('../../../assets/accounttype.png'),
      title: 'Accounttype',
      data: '',
    },
    {
      id: 5,
      image: require('../../../assets/location.png'),
      title: 'Address',
      data: '',
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <PageHeader goBack={goBack} />
      <ScrollView
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        contentInset={{
          // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        contentContainerStyle={{
          flex: 1,
          top: 0,
          left: 0,

          right: 0,
          padding: 20,
        }}>
        <View style={styles.details}>
          <Image
            source={require('../../../assets/avatar.jpg')}
            resizeMode="contain"
            style={{
              width: 105,
              height: 105,
              borderRadius: 50,
            }}
          />
          <View style={styles.user}>
            {verification === false && (
              <View style={{...styles.verification, borderColor: 'red'}}>
                <Text style={styles.verificationTxt}>Not verifed</Text>
              </View>
            )}
            {verification === true && (
              <View style={{...styles.verification, borderColor: 'green'}}>
                <Text style={styles.verificationTxt}>Verified</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.containerElement}>
          {elements.map(element => (
            <ProfileElement element={element} key={element.id} />
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  containerElement: {
    flex: 1,
    top: 0,
    left: 20,

    right: 20,
    padding: 20,
  },
  user: {
    marginTop: 10,

    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
  },
  verificationTxt: {
    fontSize: 13,
  },
  verification: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    top: 7,

    borderRadius: 15,
    width: '100%',

    borderWidth: 1,
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipient: {
    marginTop: 10,
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 16,
    color: 'black',
  },
  verifyBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
