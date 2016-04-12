import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { Dashboard } from 'models';
import _ from 'lodash';

import CityView from 'views/main/CityView';

@observer
export default class CityList extends Component {

  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  handleDestroyAll = () => {
    console.log("handleDestroy all")
    this.props.dashboard.removeCity()
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderView() {
    let dashboard = this.props.dashboard;
    let cities = this.props.dashboard.cities.slice();
    // refactor?
    let cities_sort = (_.sortBy(cities, function(city) { return city.home })).reverse()

    return (
      <div className="center">
        <h1> List Current City </h1>
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
    return this.renderView();
  }

}

