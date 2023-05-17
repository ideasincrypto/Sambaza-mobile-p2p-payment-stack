import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
export default function PageHeader({goBack}) {
  return (
    <View style={style.header}>
      <View
        style={{
          alignItems: 'center',
          elevation: 4,
          justifyContent: 'center',
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderRadius: 150,
          height: 40,
          width: 40,
        }}>
        <TouchableOpacity
          onClick={() => {
            goBack();
          }}>
          <Image
            source={require('../../../assets/back.png')}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 7,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});
