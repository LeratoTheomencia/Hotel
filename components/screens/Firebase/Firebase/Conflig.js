import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";


 var firebaseConfig = {
  apiKey: "AIzaSyDHzQORdPlravGdy3S3zl3wIbvaHUOdJ7g",
  authDomain: "hotel-app-practice.firebaseapp.com",
  databaseURL: "https://hotel-app-practice-default-rtdb.firebaseio.com",
  projectId: "hotel-app-practice",
  storageBucket: "hotel-app-practice.appspot.com",
  messagingSenderId: "234803791881",
  appId: "1:234803791881:web:29eaba5c17e1c9435290d8",
  measurementId: "G-ESY14SB6PM"
};
  // Initialize Firebase

  
const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore(app)
export {firebase}  