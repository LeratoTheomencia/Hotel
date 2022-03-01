import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { db, firebase } from './Firebase/Firebase/Conflig';
//import Slideshow from 'react-native-slideshow';

const DeluxeDetails = ({ navigation, route }) => {
  return (
    <View style={styles.container}>


      <Text style={styles.header}>Deluxe</Text>

      <ScrollView style={{ flex: 1 }}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={16} >
        <View>
          <Image source={require('../../assets/Rooms/Deluxe kING-1.JPG')} style={styles.img}  />
        </View>
        <View>
          <Image source={require('../../assets/Rooms/deluxe single room.jpg')} style={styles.img} />
        </View>
        <View>
          <Image source={require('../../assets/Rooms/deluxe-one-bedroom.jpg')} style={styles.img} />
        </View>
        <View>
          <Image source={require('../../assets/Rooms/double-deluxe-room.jpg')} style={styles.img} />
        </View>
        <View>
          <Image source={require('../../assets/Rooms/self-catering.jpg')} style={styles.img} />
        </View>
        <View>
          <Image source={require('../../assets/Rooms/gym.jpg')} style={styles.img} />
        </View>
        <View>
          <Image source={require('../../assets/Images/outdoor pool.jpeg')} style={styles.img} />
        </View>
      </ScrollView>



      <Text style={styles.title}>Details</Text>

      <View style={styles.main}>
        <Text style={styles.text}>2 Bedroom</Text>
        <Text style={styles.text}>Kitchen</Text>
        <Text style={styles.text}>Bathroom with a shower</Text>
        <Text style={styles.text}>Living Room</Text>
        <Text style={styles.text}>Televevion</Text>
        <Text style={styles.text}>Free Breakfast</Text>
        <Text style={styles.text}>Pool</Text>
        <Text style={styles.text}>Gym</Text>
      </View>


      <View style={styles.price}>
        <Text style={styles.text}>Price:</Text>
        <Text style={styles.text}>R880 per night</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center' }}>
        <Image source={require('../../assets/Images/icons8-weber-30.png')} style={styles.bbq} />

        <Image source={require('../../assets/Images/icons8-wi-fi-connected-30.png')} style={styles.wifi} />
        <Image source={require('../../assets/Images/icons8-snowflake-30.png')} style={styles.snowflake} />
      </View>

      <View style={{ flexDirection: 'row' }}>

        <Text style={{ marginLeft: 10 }}>BBQ facility</Text>

        <Text style={{ marginLeft: 20 }}>Free WiFi</Text>

        <Text style={{ marginLeft: 40 }}>Air conditioning</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btn} onPress={() => navigation.navigate('Calender')}>Book Now</Text>
      </TouchableOpacity>





    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10
  },
  main: {
    marginTop: 10,
    marginLeft: 10,
  },
  bbq: {
    marginLeft: 5,
    width: 50,
    height: 50

  },
  wifi: {
    marginLeft: 40,
    width: 50,
    height: 50

  },
  snowflake: {
    marginLeft: 70,
    width: 50,
    height: 50

  },
  text: {
    fontSize: 15,
    fontWeight: 600,
    marginLeft: 10,

  },
  price: {
    marginLeft: 10,
    marginTop: 20
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    height: 40,
    width: 120,
    backgroundColor: '#146BEE',
    marginLeft: 100
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});

export default DeluxeDetails;