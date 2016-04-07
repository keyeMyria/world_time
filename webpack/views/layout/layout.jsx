import React, { Component } from 'react';
import Header  from 'views/layout/header.jsx';
import Sidebar from 'views/layout/sidebar.jsx';
import Footer  from 'views/layout/footer.jsx';

import Page    from 'views/main/page.jsx';

export default class Layout extends Component {
  render() {
    return (
      <div id='layout'>
      	<Header />
      	<Page />
      	<Footer />
      </div>
    );
  }
}


// { this.props.children }
// <Sidebar />
