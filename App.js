import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import ResetPassword from './components/screens/ResetPassword';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Form from './components/screens/Form';
import Calendar from './components/screens/Calendar';
import Maps from './components/screens/Maps';
//import Deluxe from './components/screens/Deluxe';
import DeluxeDetails from './components/screens/DeluxeDetails';
//import Standard from './components/screens/Standard';
import StandardDetails from './components/screens/StandardDetails';
//import Suite from './components/screens/Suite';
import SuiteDetails from './components/screens/SuiteDetails';
import Conclude from './components/screens/Conclude';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
  
  <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
        name="login"
        component={Login}/>

          <Stack.Screen
        name="signup"
        component={SignUp}
        />

         <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          />
        
           <Stack.Screen
          name="Home"
          component={Home}
          />


           <Stack.Screen
          name="Calender"
          component={Calendar}
          />

           <Stack.Screen
          name="About"
          component={About}
          />

           <Stack.Screen
          name="Form"
          component={Form}
          />


        
           <Stack.Screen
          name="DeluxeDetails"
          component={DeluxeDetails}
          />


           <Stack.Screen
          name="StandardDetails"
          component={StandardDetails}
          />


           <Stack.Screen
          name="SuiteDetails"
          component={SuiteDetails}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
