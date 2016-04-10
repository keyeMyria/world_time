import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class City extends Component {

  static propTypes = {
    onDestroy: React.PropTypes.func
  }

  state = {
    show: true
  }

  handleDestroy = () => {
    console.log("handleDestroy")
    this.props.dashboard.removeCity(this.props.city)
  }

  renderEmpty() {
    return <div />
  }

  renderView() {
    return(
      <div className="colums">
        <div className="small-4 columns"> { this.props.city.text } </div>
        <div className="small-4 columns"> { this.props.city.hour } </div>
        <div className="small-4 columns">
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
