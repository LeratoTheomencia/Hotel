import { firebase } from '../dataService/services'


const getBookings = (() => {

    const email = firebase.auth().currentUser.email;
    console.log(email)
    firebase.firestore().collection('DoctorsAppointments').doc(email).collection('Bookings').onSnapshot((querySnapshot) => {
        const dis = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(dis)
        return dis;

    })


})