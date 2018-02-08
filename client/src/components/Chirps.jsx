import React, { Component } from "react";
import SingleChirp from "./SingleChirp";
import InputField from "./InputField";

class Chirps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpsList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/chirps")
      .then(Response => Response.json())
      .then(object => this.setState({ chirpsList: object }));
  }

  handleList(value) {
    let newList = [...this.state.chirpsList];
    if (value === "") {
      console.log("It worked");
    } else {
      newList.push(value);
      this.setState({ chirpsList: newList });
    }
  }
  render() {
    return (
      <div>
        <InputField handlePostChirp={text => this.handleList(text)} />
        <SingleChirp list={this.state.chirpsList} />
      </div>
    );
  }
}

export default Chirps;
