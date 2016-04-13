import React, { Component } from 'react';
import Header from 'views/layout/header';
import Footer from 'views/layout/footer';

export default class Layout extends Component {
  render() {
    return (
      <div >
        <Header />
      	{ this.props.children }
        <Footer />
      </div>
    );
  }
}


