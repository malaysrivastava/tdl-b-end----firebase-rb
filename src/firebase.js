import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJreb8HcjEdivWmjbXfo-6S7rx4v7t1pU",
    authDomain: "reminderapp-c1345.firebaseapp.com",
    databaseURL: "https://reminderapp-c1345-default-rtdb.firebaseio.com",
    projectId: "reminderapp-c1345",
    storageBucket: "reminderapp-c1345.appspot.com",
    messagingSenderId: "339445526968",
    appId: "1:339445526968:web:fc0afb63e51f83ca821f4d",
    measurementId: "G-LRB9LEV9HV"
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