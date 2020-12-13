import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDPxltlQ_sUVG0AX0rS4y-wn3N2qe_toKU",
    authDomain: "to-do-list-9a00c.firebaseapp.com",
    databaseURL: "https://to-do-list-9a00c-default-rtdb.firebaseio.com/",
    projectId: "to-do-list-9a00c",
    storageBucket: "to-do-list-9a00c.appspot.com",
    messagingSenderId: "54566242986",
    appId: "1:54566242986:web:47f9baa699aa039ec79ed3",
    measurementId: "G-49CZRJEBFN"
};


// apiKey: "AIzaSyBNQCqy-_Oki68QKf2wHofXTuBPseb53Lg",
// authDomain: "solve-case123.firebaseapp.com",
// databaseURL: "https://solve-case123.firebaseio.com",
// projectId: "solve-case123",
// storageBucket: "solve-case123.appspot.com",
// messagingSenderId: "402953466200",
// appId: "1:402953466200:web:e228fc389729478e74352d",
// measurementId: "G-2N9PKSM0B3"
  
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
fireDb = fireDb.database().ref();
export default fireDb;