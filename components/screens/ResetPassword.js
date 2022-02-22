import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {firebase} from './Firebase/Firebase/Conflig'

const ResetPassword = ({ navigation }) => {

  const [email, setEmail] = useState ('');
  const [resetEmail, setResetEmail] = useState ('')
  return (
    <View style={styles.container}>
        <Card style={styles.main}>
        <Text style={styles.header}>BON Hotel</Text>
        <Image
          source={require('../../assets/Images/beach hotel.jpeg')}
          style={styles.img}
        />

      </Card>

        <View>
            <Text style={styles.head}>Reset Password</Text>
           
            <TextInput
                placeholder='Email'
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
            />

            <View style={styles.btn}>
                <TouchableOpacity onPress={() => resetEmail()}>
                    <Text style={styles.send}>Send Verification Email</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  img: {
    width: 313,
    height: 689,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  header: {
    marginTop: -50,
    fontSize: 30,
    position: 'relative',
    color: '#2666CF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: -520,
    marginTop: 80,
  },
   head: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 30,
      marginLeft: 50
    },
    input: {
      width: 300,
      marginTop: 30,
      borderRadius: 10,
      height: 50,
      backgroundColor: '#B2F9FC',
      position: 'relative',
      left: 6
    },
    btn: {
      backgroundColor: '#146BEE',
      marginTop: 100,
      height: 60,
      width: 250,
      borderRadius: 20,
      marginLeft: 25

    },
    send: {
      color: 'white',
      marginLeft: 45,
      marginTop: 19,
      fontSize: 15,
      fontWeight: 'bold'
    }
});

export default ResetPassword;