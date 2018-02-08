import React, { Component } from "react";
// import logo from "./assets/owl-logo.png";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-primary">
        <header className="App-header">
          {/* <img src={logo} className="App-logo w-25" alt="logo" /> */}
          <h1 className="App-title text-center text-white">Chirpr</h1>
        </header>
      </nav>
    );
  }
}

export default NavBar;
