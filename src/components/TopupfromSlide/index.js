import React, {useRef, useEffect} from 'react';
import {
  View,
  Dimensions,
  Animated,
  Pressable,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Portal} from 'react-native-paper';
export default function TopupfromSlide({
  show,
  onDismiss,
  children,
  enableBackDropDismiss,
}) {
  const bottomSheetHeight = Dimensions.get('window').height * 0.3;
  const deviceWidth = Dimensions.get('window').width;
  const [text, setText] = React.useState('');
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = event => {
    if (event.nativeEvent.translateY > 0) {
      bottom.setValue(event.nativeEvent.translateY);
    }
  };

  const onGestureEnd = event => {
    if (event.nativeEvent.translateY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);
  if (!open) {
    return null;
  }
  return (
    <Portal>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={styles.backDrop}></Pressable>

      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,

            shadowOffset: {
              height: 13,
            },
          },
          styles.shadow,
          styles.common,
        ]}>
        <View style={[styles.header, styles.shadow, styles.common]}>
          <View
            style={{
              width: 60,
              height: 3,
              borderRadius: 1.5,
              position: 'absolute',
              top: 0,
              left: (deviceWidth - 60) / 2,
              zIndex: 10,
              backgroundColor: '#ccc',
            }}></View>
        </View>
        <View styles={styles.methods}>
          <TouchableOpacity style={styles.method}>
            <View style={styles.box}>
              <Image
                source={require('../../../assets/phone.png')}
                style={{width: 25, height: 25, tintColor: '#3D0B86'}}
              />
            </View>
            <Text style={styles.methodname}>Mobile Phone Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.method}>
            <View style={styles.box}>
              <Image
                source={require('../../../assets/bank.png')}
                style={{width: 25, height: 25, tintColor: '#3D0B86'}}
              />
            </View>
            <Text style={styles.methodname}>Bank Transfer</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  methods: {},
  method: {
    left: 20,
    top: 30,

    marginBottom: 30,
    backgroundColor: 'white',
    height: 25,

    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    justifyContent: 'center',
    borderRadius: 50,
    width: 45,
    height: 45,
    backgroundColor: '#d6ccf6',
    alignItems: 'center',
  },
  methodname: {
    left: 16,
    fontFamily: 'Mandali-Regular',
    color: 'black',
  },
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
  },
  imgIn: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textIn: {
    paddingLeft: 6,
    marginTop: 40,
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  dates: {},

  saveBtn: {
    marginTop: 20,
    width: 100,
  },
  descr: {
    marginTop: 40,

    borderRadius: 50,
  },

  header: {
    height: 0,
    borderRadius: 15,
    elevation: 4,
    backgroundColor: 'white',
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
  common: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0,0.012)',
  },
});
