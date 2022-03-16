import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { firebase } from './Firebase/Firebase/Conflig';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navsign = () => {
    navigation.navigate('signup');
  };

  const SignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('successfull logged in');
        {
          navigation.navigate('Home');
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
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

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />

      <View>
        <TouchableOpacity style={styles.maintitle}>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate('ResetPassword')}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={SignIn}>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
      </View>



      <View style={{ marginLeft: 30, marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>
          Don't have an account?{' '}
          <TouchableOpacity
            style={styles.text}
            onPress={() => navigation.navigate('signup')}>
            Register Here
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
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
    marginTop: -270,
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
    position: 'relative'
  },
  maintitle:{
    marginTop: 30,
    marginLeft: 40
  },
  title: {
    position: 'relative',
    paddingLeft: 120,
    marginTop: 30,
    fontSize: 12,
    marginTop: -10,
    color: '#2666CF',
    fontWeight: '1000'
  },
  button: {
    marginTop: 30,

  },
  btn: {
    backgroundColor: '#146BEE',
    borderRadius: 80,
    width: 90,
    height: 40,
    textAlign: 'center',
    padding: 8,
    color: '#fff',
    fontWeight: '700'
  },

  text: {
    color: '#2666CF',
    marginTop: 20,
    fontWeight: '700'
  },
});

export default Login;
