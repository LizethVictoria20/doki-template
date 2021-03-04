import React, { useState } from 'react'
import './Login.css'
export const Login = () => {
    return (
        <div>
            <section>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="box">
                    <div className="container">
                        <div className="form">
                            <h2>Login</h2>
                            <form method="POST">
                                <div className="inputBox">
                                    <input type="email" name="email" placeholder="email"/>
                                </div>
                                <div className="inputBox">
                                    <input type="email" name="email" placeholder="email"/>
                                </div>
                                <p className="forget">Forgot password? <a href="#">Click here!</a></p>
                                <p className="forget">Haven't an account? <a href="#">Sign Up!</a></p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
