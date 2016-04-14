import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { Dashboard } from 'models';
import _ from 'lodash';

import CityView from 'views/main/city_view';
import Clock from 'views/main/clock';

@observer
export default class CityList extends Component {

  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  renderView() {
    let dashboard = this.props.dashboard;
    let cities = dashboard.cities.slice();
    let cities_sort = (_.sortBy(cities, function(city) { return city.home })).reverse()

    return (
      <div className="center">
        <h1> List Current City </h1>
        <div> Current time: <Clock /> </div>
        <div className="clearfix" />
        <br />
        { cities_sort.map((city) =>
          <CityView
            key={city.id}
            city={city}
            dashboard={dashboard}
          />
        )}
      </div>
    )
  }

  render() {
    return this.renderView()
  }

}

