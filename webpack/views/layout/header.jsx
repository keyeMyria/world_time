import React, { Component } from 'react';
import { observer } from 'mobx-react';
import auth from 'lib/auth';
import { UserStore } from 'stores';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/dist/react-bootstrap.min.js';

@observer
export default class Header extends React.Component {

  handleLogout = () => {
    return auth.logOut()
  }

  loginButton() {
    if (UserStore.logIn) {
      return (
        <MenuItem
          onClick={this.handleLogout}
          href=""
        >LogOut</MenuItem>
      )
    } else {
      return (
        <MenuItem href="#login"> LogIn </MenuItem>
      )
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
           <a href="#">World Time</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem href="#test1">Test 1</NavItem>
            <NavItem href="#test2">Test 2</NavItem>
        </Nav>

        <Nav pullRight>
          {this.loginButton()}
        </Nav>

      </Navbar>
    )
  }
}



