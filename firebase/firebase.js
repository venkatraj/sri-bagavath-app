import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC11qWUUR3s7pFaaGBk10vs1m23asuUxUg',
  authDomain: 'sribagavath-6c193.firebaseapp.com',
  databaseURL: 'https://sribagavath-6c193.firebaseio.com',
  projectId: 'sribagavath-6c193',
  storageBucket: 'sribagavath-6c193.appspot.com',
  messagingSenderId: '719262342915',
  appId: '1:719262342915:web:3cb3630ee0d4546cdc5336',
  measurementId: 'G-NXH617SVFH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database };
