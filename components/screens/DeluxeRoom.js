/*import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import {firebase} from './Firebase/Firebase/Conflig'


const Deluxe = ({ navigation }) =>{
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Deluxe</Text>

        <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 10, fontWeight: '600', marginLeft: 5}}>Bedroom</Text>
          <TouchableOpacity>
            <Text style={styles.title}  onPress={() => navigation.navigate('DeluxeDetails')}>Details</Text>
        </TouchableOpacity>
        </View>
        <Image source={require('../../assets/Images/deluxe.jpg')} style={styles.img1} />
       

        <Image source={require('../../assets/Images/pexels-photo-deluxe - Copy.jpeg')} style={styles.img2} /> 
     

        <Image source={require('../../assets/Images/pexels-photo-deluxe1.jpeg')} style={styles.img3} />
         

       <View style={{flexDirection:'row', marginLeft: 1, marginTop: 10}}>

               <Image source={require('../../assets/Images/icons8-weber-30.png')} style={styles.bbq} />

               <Image source={require('../../assets/Images/icons8-wi-fi-connected-30.png')} style={styles.wifi} />
               <Image source={require('../../assets/Images/icons8-snowflake-30.png')} style={styles.snowflake} />
      </View>

      <View style={{flexDirection:'row', marginTop: -5}}>
    
             <Text style={{marginLeft: 30, marginBottom: -1}}>BBQ facility</Text>

      <Text style={{marginLeft: 20, marginBottom: -1}}>Free WiFi</Text>

      <Text style={{marginLeft: 40 }}>Air conditioning</Text>
      </View>


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
  img1: {
    marginTop: 5,
    borderRadius: 10,
    left: 10,
  },
  img2: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20
  },
    img3: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20
  },
  bbq: {
    marginLeft: 45
  },
  wifi: {
    marginLeft: 50
  },
  snowflake: {
    marginLeft: 90
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 500,
    color: '#146BEE',
    marginLeft: 180
  }
});

export default Deluxe;