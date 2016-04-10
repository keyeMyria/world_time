import React, { Component } from 'react';
import SelectorList from 'views/main/SelectorList';
import CityList from 'views/main/CityList';
import { observer } from 'mobx-react';
import { City } from 'models';
import { Dashboard } from 'models';

@observer
export default class Page extends Component {

  state = {
    loading: false
  };

  componentWillMount() {
    this.setState({ loading: true });

    Promise.all( [ City.loadAll(), Dashboard.loadAll() ])
      .then((responses = []) => {
        this.setState({ loading: false
      });
    });
  }

  handleDestroy = (dashboard) => {
    dashboard.removeCity()
    // console.log(this)

  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderView() {
    let dashboard = Dashboard.get(1);


    return (
      <div className="center">
        <h1> Main page </h1>
        <SelectorList dashboard={ dashboard }/>
        <CityList dashboard={ dashboard } />

        <button className="button" onClick={ this.handleDestroy(dashboard) } >Destroy All</button>

      </div>
    )
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderView();
  }

}


