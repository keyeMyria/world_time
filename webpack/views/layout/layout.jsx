import React, { Component } from 'react';
import Header from 'views/layout/header';
import Sidebar from 'views/layout/sidebar';
import Footer from 'views/layout/footer';
import Page from 'views/main/page';

export default class Layout extends Component {
  render() {
    return (
      <div className="row" id='layout'>
      	<Header />
      	<Page />
      	<Footer />
      </div>
    );
  }
}

