import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Form from "./Comps/Form";
import SignUp from "./Comps/SignUp";
import Welcome from "./Comps/Welcome";

class App extends React.Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/signin" component={Form} />
          <Route path="/signup" component={SignUp} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    );
  }
}

export default App;
