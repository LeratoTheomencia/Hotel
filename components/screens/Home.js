import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, _ScrollView } from 'react-native';

import { db, firebase } from './Firebase/Firebase/Conflig';
const Home = ({ navigation, route }) => {

  const [rooms, setRooms] = useState([])

  const getRooms = (() => {
    firebase.firestore().collection('Rooms').onSnapshot((snapShot) => {
      const dis = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));


      console.log(dis);
      setRooms(dis);

    })


  })

  useEffect(() => {
    getRooms()
  }, [])


  return (
    <View style={styles.container}>


      {rooms.map((data) => (

        <View  >


          <View style={styles.main}>
            <Image source={data.image} style={styles.img} />
          </View>

          <View style={{ marginLeft: 220, marginTop: -90 }}>
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Hotel', data)}>
              <Text style={{ marginLeft: 270, color: '#146BEE', fontWeight: 'bold', marginTop: 5 }}>View more</Text>
            </TouchableOpacity>
          </View>

        </View>
      ))}




    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  img: {
    width: 200,
    height: 150,
    borderRadius: 10,

  },

  main: {
    marginTop: 50,
    marginLeft: 15
  }
})
