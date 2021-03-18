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

export const auth = app.auth()

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

/**
 * loginGithub : Authenticates an user by Github
 * @returns {promise}: If succeeds, returns the signed in user. If sign in was unsuccessful, returns an error object
 */
export const loginGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return auth.signInWithPopup(githubProvider)
}

/**
 * loginGoogle: Authenticates an user by Google
 * @returns {promise}: If succeeds, returns the signed in user. If sign in was unsuccessful, returns an error object
 */
export const loginGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithPopup(googleProvider)

}

/**
 * sigout: Signs out the current user.
 * @returns {promise}
 */
export const sigout = () => {
  return auth.signOut()
}