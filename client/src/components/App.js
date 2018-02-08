import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chirps from "./Chirps";
import NavBar from "./NavBar";
import Details from "./Details";
import UpdateChirp from "./UpdateChirp";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Chirps} />
            <Route exact path="/chirps/:id" component={Details} />
            <Route exact path="/update/:id" component={UpdateChirp} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
