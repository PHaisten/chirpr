import React, { Component } from "react";
import SingleChirp from "./SingleChirp";
import InputField from "./InputField";
import { Link } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpDetail: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/chirps/" + this.props.match.params.id)
      .then(Response => Response.json())
      .then(object => this.setState({ chirpDetail: object }));
  }

  handleList(value) {
    let newList = [...this.state.chirpDetail];
    if (value === "") {
      console.log("It worked");
    } else {
      newList.push(value);
      this.setState({ chirpDetail: newList });
    }
  }

  handleClick() {
    console.log("about to update");
    fetch("http://localhost:3000/api/chirps/" + this.props.match.params.id, {
      method: "delete"
    });
    console.log("Chirp deleted!");
  }

  render() {
    return (
      <div className="container w-50 mt-5">
        <div className="card row">
          <div className="card-block col">
            <h4 className="card-title">@{this.state.chirpDetail.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.state.chirpDetail.location}
            </h6>
            <p className="card-text">{this.state.chirpDetail.text}</p>
            <p className="card-text">{this.state.chirpDetail._created}</p>
            <Link
              to={`/`}
              className="btn btn-outline-primary btn-sm ml-2"
              role="button"
            >
              Back
            </Link>
            <Link
              to={`/update/${this.state.chirpDetail.id}`}
              className="btn btn-outline-primary btn-sm ml-2"
              role="button"
            >
              Edit
            </Link>
            <Link
              to={`/`}
              className="btn btn-outline-primary btn-sm ml-5"
              role="button"
              onClick={() => this.handleClick()}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
