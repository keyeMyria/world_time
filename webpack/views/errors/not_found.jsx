import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="center">Error, page not found</h1>
        <h1 className="center" > <a href="/#/">Get main page</a> </h1>
      </div>
    );
  }
}
