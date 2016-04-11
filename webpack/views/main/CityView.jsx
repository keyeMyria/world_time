import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { City } from 'models';

@observer
export default class CityView extends Component {

  static propTypes = {
    onDestroy: React.PropTypes.func
  }

  state = {
    show: true
  }

  componentWillMount() {
    this.style = {
      color: "green",
    }
  }


  handleDestroy = () => {
    console.log("handleDestroy")
    this.props.dashboard.removeCity(this.props.city)
  }

  handleHome = () => {
    City.setCityHome({city_id: this.props.city.id})
  }

  renderEmpty() {
    return <div />
  }

  buttonCityHome = () => {
    if (this.props.city.home) {
      return (
        <div className="center small-3 columns">
          <div> Home </div>
        </div>
      )
    } else {
      return (
        <div className="small-3 columns">
          <button onClick={ this.handleHome } className="button"> Home </button>
        </div>
      )
    }
  }

  renderView() {
    let city = this.props.city

    return(
      <div className={city.home ? "callout success colums" : "callout colums"} >
        { this.buttonCityHome() }
        <div className="small-3 columns"> { city.text } </div>
        <div className="small-3 columns"> { city.hour } </div>
        <div className="small-3 columns">
          <button onClick={ this.handleDestroy } className="button"> Destroy </button>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }

  render() {
    return this.state.show ? this.renderView() : this.renderEmpty()
  }
}
