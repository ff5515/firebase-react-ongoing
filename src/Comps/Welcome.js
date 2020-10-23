import React from "react";
import "./../welcome.css";
import {auth, database} from '../config'

class Welcome extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="welcome">
          Welcome {this.props.firstName} {this.props.lastName}
        </div>
        <div className="phone-number"> {this.props.phoneNumber} </div>
        <button className="submit">LOG OUT</button>
      </div>
    );
  }
}

export default Welcome;
