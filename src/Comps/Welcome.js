import React from "react";
import "./../welcome.css";
import {app, auth, database} from '../config'
import { Link, withRouter } from "react-router-dom";
import Form from "./Form";

class Welcome extends React.Component {
  constructor(){
    super()
    
  
    this.state={
      firstName: '',
      lastName: '',
      phoneNumber: '',
      isLoggedIn: false
    }
    this.signOut = this.signOut.bind(this);
  }
  

    componentDidMount() {
      const userDB = app.database().ref(this.props.uid);
      userDB.on('value', datasnap => this.setState({
        
        firstName: datasnap.val().firstName,
        lastName: datasnap.val().lastName,
        phoneNumber: datasnap.val().phoneNumber,
        isLoggedIn: true
      
      }))
    }


        signOut() {
            this.setState({isLoggedIn: false})
        }

      
  render() {
    if(!this.state.isLoggedIn) {
      return <Link to="/signin" component={(props) => <Form {...props}  />} />
    } else {

      
      return (
        <div className="container">
        <div className="welcome">
          <span class='welcome-bold'>Welcome</span> {this.state.firstName} {this.state.lastName}
        </div>
        <div className="phone-number"> {this.state.phoneNumber} </div>
        <div onClick={this.signOut} className="log-out">LOG OUT</div>
      </div>
    );
  }
  }
}

export default withRouter( Welcome);
