import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default function ProfileElement(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={props.element.image}
          resizeMode="contain"
          style={{
            width: 35,
            tintColor: 'black',
            height: 35,
          }}
        />
      </View>
      <View style={styles.verticleLine}></View>
      <View style={styles.details}>
        <Text style={styles.elementName}>{props.element.title}</Text>
        <Text style={styles.text}>John Doe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    right: 20,
    top: 10,
    backgroundColor: 'white',
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ececec',
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    padding: 10,
  },
  details: {
    marginLeft: 10,
    padding: 10,
  },
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
  },
  verticleLine: {
    height: '30%',
    width: 1,
    backgroundColor: '#c1c1c1',
  },
});
