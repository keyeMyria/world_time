// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'scss/main.sass';

import { render } from 'react-dom';
import routes from 'lib/routes';
import 'config';

render(routes, document.getElementById('main'));

