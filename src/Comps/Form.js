import React from "react";
import { Link } from "react-router-dom";
import Welcome from './Welcome'
import "./../welcome.css";
import {auth} from '../config'


class Form extends React.Component {
    constructor() {
      super()
      this.state = {
        user: {
          email: '',
          password: ''
        },
      }
    }
    
    onChangeHandler = (e) => {
      this.setState({
        [e.target.type]: e.target.value
      });
    };
    
    authListener = () => {
      console.log(auth.currentUser)
      
      auth.signInWithEmailAndPassword(this.state.email, this.state.password) 
      .then(data => this.setState({uid: data.user.uid, isLoggedIn: true }))
        // console.log(data.user.uid))
      
     
    }
    
      render () {

      if (this.state.isLoggedIn) {
        return <Link to="/welcome" component={(props) => <Welcome {...props} uid={this.state.uid}/>} />
      } else { return (

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
        onClick={this.authListener}
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
)
  }
};
}

  export default Form;
  