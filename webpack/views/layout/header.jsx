import React, { Component } from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div>
<nav id="" className="navbar ">
    <div className="container-fluid">

        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">World Time</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a className="page-scroll" href="#services">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>

      )
  }
}






