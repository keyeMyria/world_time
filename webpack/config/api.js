import { API } from 'mobx-model';
/* import auth from 'lib/auth'; */

API.config({
	urlRoot: 'http://localhost:5002/api',
	/* requestHeaders: { Authorization: `Bearer ${auth.token}` }, */
  onRequestCompleted(response) {
    console.log('api', response.body);
  }
});
