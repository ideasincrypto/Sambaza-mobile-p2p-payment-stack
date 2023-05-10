import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


const UserCard = (props) => {
  return (
    <TouchableOpacity style={style.container} onPress={()=>{
    props.showModal(true)
    props.setUser({name:props.data.name,image:props.data.icon}) 
    }}>
      <View style={style.box}>
        <Image
          source={props.data.icon}
          style={{width: 50, height: 50, left: 20,borderRadius:20}}
        />
        <View style={style.innerbox}>
          <Text style={style.recipient}>{props.data.name}</Text>
         
        </View>
      </View>
      <Text style={style.more}>
       
      </Text>
    </TouchableOpacity>
  );
};

export default UserCard;

const style = StyleSheet.create({
  container: {
    right: 20,
    top: 10,
    marginBottom:20,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
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
    right: 20,
  },
  recipient: {
    fontSize: 15,
    fontWeight:"400",
    fontFamily: 'MontserratAlternates-Medium',
    color:"black"
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
