import React, { Component } from 'react';

export default class Header extends React.Component {

  render() {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu" >
              <li className="menu-text"> World Time </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu" >
              <button className="button"> Login </button>
            </ul>
          </div>
        </div>
      )
  }
}






