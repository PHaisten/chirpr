import React, { Component } from "react";

class SingleChirp extends Component {
  render() {
    let chirpList = this.props.list.map(chirp => {
      return (
        <div className="card d-flex-container w-50 mx-auto mt-1" key={chirp.id}>
          <div className="card-body my-1 py-1">
            <h5 className="ml-1">@{chirp.name}</h5>
            <p className="text-center">{chirp.text}</p>
            <p className="text-center">{chirp._created}</p>
            <button className="" />
          </div>
        </div>
      );
    });
    return <div>{chirpList}</div>;
  }
}

export default SingleChirp;
