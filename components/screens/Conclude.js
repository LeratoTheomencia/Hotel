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

const Conclude = ({ navigation }) => {

  return (
    <View style={styles.container}>
    <View style={styles.main}>

      <Image source={require('../../assets/Images/beach hotel.jpeg')} style={styles.img} />

    <Text style={styles.text}></Text>

    <TouchableOpacity>
      <Text style={styles.text} onPress={() => navigation.navigate('Home')}>ENJOY YOUR STAY!</Text>
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
 
})

export default Conclude;