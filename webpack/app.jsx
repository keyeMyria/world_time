import 'foundation-sites/dist/foundation.min.js';
import 'foundation-sites/dist/foundation.min.css';

import { render } from 'react-dom';
import routes from 'lib/routes.jsx';
import 'config';

render(routes, document.getElementById('main'));


// import { TimeZone } from 'models';
// TimeZone.addClassAction('loadAll')
// console.log(TimeZone.all())

// TimeZone.loadAll().then(response => {
//   if (response.ok) {
//     console.log("1111")
//     this.setState({ loading: false })
//   }

// });


