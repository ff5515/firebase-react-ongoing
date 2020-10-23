import React from "react";
import { Link } from "react-router-dom";
import "./../welcome.css";
import {auth, database} from '../config'


class SignUp extends React.Component {
  constructor() {
  super()
  this.state = { errmsg: '' };
  }
  
  
  inputHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  
  submitReg = ( ) => {
    const {
      firstName, 
      lastName, 
      email, 
      premiseNumber, 
      password, 
      confPassword, 
      phoneNumber
    } = this.state;
    
    
    let userInfo = {
      firstName,
      lastName,
      phoneNumber,
      email,
      premiseNumber
    }

    
    console.log(this.state)
    
    if (password === confPassword) {
      if (this.state.errmsg) { this.setState({errmsg: ''}) } ;
      
      auth.createUserWithEmailAndPassword(email, password)
      .then(res => database.ref(res.user.uid).set(userInfo))
    } else { this.setState( {errmsg: 'wrong password sweetheart'}) }
  };


  render() {

    return (
      <div>
        <div className="overlay">
          <div className="solid"></div>
          <div className="overlay">
            <div className="logo-cont">
              <img
                className="logo"
                src={require("./../img/govlogo-black@2x.png")}
                alt=""
              />
              <img
                className="logo"
                src={require("./../img/dewalogo-black@2x.png")}
                alt=""
              />
            </div>

            <div className="sign-in">Sign Up</div>

            <input
              onChange={this.inputHandler}
              id="firstName"
              className="input"
              type="text"
              placeholder="First Name"
            />

            <input
              onChange={this.inputHandler}
              id="lastName"
              className="input"
              type="text"
              placeholder="Last Name"
            />

            <input
              onChange={this.inputHandler}
              id="email"
              className="input"
              type="email"
              placeholder="Email Address"
            />

            <input
              onChange={this.inputHandler}
              id="premiseNumber"
              className="input"
              type="text"
              placeholder="Premise Number"
            />

            <input
              onChange={this.inputHandler}
              id="phoneNumber"
              className="input"
              type="tel"
              placeholder="Phone Number"
            />

            <input
              onChange={this.inputHandler}
              id="password"
              className="input"
              type="password"
              placeholder="Password"
            />

            <input
              onChange={this.inputHandler}
              id="confPassword"
              className="input"
              type="password"
              placeholder="Confirm Password"
            />

            <button onClick={this.submitReg} className="submit">
              Sign Up
            </button>

            <div className="sign-up-link">
              Have an account?
              <Link to="/signin">
                <span className="up">SIGN IN</span>
              </Link>
            </div>
          </div>{" "}
        </div>{" "}
        <img
          className="background-img"
          src={require("./../img/sign2.png")}
          alt=""
        />
        { this.state.errmsg && this.state.errmsg }
      </div>
    );
  }
}

export default SignUp;
