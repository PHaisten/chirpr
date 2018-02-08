import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleChirp extends Component {
  render() {
    let chirpList = this.props.list.map(chirp => {
      return (
        <div
          className="card d-flex-container w-50 mx-auto mt-1 mb-4"
          key={chirp.id}
        >
          <div className="card-body my-1 py-1">
            <h5 className="ml-1">@{chirp.name}</h5>
            <p className="text-center">{chirp.text}</p>
            <p className="text-center">{chirp._created}</p>
            <Link
              to={`/chirps/${chirp.id}`}
              className="btn btn-outline-primary btn-sm ml-2"
              role="button"
            >
              Details
            </Link>
            <Link
              to={`/update/${chirp.id}`}
              className="btn btn-outline-primary btn-sm ml-2"
              role="button"
            >
              Edit
            </Link>
          </div>
        </div>
      );
    });
    return <div>{chirpList}</div>;
  }
}

export default SingleChirp;
