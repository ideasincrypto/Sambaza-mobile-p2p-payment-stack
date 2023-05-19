import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function CardDetails(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.action();
      }}
      style={{...styles.container, ...styles.shadow}}>
      <View style={styles.topHead}>
        <Text style={{color: props.title === 'Delete Card' ? 'red' : 'black'}}>
          {props.title}
        </Text>
        <Image
          source={
            props.title === 'Show Card Details' && props.show === false
              ? require('../../../assets/eye.png')
              : props.image
          }
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: props.title === 'Delete Card' ? 'red' : 'black',
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 20,
    right: 20,
    marginBottom: 10,
    top: -90,
    width: '90%',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-evenly',

    flexDirection: 'row',
  },
  topHead: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#290B54',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
