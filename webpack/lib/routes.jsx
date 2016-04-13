import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from 'views/layout/layout';
import Notfound from 'views/errors/not_found';
import Login from 'views/users/login';

import auth from 'lib/auth';

import Page from 'views/main/page';
import TestPage1 from 'views/test/test1';
import TestPage2 from 'views/test/test2';

const requireAuth = (nextState, replace) => {

  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

const routes =
  <Router history={ hashHistory }>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ Page } />
      <Route path="test2" component={ TestPage2 } />
      <Route path="test1" component={ TestPage1 } onEnter={ requireAuth }/>
      <Route path="login" component={ Login } />
      <Route path="*" component={ Notfound } />
    </Route>
  </Router>

export default routes

