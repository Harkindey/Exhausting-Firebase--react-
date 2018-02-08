import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAWsPP38IzNgGniXDhjKMsGJOTqd2IAjnU",
  authDomain: "first-flight-bf1e5.firebaseapp.com",
  databaseURL: "https://first-flight-bf1e5.firebaseio.com",
  projectId: "first-flight-bf1e5",
  storageBucket: "first-flight-bf1e5.appspot.com",
  messagingSenderId: "90015404294"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
