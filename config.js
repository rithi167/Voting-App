import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9NXLNnNawpoVWV5GkYUsNJKGJcmcpR4",
  authDomain: "voting-app-856d5.firebaseapp.com",
  projectId: "voting-app-856d5",
  storageBucket: "voting-app-856d5.appspot.com",
  messagingSenderId: "483267520669",
  appId: "1:483267520669:web:50e104c81f54e74bc10c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();