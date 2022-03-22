import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
//import { get } from 'react-native/Libraries/Utilities/PixelRatio';
//import { useEffect } from 'react/cjs/react.production.min';
import { db, firebase } from './Firebase/Firebase/Conflig';
import { Card } from 'react-native-paper';

const DeluxeDetails = ({ navigation, route }) => {

  const [rooms, setRooms] = useState([]);

  {
    rooms.map((data) => {
      return (
        <View>
          <Text style={{ marginTop: 20, marginLeft: 10, textAlign: 'center' }}>Deluxe</Text>
          <Text>{(data.description)}</Text>
        </View>
      )
    })
  }

  return (
    <View style={styles.contain}>
      <Card>
        <Image source={route.params.image} style={styles.img} />
      </Card>
      <Card style={styles.card}>
        <Text style={{ fontWeight: 'bold', marginTop: 2, marginLeft: 6 }}>{route.params.name}</Text>
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{route.params.description}</Text>
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{route.params.price}</Text>
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{route.params.gym}</Text>
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{route.params.breakfast}</Text>
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{route.params.pool}</Text>
        <Text style={{ marginTop: 4, marginLeft: 6 }}>{route.params.television}</Text>

        <View style={{ flexDirection: 'row', }}>
          <View style={{ marginTop: 4, marginLeft: 6 }}>
            <Image source={route.params.image2} style={styles.image} />
            <Text style={{ flexDirection: 'row', color: '#EEC048', fontWeight: 'bold' }}>BBQ</Text>
          </View>
          <View style={{ marginTop: 4 }}>
            <Image source={route.params.image1} style={styles.image} />
            <Text style={{ marginLeft: 6, color: '#EEC048', fontWeight: 'bold' }}>WIFI</Text>
          </View>
          <View style={{ marginTop: 4 }}>
            <Image source={route.params.image3} style={styles.image} />
            <Text style={{ marginLeft: 6, color: '#EEC048', fontWeight: 'bold' }}>Air-Con</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btn} onPress={() => navigation.navigate('Calender')}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </Card>


    </View>
  );
}

export default DeluxeDetails;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  img: {
    width: 400,
    height: 280,
    alignSelf: 'center',
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2
  },
  card: {
    borderColor: '#eee',
    width: 420,
    height: 380,
    backgroundColor: '#fff',
    marginLeft: 12,
    marginTop: 10,
    shadowRadius: 60,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignSelf: 'center'
  },
  main: {
    marginTop: 10,
    marginLeft: 10,
  },
  price: {
    marginLeft: 10,
    marginTop: 20
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    height: 40,
    width: 120,
    backgroundColor: '#146BEE',
    marginLeft: 280
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  image: {
    width: 30,
    height: 30,
  },
  img1: {
    width: 400,
    height: 180,
    alignSelf: 'center',
    marginTop: 10, 
    
  },
})
