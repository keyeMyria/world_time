import React, { Component } from 'react';
import { observer }         from 'mobx-react';
import { Dashboard }             from 'models';
import City from 'views/main/City';

@observer
export default class CityList extends Component {

  state = { hiddenCities: [] }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  hideCity = (cityId) => {
    hiddenCities.push(cityId);
    this.setState({ hiddenCities: hiddenCities })
  }

  renderView() {
    let cities = this.props.dashboard.cities.slice();
    let visibleCities = cities.reject(city => include(this.state.hiddenCities, city.id))

    return (
        <div className="center">
          <h1> List Current City </h1>
          { visibleCities.map((city) =>
            <City key={city.id} city={ city } onDestroy={ this.hideCity }/>
          )}
        </div>
    )
  }

  render() {
    // return this.state.loading ? this.renderLoading() : this.renderView();
    return this.renderView();
  }

}

