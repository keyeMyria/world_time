import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Dashboard } from 'models';
import City from 'views/main/City';

@observer
export default class CityList extends Component {

  componentWillMount() {
    this.setState({ loading: true });
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderView() {
    let dashboard = this.props.dashboard;
    let cities = this.props.dashboard.cities.slice();


    return (
        <div className="center">
          <h1> List Current City </h1>
          { cities.map((city) =>
            <City
              key={city.id}
              city={ city }
              dashboard={ dashboard }
            />
          )}
        </div>
    )
  }

  render() {
    return this.renderView();
  }

}

