import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import QuickSenderCard from '../QuickSenderCard';

const Transfer = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  people = [
    {
      name: 'John Doe',
      image: require('../../../assets/avatar.jpg'),
    },
  ];
  return (
    <View style={style.container}>
      <Text style={style.title}>Quick Sambaza</Text>
      <View style={style.quicksend}>
        <TouchableOpacity style={style.button}>
          <Image
            source={require('../../../assets/add.png')}
            resizeMode="contain"
            style={{
              width: 45,
              height: 45,
            }}
          />
          <Text style={style.text}>Add</Text>
        </TouchableOpacity>
        <Animated.FlatList
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={style.chipsScrollView}
          contentInset={{
            // iOS only
            top: 0,
            left: 0,
            bottom: 0,
            right: 20,
          }}
          data={people}
          renderItem={({item, index}) => (
            <QuickSenderCard data={item} index={index} scrollX={scrollX} />
          )}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 20 : 0,
            paddingHorizontal: 30,
          }}></Animated.FlatList>
      </View>
    </View>
  );
};

export default Transfer;

const style = StyleSheet.create({
  container: {
    top: 50,
    left: 20,
    right: 20,
    padding: 20,
  },
  text: {
    color: '#290b54',
    top: 5,
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'MontserratAlternates-Medium',
    fontWeight: '500',
  },
  button: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  quicksend: {
    padding: 15,
    top: 10,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'MontserratAlternates-Medium',
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
});
