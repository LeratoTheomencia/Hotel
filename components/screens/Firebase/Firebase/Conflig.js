import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyCNa2kh_M5TAI3hbFg4-gMvr6szHqifPMk",
  authDomain: "hotel-app-d855c.firebaseapp.com",
  projectId: "hotel-app-d855c",
  storageBucket: "hotel-app-d855c.appspot.com",
  messagingSenderId: "554175826699",
  appId: "1:554175826699:web:fd5582b8c38e2cdd08b00e",
  measurementId: "G-H1G0L0J5JM"
};
  // Initialize Firebase

  
 firebase.initializeApp(firebaseConfig)

export {firebase}  