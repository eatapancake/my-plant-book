import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDsBv2JYN3y_EoX0UvUrFcB9wlgyUa6NWE",
  authDomain: "colum-code-sprint-b-dfae8.firebaseapp.com",
  databaseURL: "https://colum-code-sprint-b-dfae8.firebaseio.com",
  projectId: "colum-code-sprint-b-dfae8",
  storageBucket: "colum-code-sprint-b-dfae8.appspot.com",
  messagingSenderId: "796020368633",
  appId: "1:796020368633:web:142107a7c994667fcbee28",
  measurementId: "G-HV9BKXP127",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const plantsCollection = db.collection("plants");

export default db;
export { plantsCollection };
