import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Dashboard } from 'models';
import _ from 'lodash';

import CityView from 'views/main/CityView';

@observer
export default class CityList extends Component {

  componentWillMount() {
    this.setState({ loading: true });
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  handleDestroyAll = () => {
    console.log("handleDestroy all")
    // this.props.dashboard.removeCity()
  }

  renderView() {
    let dashboard = this.props.dashboard;
    let cities = this.props.dashboard.cities.slice();
    let cities_sort = (_.sortBy(cities, function(city) { return city.home })).reverse()
    // let cityHome = (_.remove(cities, function(city) { return city.home === true; }))[0]

    return (
      <div className="center">
        <h1> List Current City </h1>
        { cities_sort.map((city) =>
          <CityView
            key={city.id}
            city={ city }
            dashboard={ dashboard }
          />
        )}
      <button className="button" onClick={ this.handleDestroyAll } >Destroy All</button>
      </div>
    )
  }

  render() {
    return this.renderView();
  }

}

