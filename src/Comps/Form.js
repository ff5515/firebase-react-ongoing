import React from "react";
import { Link } from "react-router-dom";
import "./../welcome.css";
import {app, auth, database} from '../config'


class Form extends React.Component {
    constructor() {
      super()
      this.state = {
        user:{}
      }
    }

  componentDidMount() {
    this.authListener();
  }

  
  

  authListener() {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user:null })
      }
    } )
  }
  
  onChangeHandler (e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render () {
    return (
      <div>
      <div className="overlay">
      <div className="solid"></div>
      <h1 className="sign-in">Sign In</h1>
      
      <input
      onChange={this.onChangeHandler}
      id="email"
      className="input"
      type="email"
      placeholder="Email Address"
      />
      <input
    onChange={this.onChangeHandler}
    id="password"
    className="input"
    type="password"
    placeholder="Password"
    />
    
    <button
    // onClick={}
    id="signin"
    className="submit"
    >
    Sign In
    </button>
    
    <div className="forgot">
    <span>Forgot Password?</span>
    </div>
    
    <div className="sign-up-link">
    Don't have an account?
    <Link to="/signup">
    <span className="up">SIGN UP</span>
    </Link>
    </div>
    </div>
    <img
    className="background-img"
    src={require("./../img/main2.png")}
    alt="oops"
    ></img>
    </div>
    );
  };
}
  
  export default Form;
  