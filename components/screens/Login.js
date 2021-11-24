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
      <Card>
        <Image
          source={require('../../assets/Images/Bon Hotel.jpg')}
          style={styles.img}
        />
        <Text style={styles.header}>BON Hotel</Text>
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
        <TouchableOpacity>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate('ResetPassword')}>
            Forgot Password                                         
          </Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={SignIn}>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text>
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
  title: {
    paddingLeft: 180,
    color: '#146BEE',
    fontWeight: 500,
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    height: 40,
    width: 120,
    backgroundColor: '#146BEE',
    marginLeft: 100,
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  main: {
    marginTop: 10,
    paddingLeft: 25,
  },
  text: {
    color: '#146BEE',
    fontWeight: 500
  },
});

export default Login;
