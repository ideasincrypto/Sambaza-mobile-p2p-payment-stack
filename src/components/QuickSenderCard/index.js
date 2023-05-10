import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TouchableOpacity} from 'react-native-gesture-handler';

const QuickSenderCard = ({data, scrollX, index}) => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('screen');
  const cardWidth = width / 1.8;

  const inputRange = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
  ];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.1],
  });
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });
  return (
    <Animated.View
      style={{
        backgroundColor: 'white',
        top: -18,

        height: 100,
        width: 100,

        marginRight: 5,
        borderRadius: 15,
      }}>
      <Animated.View
        style={{
          height: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 100,

          width: '100%',
          borderRadius: 15,
        }}>
        <TouchableOpacity>
          <View style={style.imageCont}>
            <Image
              source={data.image}
              resizeMode="cover"
              style={style.CardImage}></Image>
            <Text style={style.text}>{data.name}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};
export default QuickSenderCard;

const style = StyleSheet.create({
  imageCont: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  CardImage: {
    width: 45,

    borderRadius: 50,
    height: 45,
  },
  text: {
    color: '#290b54',
    top: 4,
    fontFamily: 'MontserratAlternates-Medium',
    fontWeight: '500',
    fontSize: 14,
  },
});
