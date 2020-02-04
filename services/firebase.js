import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-podqTVr9_P_hMU6cNeCYZEyOEC_YrYU",
  authDomain: "devmentes-3abbf.firebaseapp.com",
  databaseURL: "https://devmentes-3abbf.firebaseio.com",
  projectId: "devmentes-3abbf",
  storageBucket: "devmentes-3abbf.appspot.com",
  messagingSenderId: "251220467046",
  appId: "1:251220467046:web:ffffeebcf367033373fca7",
  measurementId: "G-HVYKKHHQV8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const postsStorage = firebase.firestore();
