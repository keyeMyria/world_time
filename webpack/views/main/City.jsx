import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class City extends Component {

  static propTypes = {
    onDestroy: Proptypes.func
  }

  handleClick = () => {
    this.props.onDestroy()
  }

  // destroyCity(e) {
  // }

  state = {
    show: true
  }

  renderEmpty() { return <div /> }

  renderView() {
    return(
      <div className="colums">
        <div className="small-4 columns"> { this.props.city.text } </div>
        <div className="small-4 columns"> { this.props.city.hour } </div>
        <div className="small-4 columns">
          <button onClick={ this.handleClick } className="button"> Destroy </button>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }

  render() {
    return this.state.show ? this.renderView() : this.renderEmpty()
  }
}
