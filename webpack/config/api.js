import { API } from 'mobx-model';
// import auth from 'lib/auth';

API.config({
  urlRoot: '/api/v1',
  requestHeaders: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  // onRequestError(options) {
  //   console.log(`API Error ${options.statusCode}`);
  // },
  onRequestCompleted(response) {
    console.log('API request completed', response.body);
  }
});
