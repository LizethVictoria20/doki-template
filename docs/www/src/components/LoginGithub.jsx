import React, {useEffect, useState} from 'react'
import { login, sigout, userState } from '../config/base';

export const LoginGithub = () => {  

    const [user, setUser] = useState(null)
    
    useEffect(() => {
        userState((user) => setUser(user))
    }, [])

    function handledClick(e) {
        e.preventDefault();
        login().then((username) => {
            setUser(username)
        })
    }

    function out(e) {
        e.preventDefault();
        sigout().then(()=>{
            setUser(null)
        })
    }

    return (
        <>
            {!user ? 
            <button type="submit" onClick={handledClick}>Login with Github</button> : 
            <button type="submit" onClick={out}>Sign Out</button>
            }
        </>
    )
}
