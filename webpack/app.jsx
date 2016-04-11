import 'foundation-sites/dist/foundation.min.js';
import 'foundation-sites/dist/foundation.min.css';
import 'scss/main.sass';

import { render } from 'react-dom';
import routes from 'lib/routes';
import 'config';

render(routes, document.getElementById('main'));

