// import React from 'react';
// import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
// import{firebase} from './Firebase/Firebase/Conflig';
// import { Card } from 'react-native-paper';



// const StandardDetails = ({ navigation, route }) =>{
//   return (
//     <View style={styles.container}>
    
      
//       <Text style={styles.header}>Standard</Text>

//       <ScrollView style={{ flex: 1 }}
//         pagingEnabled={true}
//         horizontal={true}
//         scrollEventThrottle={16} >
//         <View>
//           <Image source={require('../../assets/Rooms/standard-bedroom.jpg')} style={styles.img} />
//         </View>
//         <View>
//           <Image source={require('../../assets/Rooms/standard-full-room.jpg')} style={styles.img} />
//         </View>
//         <View>
//           <Image source={require('../../assets/Rooms/Standard-Twin-1.jpg')} style={styles.img} />
//         </View>
//         <View>
//           <Image source={require('../../assets/Rooms/standard.jpg')} style={styles.img} />
//         </View>
//         <View>
//           <Image source={require('../../assets/Rooms/gym.jpg')} style={styles.img} />
//         </View>
//         <View>
//           <Image source={require('../../assets/Rooms/baffe.jpg')} style={styles.img} />
//         </View>
//         <View>
//           <Image source={require('../../assets/Images/outdoor pool.jpeg')} style={styles.img} />
//         </View>
//       </ScrollView>

//       <Card>
//       <View style={styles.main}>
//         <Text style={styles.text}>2 Bedroom</Text>
//         <Text style={styles.text}>Kitchen</Text>
//         <Text style={styles.text}>Bathroom with a shower</Text>
//         <Text style={styles.text}>Living Room</Text>
//         <Text style={styles.text}>Televevion</Text>
//         <Text style={styles.text}>Balcony</Text>
//         <Text style={styles.text}>Free Breakfast</Text>
//         <Text style={styles.text}>Pool</Text>
//       </View>

//       <View style={styles.price}>
//         <Text style={styles.text}>Price:</Text>
//         <Text style={styles.text}>R1000 per night</Text>
//       </View> 
//       </Card>

//         <View style={{flexDirection:'row', marginTop: 50}}>
//                <Image source={require('../../assets/Images/icons8-weber-30.png')} style={styles.bbq} />

//                <Image source={require('../../assets/Images/icons8-wi-fi-connected-30.png')} style={styles.wifi} />
//                <Image source={require('../../assets/Images/icons8-snowflake-30.png')} style={styles.snowflake} />
//       </View>

//       <View style={{flexDirection:'row'}}>
             
//              <Text style={{marginLeft: 10}}>BBQ facility</Text>

//       <Text style={{marginLeft: 20}}>Free WiFi</Text>

//       <Text style={{marginLeft: 40 }}>Air conditioning</Text>
//       </View>

//       <TouchableOpacity style={styles.button}>
//           <Text style={styles.btn} onPress={() => navigation.navigate('Calender')}>Book Now</Text>
//         </TouchableOpacity>

       

        

//     </View>

//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     marginTop: 30,
//     marginLeft: 5,
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   img: {
//     width: 300,
//     height: 200,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignSelf: 'center'
   
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 15,
//     marginLeft: 10
//   },
//   main: {
//     marginTop: 10,
//     marginLeft: 10,
//   },
//   bbq: {
//     marginLeft: 5,
//     width: 50,
//     height: 50
    
//   },
//   wifi: {
//     marginLeft: 40,
//     width: 50,
//     height: 50
   
//   },
//   snowflake: {
//     marginLeft: 70,
//     width: 50,
//     height: 50
  
//   },
//   text: {
//     fontSize: 15,
//     fontWeight: 600,
//     marginLeft: 10,
    
//   },
//   price: {
//     marginLeft: 10,
//     marginTop: 20
//   },
//     button: {
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 80,
//     height: 40,
//     width: 120,
//     backgroundColor: '#146BEE',
//     marginLeft: 100
//   },
//   btn: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: '#fff',
//   },
//     img1: {
//     marginTop: 5,
//     borderRadius: 10,
//     left: 10,
//   },
// });

// export default StandardDetails;