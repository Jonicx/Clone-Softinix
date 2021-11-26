import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import "./Register.css"

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname]= useState("");
    const [compassword, setCompassword] = useState("");
    const history = useHistory();// it lets us navigate into the reactroutes, we can direct user to another page by using this hook


    const register = e =>{
        //Firebaseeeeeeeeee
        e.preventDefault();
        auth
         .createUserWithEmailAndPassword(email, password) //if this user has been created
         .then((auth) =>{// then it should come back with an object called auth which will store the users info
            // {console.log(auth);// if the signup is good then let us see it in then console}
            if(auth){
                history.push("/login")
            }
        })
        .catch(error => alert(error.message))// if there was an error then we are going to display the error on the screen
    }

    return (
        <div className="register">
            <Link to="/">
                <img 
                    className="register__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className="register__container">
                <h1>Welcome!
                </h1>
                <span>To The Amazon Clone Family.</span>

                <form>
                    <h3>
                        FirstName
                    </h3>
                    <input type='text' value={firstname} onChange={e => setFirstname(e.target.value)}/>

                    <h3>
                        LastName
                    </h3>
                    <input type="text" value={lastname} onChange={e => setLastname(e.target.value)}/>
                    
                    <h3>
                        E-mail address
                    </h3>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h3>
                        Password
                    </h3>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <h3>
                        Comfirm Password
                    </h3>
                    <input type="password" value={compassword} onChange={e => setCompassword(e.target.value)}/>

                    <button onClick={register} className="register__registerButton">Sign Up </button>
                </form>

                <p>
                    By signing-up you agree to AMAZON CLONE FAKE
                    Conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads
                    Notice.
                </p>

                <Link to="/Login">
                    <button  className="register__registerButton"> Already have an account </button>
                </Link>
            </div>
        </div>
    )
}

export default Register
