import React, { useState } from 'react';
import {
  View,
 ScrollView,

 Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Modal } from 'react-native-paper'
import UserCard from '../../components/UserCard';

const PaymentScreen = ({navigation}) => {
  const [user,setUser] = useState([])
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white',   justifyContent:'space-between',alignItems:'center',padding: 20,width:"90%",borderRadius:15,margin:"auto",left:20,right:20};
  const data = [
    
      {
        name: 'John Doe',
        icon: require('../../../assets/avatar.jpg'),

      },
      {
        name: 'Mary Doe',
        icon: require('../../../assets/avatar2.jpg'),
     
      },
      {
        name: 'Jane Doe',
        icon: require('../../../assets/avatar3.jpg'),
      
      },
  ];
  

  return (
    <SafeAreaView
      style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search person or merchant"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={{flex: 1, padding: 0}}
        />
        <Image
          source={require('../../../assets/search.png')}
          resizeMode="contain"
          style={{
            width: 25,
            tintColor: 'black',
            height: 25,
          }}
        />
      </View>
      <ScrollView
      
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      
      contentInset={{ // iOS only
        top:0,
        left:0,
        bottom:0,
        right:20
      }}
      contentContainerStyle={{
        flex: 1,
        top: 50,
        left: 20,
    
        right: 20,
        padding: 20,     
      
      
      }}
    >
      {data.map((item, index) => (
        <UserCard key={index} showModal={showModal} setUser={setUser} data={item} >
        
        </UserCard>
      ))}
    </ScrollView>
    <Modal visible={visible}  onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View style={styles.popup}>
         <TouchableOpacity onPress={()=>{
          navigation.navigate("RequestPaymentScreen")
         }} style={styles.btn}>
      
             <Image
            source={require('../../../assets/recieve.png')}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text style={styles.text}>Request Payment</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{
          navigation.navigate("MakePaymentScreen")
         }}  style={styles.btn}>
         <Image
            source={require('../../../assets/send.png')}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text style={styles.text}>Make Payment</Text>
         </TouchableOpacity>
         </View>
        </Modal>
    </SafeAreaView>
  );
};

export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'white',

    
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS == 'ios' ? 20 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
 
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  searchContainer: {
    height: 50,
    backgroundColor: '#eee',
    marginTop: 10,
    width: '95%',
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    margin:5,
    fontFamily: 'MontserratAlternates-Medium',
   
  },
  btn:{
    flexDirection:'column',
    alignItems:'center',
    padding:10,
    backgroundColor: '#fff',
    justifyContent:'center',
    width:120,
    height:150,
    borderRadius:15,
    shadowColor: '#290B54',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
    
  },
  popup:{
   width:'80%',
   justifyContent:'space-between',alignItems:'center',
   flexDirection:"row"
  }
 
});
