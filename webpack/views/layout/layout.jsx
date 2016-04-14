import React, { Component } from 'react';
import Header from 'views/layout/header';
import Footer from 'views/layout/footer';
import NotificationSystem from 'react-notification-system';
import { UIStore } from 'stores';

export default class Layout extends Component {

  componentDidMount() {
    UIStore.notificationSystem = this.refs.notificationSystem;
  }

  render() {
    return (
      <div >
        <Header />
        <NotificationSystem ref="notificationSystem" allowHTML={ true }/>
      	{ this.props.children }
        <Footer />
      </div>
    );
  }
}


