import React, { Component } from 'react';
import SelectorList         from 'views/main/selectorList.jsx';
import TimeZonesList        from 'views/main/timeZoneList.jsx';
import { observer }         from 'mobx-react';
import { City }             from 'models';

@observer
export default class Page extends Component {

  componentWillMount() {
    this.setState({ loading: true });

    City.loadAll().then(response => {
      if (response.ok) {
        this.setState({ loading: false })
      }
    });
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderTimeZones() {
    return (
      <div className="center">
        <h1> Main page </h1>
        <SelectorList cities ={City.all()}/>
        <TimeZonesList />
      </div>
    )
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderTimeZones();
  }
}


