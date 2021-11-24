import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { firebase } from './Firebase/Firebase/Conflig';
import { db } from './Firebase/Firebase/Conflig';
const Home = ({ navigation, route }) => {

  const [rooms, setRooms] = useState([]);
  const [presidentialRooms, setPresidentialRooms] = useState([]);
  const getRooms = (() => {

    db.collection('Rooms').onSnapshot((snapShot) => {
      const dis = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(dis);
      console.log(rooms)
    })


    db.collection('Presidential').onSnapshot((snapShot) => {
      const dis = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPresidentialRooms(dis);
      console.log(presidentialRooms)
    })

  })

  useEffect(() => {
    getRooms()
  })

  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Image source={require('../../assets/Images/bell.png')} style={styles.bell} />
      </TouchableOpacity>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
        />

        <TouchableOpacity>
          <Image source={require('../../assets/Images/search--v1.png')} style={styles.search} />
        </TouchableOpacity>
      </View>

      {rooms.map((data) => {
        return (
          <View>
            <Text style={{ marginTop: 20 }}>Deluxe</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DeluxeDetails', data)} >
              <Image source={require('../../assets/Images/deluxe.jpg')} style={styles.img1} />
              <Text>{data.price}</Text>
            </TouchableOpacity>
          </View>
        )

      })}

      {presidentialRooms.map((data) => {
        return (
          <View>
            <Text style={{ marginTop: 20 }}>Presidential</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DeluxeDetails', data)} >
              <Image source={{uri:data.coverImage}} style={styles.img1} />
              <Text>{data.price}</Text>
            </TouchableOpacity>
          </View>
        )

      })}

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  bell: {
    marginLeft: 260,
    width: 30,
    height: 30
  },
  input: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    borderRadius: 30,
    height: 40,
    backgroundColor: '#ecf0f1',
  },
  search: {
    width: 25,
    height: 25,
    marginLeft: 270,
    marginTop: -35
  },
  img1: {
    marginTop: 10,
    width: 260,
    height: 150,
    left: 10
  },
  img2: {
    marginTop: 10,
    width: 260,
    height: 150,
    left: 10
  },
  img3: {
    marginTop: 10,
    width: 260,
    height: 150,
    left: 10
  },
});

export default Home;
