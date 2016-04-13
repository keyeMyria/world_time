import React, { Component } from 'react';

export default class Test extends Component {

  handleLocal() {
    console.log(localStorage.getItem('auth-token'))
  }

  render() {
    return (
        <div className="center">
          <h1> Test 2 open access</h1>
          <button className="btn" onClick={this.handleLocal}> local </button>
        </div>
      )
  }
}






