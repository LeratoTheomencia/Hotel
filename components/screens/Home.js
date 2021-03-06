import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons'

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

      <ScrollView>
        <Card>
          <Image
            source={require('../../assets/Images/beach hotel.jpeg')}
            style={styles.img1}
          />

        </Card>


        {rooms.map((data) => (

          <View>


            <View style={styles.main}>
              <Image source={data.image} style={styles.img} />
            </View>

            <View style={{ marginLeft: 220, marginTop: -130 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{data.name}</Text>
              <Text>{data.price}</Text>
              <Text>{data.breakfast}</Text>
              <Text>{data.pool}</Text>
              <Text>{data.gym}</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Hotel', data)}>
                <Text style={{ marginLeft: 270, color: '#146BEE', fontWeight: 'bold', marginTop: 5 }}>View more</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}
      </ScrollView>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  img1: {
    width: 400,
    height: 300,
    alignSelf: 'center',
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2
  },
  img: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },

  main: {
    marginTop: 40,
    marginLeft: 15
  }
})
