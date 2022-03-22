import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { firebase } from './Firebase/Firebase/Conflig';
import getDirections from 'react-native-google-maps-directions'

const Conclude = ({ navigation }) => {

  const handleGetDirections = () => {
    const data = {
      source: {
        latitude: -29.087217,
        longitude: 26.154898
      },
      destination: {
        latitude: -28.741943,
        longitude: 24.771944
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -28.741943,
          longitude: 24.771944
        },
        {
          latitude: -28.741943,
          longitude: 24.771944
        },
        {
          latitude: -28.741943,
          longitude: 24.771944
        }
      ]
    }
    getDirections(data)
  }


  return (
    <View style={styles.container}>
    <View style={styles.main}>

      <Image source={require('../../assets/Images/beach hotel.jpeg')} style={styles.img} />

    <Text style={styles.text}></Text>

    <TouchableOpacity>
      <Text style={styles.text} onPress={() => navigation.navigate('Home')}>COMPLETE!</Text>
    </TouchableOpacity>

    <TouchableOpacity
          style={styles.paragraph}
          onPress={handleGetDirections} title="Get Directions">
          <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16, fontWeight: 'bold', color: 'white' }}> Directions</Text>
        </TouchableOpacity>
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
  },  
  img: {
    width: 880,
    height: 689,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: -520,
    marginTop: 80,
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#146BEE',
    textAlign: 'center',
    marginBottom: -300
  },
  paragraph: {
    marginTop: 60,
    borderRadius: 40,
    borderWidth: 0,
    alignSelf: 'center',
    backgroundColor: '#EEC048',
    width: 150,
    height: 40,
  },
 
})

export default Conclude;