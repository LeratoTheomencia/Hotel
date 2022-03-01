import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { firebase } from './Firebase/Firebase/Conflig';
import { db } from './Firebase/Firebase/Conflig';
const Home = ({ navigation, route }) => {

  const [rooms, setRooms] = useState([]);
  const [standardRooms, setStandardRooms] = useState([]);
  const [suiteRooms, setSuiteRooms] = useState([]);
  const getRooms = (() => {

    db.collection('Rooms').onSnapshot((snapShot) => {
      const dis = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(dis);
      console.log(deluxe)
    })


    db.collection('Rooms').onSnapshot((snapShot) => {
      const dis = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStandardRooms(dis);
      console.log(standardRooms)
    })

  })

  db.collection('Rooms').onSnapshot((snapShot) => {
    const dis = snapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setSuiteRooms(dis);
    console.log(suiteRooms)
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
            <Text style={{ marginTop: 20, marginLeft: 10, textAlign: 'center' }}>Deluxe</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DeluxeDetails', data)} >
              <Image source={(data.image)} style={styles.img1} />
              </TouchableOpacity>
              <View>
              <Text style={{marginLeft: 10}}>{data.price}</Text>
              </View>
          </View>
        )

      })}

      {standardRooms.map((data) => {
        return (
          <View>
            <Text style={{ marginTop: 20, marginLeft: 10, textAlign: 'center' }}>Standard</Text>
            <TouchableOpacity onPress={() => navigation.navigate('StandardDetails', data)} >
              <Image source={{uri:data.coverImage}} style={styles.img1} />
              </TouchableOpacity>
              <View>
              <Text style={{marginLeft: 10}}>{data.price}</Text>
              </View>
          </View>
        )

      })}

{suiteRooms.map((data) => {
        return (
          <View>
            <Text style={{ marginTop: 20, marginLeft: 10, textAlign: 'center' }}>Suite</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SuiteDetails', data)} >
              <Image source={{uri:data.coverImage}} style={styles.img1} />
              </TouchableOpacity>
              <View>
              <Text style={{marginLeft: 10}}>{data.price}</Text>
              <Text style={{marginLeft: 10}}>{data.description}</Text>
              </View>
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
    justifyContent: 'center',
    alignItems: 'center'
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
    left: 30, 
    alignItems: 'center'
  },
});

export default Home;
