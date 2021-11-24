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
        <Card>
          <Image source={require('../../assets/Images/Bon Hotel.jpg')} style={styles.img} />
          <Text style={styles.header}>BON Hotel</Text>
        </Card>

        <View>
            <Text style={styles.head}>Reset Password</Text>
           
            <TextInput
                placeholder='Email'
                style={styles.placeholder}
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
    width: 300,
    height: 300,
    marginTop: 5,
    borderRadius: 20,
  },
   header: {
    marginTop: -50,
    fontSize: 30,
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
   head: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 30,
    },
    placeholder: {
      width: 258,
      backgroundColor: '#ecf0f1',
      height: 42,
      marginTop: 45,
      borderRadius: 20,
      paddingLeft: 15,
      color: 'black'
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