import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, CheckBox, Pressable } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {firebase} from './Firebase/Firebase/Conflig';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import services from './Firebase/Firebase/dataService/services'




const Bookings = ({ navigation }) => {
  
  const [checked, setChecked] = React.useState('first');
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const Navigation = ()=> {
    firebase.firestore().collection("Booking").doc().set({
      fullName,
      email,
      phone,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  
  

  return (
    <View style={styles.container}>
      <View style={styles.mainText}>
      <Text style={styles.text}>Hotel Reservation Form</Text>
      </View>

              <View>
          <TextInput 
              style={styles.input}
              placeholder="Full Name"
                   onChangeText={(text) => setFullName(text)}
          onPress={"Full Name"}
              
          />

           <TextInput 
              style={styles.input}
              placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
          onPress={"Email"}
              
          />

               <TextInput 
              style={styles.input}
              placeholder="Phone number"
                   onChangeText={(text) => setPhone(text)}
          onPress={"Phone Number"}
              
          />

               <TextInput 
              style={styles.input}
              placeholder="Check-in date & time"
                   onChangeText={(text) => setDate(text)}
          onPress={"Date & Time"}
              
          />
                      <TextInput 
              style={styles.input}
              placeholder="Check-out date & time"
              onChangeText={(text) => setDate(text)}
          onPress={"Date & Time"}
              
          />

          <Text style={{marginTop: 10, marginLeft: 10, fontWeight: 500}}>Room Preference</Text>

        </View>

        <View style={styles.checkboxContainer}>
        <Text>Deluxe</Text>
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text>Standard</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text>Suite</Text>
      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />

        </View>
                    <TextInput 
              style={styles.input}
              placeholder="Number of rooms needed *"
              
          />

                            <TextInput 
              style={styles.input}
              placeholder="Number of room occupants *"
              
          />

           <Text style={{marginTop: 20, marginLeft: 10}}>Special Request</Text>                 <TextInput 
              style={{backgroundColor: '#eee', width: 311, height: 138, marginLeft: 10}}
              placeholder=""
              
          />

                           <TouchableOpacity style={styles.button}>
                  <Text style={styles.btn} onPress={Navigation}>Submit</Text>
              </TouchableOpacity>

              <View>
              <TouchableOpacity style={styles.button}>
            <Text style={styles.btn} onPress={() => navigation.navigate('Conclude')}>Next</Text>
          </TouchableOpacity>
              </View>

    </View>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainText: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    fontSize: 20,
    fontWeight: 400
  },
     input: {
    width: 311,
    height: 40,
    left: 10,
    top: 100,
    backgroundColor: '#fff',
    border: 30,
    borderRadius: 60,
    marginTop: 15,
    paddingLeft: 10,
    shadowRadius: 60,
  },
   button: {
    marginTop: 5,
   paddingLeft: 230
  },
  btn: {
    backgroundColor: '#eee',
    borderRadius: 80,
    width: 70,
    height: 30,
    textAlign: 'center',
    padding: 3,
    shadowRadius: 60,
  },
checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },
  
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
    checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    checkboxChecked: {
    backgroundColor: '#fff',
    shadowRadius: 60,
  },
});

export default Bookings