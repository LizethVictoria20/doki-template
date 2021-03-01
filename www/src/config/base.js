import firebase from 'firebase';
import 'firebase/storage'

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCTPR6XCjgyaD2tGN5pyqPlzSp_dwP8qj8",
    authDomain: "doki-templates.firebaseapp.com",
    databaseURL: "https://doki-templates-default-rtdb.firebaseio.com",
    projectId: "doki-templates",
    storageBucket: "doki-templates.appspot.com",
    messagingSenderId: "962952744209",
    appId: "1:962952744209:web:2cfcf59e0e5a0cded710b0",
    measurementId: "G-823CPHWF40"
  });