import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
export default function Loader() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#3D0B86" />
    </View>
  );
}
