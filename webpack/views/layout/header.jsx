import React, { Component } from 'react';
import auth from 'lib/auth';

export default class Header extends React.Component {

  handleLogout() {
    auth.logOut()
  }

  loginButton() {
    if (auth.loggedIn()) {
      return (
        <li>
          <a className="" OnClick={this.handleLogout()} href="">LogOut</a>
        </li>
      )
    } else {
      return (
        <li>
          <a className="" href="#login">LogIn</a>
        </li>
      )
    }
  }

  render() {
    return (
      <div>
        <nav id="" className="navbar ">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand " href="#">World Time</a>
            </div>
              <ul className="nav navbar-nav navbar-left">
                  <li> <a className="" href="#test1">Test Page 1 (if Login)</a> </li>
                  <li> <a className="" href="#test2">Test Page 2</a> </li>
              </ul>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                {this.loginButton()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}






