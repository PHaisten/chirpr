import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Chirps from "./Chirps";
import InputField from "./InputField";
import NavBar from "./NavBar";
import SingleChirp from "./SingleChirp";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/input" component={InputField} />
            <Route exact path="/chirps" component={Chirps} />
            <Route exact path="/chirps/:id" component={SingleChirp} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
