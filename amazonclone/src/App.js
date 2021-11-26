import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout"
import Login from "./Login"
import Register from './Register';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment' ;
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51Jw4hyDNfZ9B5FUyMirZBEFYN0CYdWpf2Cp9kZOSPC5mYnRaQOqZ2lHLTD0xWVf6FpcGv4AeUXIVZ0DfH3YtpIoE00t6ZSVaXP");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {//this will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>>", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/Checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
