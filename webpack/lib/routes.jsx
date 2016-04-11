import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from 'views/layout/layout';
import Test from 'views/test/page';
import Notfound from 'views/errors/not_found';

const routes =
  <Router history={ hashHistory }>
    <Route path='/' component={ Layout } />
    <Route path='/test' component={ Test } />
    <Route path="*" component={ Notfound } />
  </Router>

export default routes


// <IndexRoute component={ ProductSearch } onEnter={ requireAuth } />
// <Route path="login" component={ Login } />

// import Page from 'views/products/search';
// import ProductSearch from 'views/products/search';
// import Login from 'views/users/login';
// import auth from 'lib/auth';

// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// }
