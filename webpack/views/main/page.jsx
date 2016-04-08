import React, { Component } from 'react';
import SelectorList         from 'views/main/selectorList.jsx';
import DashboardList        from 'views/main/dashboardList.jsx';
import { observer }         from 'mobx-react';
import { City }             from 'models';
import { Dashboard }        from 'models';

@observer
export default class Page extends Component {

  componentWillMount() {
    this.setState({ loadingCity: true, loadingDashboard: true });

    City.loadAll().then(response => {
      if (response.ok) {
        this.setState({ loadingCity: false })
      }
    });

    Dashboard.loadAll().then(response => {
      if (response.ok) {
        this.setState({ loadingDashboard: false })
        this.setState({ dashboard: Dashboard.get(1) })
        this.setState({ cities: Dashboard.get(1).cities.slice() })
      }
    });

  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderView() {
    // refactor
    if (this.state.cities) {
      return (
        <div className="center">
          <h1> Main page </h1>
          <SelectorList  cities={City.all()} dashboard={this.state.dashboard}/>
          <DashboardList cities={this.state.cities}  />
        </div>
      )
    } else {
      return this.renderLoading()
    }

  }

  render() {
    return this.state.loadingCity || this.state.loadingDashboard ? this.renderLoading() : this.renderView();
  }

}



