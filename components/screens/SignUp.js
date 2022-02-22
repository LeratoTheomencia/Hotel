import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {firebase} from './Firebase/Firebase/Conflig'



 var db = firebase.firestore();
const Signup = ({navigation}) => {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [confirmpassword, setConfirmPassWord] = useState('')



const navsign =()=>{
  navigation.navigate('Signup')
};

 const Login = () => {
   firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
     alert("successfully signed up")
   }).catch(error=>{
     alert(error)
   })
 };
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
          
        </View>
        <TextInput
            style={styles.input}
            placeholder= "Full Name"
            onChangeText={(text)=>setFullName(text)}
         />

           <TextInput
            style={styles.input}
            placeholder= "Email"
            onChangeText={(text)=>setEmail(text)}
         />

           <TextInput
            style={styles.input}
            placeholder= "Password"
            onChangeText={(text)=>setPassWord(text)}
         />

           <TextInput
            style={styles.input}
            placeholder= "Confirm Password"
            onChangeText={(text)=>setConfirmPassWord(text)}
         />

         <TouchableOpacity style={styles.button} onPress={Login}>
            <Text style={styles.btn}>SignUp</Text>
         </TouchableOpacity>

    </View>
  )
}


export default Signup ;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    input: {
      width: 300,
      marginTop: 30,
      borderRadius: 10,
      height: 50,
      backgroundColor: '#B2F9FC',
      position: 'relative',
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
    color: '#fff'
  },
});



