import React, { Component } from "react";
// import postChirp from "../../../server/lib/db";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: 1,
      text: "",
      location: "Birmingham"
    };
  }

  handleInputChange(value) {
    this.setState({
      text: value
    });
  }

  handleClick() {
    console.log("about to post");
    fetch("http://localhost:3000/api/chirps", {
      method: "post",
      body: JSON.stringify({
        userid: this.state.userid,
        text: this.state.text,
        location: this.state.location
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(data => {
        console.log("success", data);
      })
      .catch(err => {
        console.log("error", err);
      })
      .then(window.location.reload());
    console.log(this.state);
  }

  render() {
    return (
      <form className="form col-md-6 my-2 mx-auto py-4 w-50">
        <input
          type="text"
          className="form-control"
          id="input-field"
          value={this.state.text}
          placeholder="What's Happening?"
          onChange={event => this.handleInputChange(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary mt-3 justify-content-center"
          onClick={() => this.handleClick()}
        >
          Chirp
        </button>
      </form>
    );
  }
}

export default InputField;
