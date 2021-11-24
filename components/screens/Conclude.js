import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
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

    <Text style={styles.text}>Thank you for choosing BON Hotel</Text>

    <TouchableOpacity>
      <Text style={styles.header} onPress={() => navigation.navigate('Home')}>DONE!</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#daa520',
    padding: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#146BEE',
    textAlign: 'center',
    marginTop: 20,
  }, 
  main: {
    marginVertical: 300
  }, 
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#146BEE',
    textAlign: 'center',
  }
})

export default Conclude;