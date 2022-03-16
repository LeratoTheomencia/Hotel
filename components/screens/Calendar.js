import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Picker} from 'react-native'
import Calendar from 'react-calendar';
import moment from 'moment';
import { Card } from 'react-native-paper';
import RNPickerSelect from "react-native-picker-select";

const App = ({navigation}) => {

  
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <View style={styles.container}>
      
    <Card style={styles.card}>

    <View style={styles.calender}>
      <Calendar
      value={dateState}
      onChange={changeDate}
      />
    </View>
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>

    </Card>

    <View style={styles.java}>

    <Text style={{ marginLeft: 50, fontWeight: 'bold', justifyContent: 'space-evenly'}}>Adults</Text>
    <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "more", value: "more" },
                 ]}
             />

                 <Text style={{ marginLeft: 50, fontWeight: 'bold', justifyContent: 'space-evenly'}}>Childen</Text>
               <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "1", value: "1" },
                     { label: "2", value: "2" },
                     { label: "3", value: "3" },
                     { label: "4", value: "4" },
                     { label: "5", value: "5" },
                     { label: "more", value: "more" },
                 ]}
                 
             />

    </View>

    {/*} <Text style={{padding: 10}}>Dates</Text>
        <View style={styles.dates}>
        <Text>28 October 2021</Text>
        <Text>         31 October 2021</Text>
        </View>

        <View style={styles.list}>
          <Text>Guests</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingLeft: 10}}>Adults</Text>
          <TextInput placeholder="2" style={{marginLeft: 10}} />
          <Text>Childen</Text>
          <TextInput placeholder="1" style={{marginLeft: 10}} />
        </View>

        <Text style={{marginTop: 15, paddingLeft: 20, fontWeight: 500}}>Rooms</Text>

  <Text style={{marginTop: 15, paddingLeft: 20}}>2 Bedrooms with a kicthen</Text>*/}

      

                 <TouchableOpacity style={styles.button}>
                  <Text style={styles.btn}onPress={() => navigation.navigate('Bookings')}>Next</Text>
              </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
   dates: {
   flexDirection: 'row',
   margin: 10,
   
 },
 list: {
   marginTop: 25,
   padding: 10
 },
 calender: {
    marginTop: 30,
    marginHorizontal: 20,
  },
 button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#146BEE',
    borderRadius: 80,
    width: 80,
    height: 30,
    textAlign: 'center',
    padding: 3,
    color: '#fff'
  },
  card: {
    borderColor: '#eee',
    width: 420,
    height: 300,
    backgroundColor: '#fff',
    marginLeft: 12,
    marginTop: -15,
    shadowRadius: 60,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  java: {
    flexDirection: 'row',
    marginTop: 50,
  }
});

export default App;
