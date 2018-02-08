import React, { Component } from "react";
import { Link } from "react-router-dom";

class UpdateChirp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirp: {}
    };
  }

  handleInputChange(value) {
    this.setState({
      chirp: {
        text: value
      }
    });
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/chirps/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ chirp: data });
      });
  }
  handleClick() {
    console.log("about to update");
    fetch("http://localhost:3000/api/chirps/" + this.props.match.params.id, {
      method: "put",
      body: JSON.stringify({
        userid: this.state.chirp.userid,
        text: this.state.chirp.text,
        location: this.state.chirp.location
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
      });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container w-50 mt-5">
        <div className="card row">
          <div className="card-block col">
            <input
              type="text"
              className="w-100"
              placeholder={this.state.chirp.text}
              value={this.state.text}
              onChange={event => this.handleInputChange(event.target.value)}
            />
            <br />
            <Link
              to={`/`}
              className="btn btn-outline-primary btn-sm mt-3 ml-2"
              role="button"
              onClick={() => this.handleClick()}
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateChirp;
