import React, { Component, PropTypes } from 'react';
import Page from 'views/layout/page';
import auth from 'lib/auth';

export default class ProductSearch extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static propTypes = {
    location: PropTypes.object
  };

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
    e.preventDefault();

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
	alert('error: cannot log in');
	console.error(response);
      }
    });
  }

  render() {
    return (
      <Page
	breadcrumbs={ 'Home / Login' }
	title='Login'
      >
      <br />
      <div className="bg-primary col-xs-offset-4 col-xs-4">
	<form className="center smart-form client-form">
	  <fieldset>
	    <br />
	    <div> E-mail </div>
	    <br />
	    <div className="col-xs-offset-2 col-xs-8">
	      <input type="email"
		className="form-control"
		value={ this.state.email }
		onChange={ this.handleEmailChange }
	      />
	    </div>

	    <br />
	    <div> Password </div>
	    <br />
	    <div className="col-xs-offset-2 col-xs-8">
	      <input type="password"
		className="form-control"
		value={ this.state.password }
		onChange={ this.handlePasswordChange }
	      />
	    </div>
	  </fieldset>

	  <br />
	  <footer>
	    <button type="submit"
	      className="btn btn-default"
	      onClick={ this.handleLogin }
	    > Sign in </button>
	  <br />
	  <br />
	  </footer>
	</form>
	</div>
      </Page>
    )
  }
}
