/*import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import {firebase} from './Firebase/Firebase/Conflig'


const Deluxe = ({ navigation }) =>{
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Deluxe Rooms</Text>

    <View style={{marginTop: 20, alignSelf: 'left'}}>
    <Text style={{textAlign: 'right', fontWeight: 'bold', fontSize: 15}}>Self-Catering</Text>
      <Image source={require('../../assets/Rooms/Deluxe King-1.jpg')} style={styles.img} />
      </View>

      <View style={{marginTop: 20, alignSelf: 'left'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Self-Catering</Text>
      <Image source={require('../../assets/Rooms/deluxe single room.jpg')} style={styles.img} />
    </View>

    <View style={{marginTop: 20, alignSelf: 'left'}}>
    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Self-Catering</Text>
    <Image source={require('../../assets/Rooms/double-standard-room.jpg')} style={styles.img} />
    </View>

    <View style={{marginTop: 20, alignSelf: 'left'}}>
    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Self-Catering</Text>
    <Image source={require('../../assets/Rooms/Deluxe-One-Bedroom.jpg')} style={styles.img} />
    </View>

    <View style={{marginTop: 20, alignSelf: 'left'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Self-Catering</Text>
      <Image source={require('../../assets/Rooms/self-catering.jpg')} style={styles.img} />
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
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    width: 300,
    height: 200,
    marginLeft: 15,
    marginTop: 20,
  },
});

export default Deluxe;