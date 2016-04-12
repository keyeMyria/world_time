import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { City } from 'models';

import Clock from 'views/main/clock';

@observer
export default class CityView extends Component {

  state = {
    show: true
  }

  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired
  }

  handleDestroy = () => {
    this.props.dashboard.actionRemoveCity(this.props.city)
  }

  handleHome = () => {
    this.props.city.setHome()
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  buttonCityHome = () => {
    let city = this.props.city

    if (city.home) {
      return (
        <div className="center col-xs-2">
          <div> Home </div>
        </div>
      )
    } else {
      return (
        <div className="col-xs-2">
          <button onClick={ this.handleHome } className="btn btn-primary page-scroll"> Home </button>
        </div>
      )
    }
  }

  renderView() {
    let city = this.props.city
    City.loadAll()

    let now = new Date()

    return(
      <div className="city_view" >
        {this.buttonCityHome()}
        <div className="col-xs-1">{city.name}</div>

        <div className="col-xs-1"><Clock changeHour={city.hour}/></div>

        <div className="col-xs-1">UTC {city.hour}</div>
        <div className="col-xs-5">Timeline</div>

        <div className="col-xs-1">
          <button onClick={this.handleDestroy} className="btn btn-default">Destroy</button>
        </div>
        <div className="clearfix" />
      </div>
    )
  }

  render() {
    return this.state.show ? this.renderView() : this.renderLoading()
  }
}
