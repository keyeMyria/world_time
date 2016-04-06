import config from 'config';

/* import { Dashboard } from 'components/dashboard'; */
/* ReactDOM.render(<Dashboard />, document.getElementById('main')); */

import { Header } from 'components/header';
ReactDOM.render(<Header />, document.getElementById('header'));

import { Page } from 'components/main/page';
ReactDOM.render(<Page />, document.getElementById('main'));

