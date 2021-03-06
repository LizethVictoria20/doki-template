import React, {useEffect, useState} from 'react'
import { loginGithub, loginGoogle, sigout, userState } from '../config/base';
import { app } from '../config/base'
import firebase from 'firebase'

export const AuthFirebase = () => {  

    const [user, setUser] = useState(null)
    const [method, setMethod] = useState('')


    const handledMethod = (e) => {
        setMethod(e.target.name)
    }


    useEffect(()=> {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log(response)
                onSignInSubmit();
            }
            });

    })
    
    /**
     * onSignInSubmit : Send a verification code to the user's phone

     * 
    */
    const onSignInSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.phone.value)
        const phoneNumber = e.target.phone.value
        const appVerifier = window.recaptchaVerifier;
        app
        .auth().
        signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
                // const code = getCodeFromUserInput();
              const code = window.prompt('insert code')
              confirmationResult
              .confirm(code)
              .then((result) => {
                  // User signed in successfully.
                const user = result.user;
                  
                console.log("welcome user!")
                console.log(user)
                // ...
              }).catch((error) => {
                  //Error:  wrong code verification
                console.log(error.message)
              });
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              console.log(error)
              // ...
            });
    }
    useEffect(() => {
        userState((user) => setUser(user))
    }, [])

    function handledClickGithub(e) {
        e.preventDefault();
        loginGithub().then((username) => {
            setUser(username)
        })
    }
    function handledClickGoogle(e) {
        e.preventDefault()
        loginGoogle().then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user
            setUser(user)
        }).catch((error) => {
            console.log(error)
        })
    }
    function out(e) {
        e.preventDefault();
        sigout().then(()=>{
            setUser(null)
            setMethod('')
        })
    }

    return (
        <>
            {method.length == 0 ? 
            <form id="recaptcha-container" className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-2/4 text-center">
                <button onClick={handledMethod} name='methodPhone'>Login with Phone</button>
                <button onClick={handledMethod} name='methodGithub'>Login with Github</button>
                <button onClick={handledMethod} name='methodGoogle'>Login with Google</button>

            </form>
            : method === 'methodPhone' ?
                <form onSubmit={onSignInSubmit} className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-2/4 text-center">
                    <label>Phone Number</label>
                    <input type="text" name="phone"></input>
                    <button type="submit" >Log In</button>
                    <div id="recaptcha-container"></div>
                </form>
            : method === 'methodGithub'?  !user ? 
            <form id="recaptcha-container" className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-2/4 text-center">
                <button type="submit" onClick={handledClickGithub}>Login with Github</button> 
            </form>:
            <form id="recaptcha-container" className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-2/4 text-center">
                <button type="submit" onClick={out}>Sign Out</button>
            </form>
            : !user ?
            <form id="recaptcha-container" className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-2/4 text-center">
                <button type="submit" onClick={handledClickGoogle}>Login with Google</button> 
            </form>:
            <form id="recaptcha-container" className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-2/4 text-center">
                <button type="submit" onClick={out}>Sign Out</button>
            </form>
            }

        </>
    )
}
