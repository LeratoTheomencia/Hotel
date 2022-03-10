// import * as React from 'react';
// import { Text, View, StyleSheet, Image, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
// import { Card } from 'react-native-paper';
// import getDirections from 'react-native-google-maps-directions'
// export default function Details({navigation}) {
//   const handleGetDirections = () => {
//     const data = {
//        source: {
//         latitude: -29.087217,
//         longitude: 26.154898
//       },
//       destination: {
//         latitude: -28.741943,
//         longitude: 24.771944
//       },
//       params: [
//         {
//           key: "travelmode",
//           value: "driving"        // may be "walking", "bicycling" or "transit" as well
//         },
//         {
//           key: "dir_action",
//           value: "navigate"       // this instantly initializes navigation using the given travel mode
//         }
//       ],
//       waypoints: [
//         {
//           latitude: -33.8600025,
//           longitude: 18.697452
//         },
//         {
//           latitude: -33.8600026,
//           longitude: 18.697453
//         },
//            {
//           latitude: -33.8600036,
//           longitude: 18.697493
//         }
//       ]
//     }
//     getDirections(data)
//   }
//   return (
//         <View style={{marginTop:65}}>
//          <Card style={{alignSelf:'center',width:290,height:480,backgroungColor:'white'}}>
//            <Image source={require('../../assets/Images/bloem map.png')} style={styles.img} />
//              <TouchableOpacity
//           style={styles.paragraph}
//           onPress={handleGetDirections} title="Get Directions">
//          <Text style={{alignSelf:'center',marginTop:17,fontSize:16,fontWeight:'bold',color:'white'}}> Directions</Text>
//             </TouchableOpacity>
//         </Card>
//         </View>
//   )}
//   const styles = StyleSheet.create({
//     img: {
//         width: '100%',
//         height: '100%',
//         marginBottom: -140
//     },
//      paragraph: {
//       marginTop:50,
//     borderRadius:40,
//     borderWidth:0,
//     alignSelf:'center',
//     backgroundColor:'#EEC048',
//     width:250,
//     height:60
//   },
// }); 