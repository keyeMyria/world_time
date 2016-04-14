import React, { Component } from 'react';
import Notification from 'lib/notification';
// import { NotificationSystem } from 'react-notification-system';
// import moment from 'moment';

// import jwtDecode from 'jwt-decode';
export default class Test2 extends Component {

  // state = {
  //   _notificationSystem: null
  // }

  // _addNotification(event) {
  //   event.preventDefault()
  //   this._notificationSystem.addNotification({
  //     message: 'Notification message',
  //     level: 'success'
  //   });
  // }

  // componentDidMount() {
  //   this._notificationSystem = this.refs.notificationSystem
  // }

  // handleLocal() {
    // let a = localStorage.getItem('auth-token')
    // let decodedToken = jwtDecode(a);

    // console.log(decodedToken.expires)

    // console.log(moment(decodedToken.expires).isAfter())

			// console.log(decodedToken.expires)
    // let c = new Date.UTC
    // let b = c.getUTCDate()
    // let UTCstring = Date.UTC(2010, 11, 17, 0, 0, 0, 0)
    // console.log(utcDate)

  // }

  // myClickHander() {
  //   console.log("111")
  // }

  addNotification() {

    console.log("111111")

    Notification.error('File uploaded')
  }

  render() {
    return (
        <div className="center">
          <h1> Test 2 open access</h1>
          <button className="btn" onClick={this.handleLocal}> local </button>
          <br />
          <br />
          <br />
          <br />
          <button className="btn" onClick={this.addNotification}>Add notification</button>
        </div>
      )
  }
}


