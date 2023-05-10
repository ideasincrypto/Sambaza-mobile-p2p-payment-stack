import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


const SettingsCard = (props) => {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.box}>
        <Image
      source={props.data.icon}
      resizeMode="contain"
      style={{
        width: 30,
        marginLeft:5,
        tintColor: '#000',
        height: 30,
      }}
        />
        <View style={style.innerbox}>
          <Text style={style.name}>{props.data.name}</Text>
         
        </View>
      </View>
      <View style={style.more}>
      <Image
      source={require("../../../assets/right-arrow.png")}
      resizeMode="contain"
      style={{
        width: 20,
        tintColor: '#000',
        height: 20,
      }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;

const style = StyleSheet.create({
  container: {
    right: 20,
    top: 10,
    backgroundColor: '#f5f5f5',
    marginBottom:10,
    height: 70,
    padding:4,
    
    borderRadius:8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  date: {
    top: 5,
  },
  more: {
    fontSize: 19,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
   
    width:30,
   
  },
  name: {
    
    marginLeft:-20,
    color:"black",
    fontSize:17,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerbox: {
    left: 40,
  },

  title: {
    fontFamily: 'MontserratAlternates-Medium',
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  boxContainer: {
    right: 40,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
