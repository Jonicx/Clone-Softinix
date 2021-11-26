import { Link, useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");

    const signIn = e =>{
        e.preventDefault();//prevents page from refreshing after pressing button
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h3>
                        E-mail address
                    </h3>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h3>
                        Password
                    </h3>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to AMAZON CLONE FAKE
                    Conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads
                    Notice.
                </p>

                <Link to="/register">
                    <button  className="login__registerButton">Create Your Amazon Account </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Login
