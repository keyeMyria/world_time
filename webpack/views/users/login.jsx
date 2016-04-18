import React, { Component, PropTypes } from 'react';
import Page from 'views/layout/page';
import auth from 'lib/auth';

import { autorun } from 'mobx';
import { UserStore } from 'stores';

import Notification from 'lib/notification';
import { Clearfix, Col, Button, Input } from 'react-bootstrap/dist/react-bootstrap.min.js';

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault()

    auth.login({
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      if (response.ok) {
	const { location } = this.props
	if (location.state && location.state.nextPathname) {
	  this.context.router.replace(location.state.nextPathname)
	} else {
	  this.context.router.replace('/')
	}

      } else {
	Notification.error(response.body.error)
      }

      Notification.success("You success Login")
      UserStore.logIn = true
      return true

    })
  }

  render() {
    return (
      <Page
	breadcrumbs={ 'Home / Login' }
	title='Login'
      >
      <br />
      <Col
	className="bg-primary border"
	xs={4}
	xsOffset={4}
      >
	<form className="center smart-form client-form">
	  <fieldset>
	    <br />
	    <div> E-mail </div>
	    <br />

	    <Col xs={8} xsOffset={2} >
	      <Input
		type="email"
		value={ this.state.email }
		onChange={ this.handleEmailChange }
	      />
	    </Col>

	    <Clearfix />
	    <br />
	    <div> Password </div>
	    <br />
	    <Col xs={8} xsOffset={2}>
	      <Input
		type="password"
		value={ this.state.password }
		onChange={ this.handlePasswordChange }
	      />
	    </Col>
	  </fieldset>

	  <br />
	  <footer>
	    <Button onClick={ this.handleLogin } >Sign in</Button>
	  <br />
	  <br />
	  </footer>

	</form>
	</Col>
      </Page>
    )
  }
}

Login.propTypes = {
  location: PropTypes.object
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

