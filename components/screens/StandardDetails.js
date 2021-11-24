import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import {firebase} from './Firebase/Firebase/Conflig'


const StandardDetails = ({ navigation }) =>{
  return (
    <View style={styles.container}>
    
      
      <Text style={styles.header}>Standard</Text>

        <Text style={{marginTop: 10, fontWeight: 'bold', marginLeft: 5, fontSize: 15}}>Details</Text>
        <Image source={require('../../assets/Images/standard 1.jpg')} style={styles.img1} />
      
        <Text style={styles.title}>Details</Text>

      <View style={styles.main}>
        <Text style={styles.text}>2 Bedroom</Text>
        <Text style={styles.text}>Kitchen</Text>
        <Text style={styles.text}>Bathroom with a shower</Text>
        <Text style={styles.text}>Living Room</Text>
        <Text style={styles.text}>Televevion</Text>
        <Text style={styles.text}>Balcony</Text>
        <Text style={styles.text}>Free Breakfast</Text>
        <Text style={styles.text}>Pool</Text>
      </View>

      <View style={styles.price}>
        <Text style={styles.text}>Price:</Text>
        <Text style={styles.text}>R1000 per night</Text>
      </View>  

        <View style={{flexDirection:'row', marginTop: 50}}>
               <Image source={require('../../assets/Images/icons8-weber-30.png')} style={styles.bbq} />

               <Image source={require('../../assets/Images/icons8-wi-fi-connected-30.png')} style={styles.wifi} />
               <Image source={require('../../assets/Images/icons8-snowflake-30.png')} style={styles.snowflake} />
      </View>

      <View style={{flexDirection:'row'}}>
             
             <Text style={{marginLeft: 10}}>BBQ facility</Text>

      <Text style={{marginLeft: 20}}>Free WiFi</Text>

      <Text style={{marginLeft: 40 }}>Air conditioning</Text>
      </View>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.btn} onPress={() => navigation.navigate('Calender')}>Book Now</Text>
        </TouchableOpacity>

       

        

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    header: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    paddingLeft: 5
  },
  main: {
    marginTop: 10,
    paddingLeft: 10,
  },
  bbq: {
    marginLeft: 5,
    
  },
  wifi: {
    marginLeft: 100,
   
  },
  snowflake: {
    marginLeft: 60,
  
  },
  text: {
    fontSize: 15,
    fontWeight: 600,
    
  },
  price: {
    paddingLeft: 10,
    marginTop: 20
  },
    button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    height: 40,
    width: 120,
    backgroundColor: '#146BEE',
    marginLeft: 100
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  img1: {
    marginLeft: 10
  }, 
    img1: {
    marginTop: 5,
    borderRadius: 10,
    left: 10,
  },
});

export default StandardDetails;