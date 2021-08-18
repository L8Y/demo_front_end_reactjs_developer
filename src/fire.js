import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh-dZBUYus1OyF_21dVdeKPvpaugIdJT0",
  authDomain: "l8y-twitter-clone.firebaseapp.com",
  projectId: "l8y-twitter-clone",
  storageBucket: "l8y-twitter-clone.appspot.com",
  messagingSenderId: "656406603461",
  appId: "1:656406603461:web:59c7cfa2992d4d454d32ac",
  measurementId: "G-K4LBY1HRQC",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
