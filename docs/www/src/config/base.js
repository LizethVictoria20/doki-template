import firebase from 'firebase';
import 'firebase/storage'
import 'firebase/auth'


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

const auth = app.auth()

const userFirebase = (user) => {
  if (user) {
    console.log(user)
    const { displayName } = user;
    console.log(displayName)
    // const { username } = additionalUserInfo
    return displayName
    
  }
}

export const userState = (onChange) =>{
  return auth.onAuthStateChanged(user => {
    const normUser = userFirebase(user)
    onChange(normUser)
  })
}

export const login = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return auth.signInWithPopup(githubProvider)
}

export const sigout = () => {
  return auth.signOut()
}