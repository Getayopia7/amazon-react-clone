// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAYlCdaaRKGRdwq9GdgQueJ95gAWoJrEGc",
  authDomain: "react-clone-36f72.firebaseapp.com",
  projectId: "react-clone-36f72",
  storageBucket: "react-clone-36f72.appspot.com",
  messagingSenderId: "61630473992",
  appId: "1:61630473992:web:c840abd6b53eb235366ebd",
  measurementId: "G-TDK729FM4E"
};

  const firbaseApp = firebase.initializeApp(firebaseConfig)
  const db =firbaseApp.firestore()
  const auth=firebase.auth();
  export {db,auth};

  




