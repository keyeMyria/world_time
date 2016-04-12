import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { City } from 'models';

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
    console.log("handleDestroy")
    this.props.dashboard.removeCity(this.props.city)
  }

  handleHome = () => {
    City.setCityHome({city_id: this.props.city.id})
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  buttonCityHome = () => {
    let city = this.props.city

    if (city.home) {
      return (
        <div className="center col-xs-3">
          <div> Home </div>
        </div>
      )
    } else {
      return (
        <div className="col-xs-3">
          <button onClick={ this.handleHome } className="btn btn-primary page-scroll"> Home </button>
        </div>
      )
    }
  }

  renderView() {
    let city = this.props.city

    return(
      <div className={city.home ? "callout success colums" : "callout colums"} >
        {this.buttonCityHome()}
        <div className="col-xs-3">{city.name}</div>
        <div className="col-xs-3">{city.hour}</div>
        <div className="col-xs-3">
          <button onClick={this.handleDestroy} className="btn btn-default btn-xl">Destroy</button>
        </div>
        <div className="clearfix" />
      </div>
    )
  }

  render() {
    return this.state.show ? this.renderView() : this.renderLoading()
  }
}
