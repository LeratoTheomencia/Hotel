import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {firebase} from './Firebase/Firebase/Conflig'

const About = ({ navigation }) => {

  const Home = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
    
      <Card>
        <Image source={require('../../assets/Images/sitting room.jpg')} style={styles.sittingroom} />
        <Text style={styles.mainText}>East Burger Street, Bloemfontein Central, 9301 Bloemfontein, South Africa –
        +27 313 621 300</Text>
      </Card>

        <View>
        <Text style={{marginTop: 80, fontSize: 20, fontWeight: 700, }}>Description</Text>
        <Text style={{marginLeft: 5}}>BON Hotel Bloemfontein Central is conveniently located in the heart of Bloemfontein’s business centre and only 9.5 km from the Bram Fischer International Airport. It offers a restaurant and elegant rooms with air conditioning.

Each room at BON Hotel Bloemfontein Central is stylishly decorated and fitted with wooden floors. All feature work desks and satellite TV. Tea-and-coffee-making facilities are provided.

The Courtroom Restaurant is open daily for breakfast and dinner. Guests can enjoy afternoon drinks and pub lunches at the hotel’s Judges Bar.

The hotel is situated within the Bloem Plaza shopping complex, 2.3 km from the Tourist Centre.</Text>
      </View>

       <View style={{flexDirection:'row', marginTop: 40}}>

               <Image source={require('../../assets/Images/icons8-weber-30.png')} style={styles.bbq} />

               <Image source={require('../../assets/Images/icons8-wi-fi-connected-30.png')} style={styles.wifi} />
               <Image source={require('../../assets/Images/icons8-snowflake-30.png')} style={styles.snowflake} />
      </View>

      <View style={{flexDirection:'row',}}>
             <Text style={{marginLeft: 40,}}>BBQ facility</Text>

      <Text style={{marginLeft: 30,}}>Free WiFi</Text>

      <Text style={{marginLeft: 50 }}>Air conditioning</Text>
      </View>

      <TouchableOpacity style={styles.button}  onPress={Home}>
        <Text style={styles.btn}>Next</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  sittingroom: {
    width: 320,
    height: 280,
    borderRadius: 10,
  },
  mainText: {
    fontSize: 15, 
    color: '#0F00FF', 
    textAlign: 'center',
    justifyContent: 'center', 
    fontWeight: 'bold',
    marginTop: -140,
    position: 'relative'
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
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    height: 40,
    width: 120,
    backgroundColor: '#146BEE',
    marginLeft: 100,
  },
   btn: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});

export default About;