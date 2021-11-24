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
        
        <Card>
          <Image source={require('../../assets/Images/Bon Hotel.jpg')} style={styles.img} />
          <Text style={styles.header}>BON Hotel</Text>
        </Card>

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
    input: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#ecf0f1',
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



