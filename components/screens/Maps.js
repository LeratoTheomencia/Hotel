import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps'

const Maps = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <MapView 
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
        >
    
        
        <View>
            <TextInput 
              style={styles.input}
              placeholder="Search"
            />

            <TouchableOpacity>
                <Image source={require('../../assets/Images/search--v1.png')} style={styles.search} /> 
            </TouchableOpacity>
        </View>

          <Image source={require('../../assets/Images/bloem map.png')} style={styles.map} />

          <TouchableOpacity style={styles.button}>
                  <Text style={styles.btn}onPress={() => navigation.navigate('Conclude')}>Next</Text>
              </TouchableOpacity>
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  input: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    borderRadius: 30,
    height: 50,
    backgroundColor: '#ecf0f1',
  },
  search: {
    width: 25,
    height: 25,
    marginLeft: 250,
    marginTop: -40
  },
  map: {
    marginTop: 30,
    width: 300,
    height: 550
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

export default Maps;