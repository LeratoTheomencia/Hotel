import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import Calendar from 'react-calendar';
import moment from 'moment';

const App = ({navigation}) => {

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <View style={styles.container}>

    <View style={styles.calender}>
      <Calendar
      value={dateState}
      onChange={changeDate}
      />
    </View>
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>

     <Text style={{padding: 10}}>Dates</Text>
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

        <Text style={{marginTop: 15, paddingLeft: 20}}>2 Bedrooms with a kicthen</Text>
      

                 <TouchableOpacity style={styles.button}>
                  <Text style={styles.btn}onPress={() => navigation.navigate('Form')}>Next</Text>
              </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 8,
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
  }
});

export default App;
