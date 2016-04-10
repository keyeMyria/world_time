import 'foundation-sites/dist/foundation.min.js';
import 'foundation-sites/dist/foundation.min.css';

import { render } from 'react-dom';
import routes from 'lib/routes';
import 'config';

render(routes, document.getElementById('main'));

