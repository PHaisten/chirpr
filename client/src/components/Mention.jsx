import React, { Component } from "react";

class Mention extends Component {
  render() {
    let mentionedChirp = this.props.list.map(chirp => {
      return (
        <div className="card d-flex-container w-50 mx-auto mt-3" key={chirp.id}>
          <h3>{chirp.name}</h3>
          <p>{chirp.text}</p>
          <p>{chirp._created}</p>
        </div>
      );
    });
    return <div>{mentionedChirp}</div>;
  }
}

export default Mention;
