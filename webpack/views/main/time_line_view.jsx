import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import { TimeLineStore } from 'stores';

export default class TimeLineView extends Component {

  static propTypes = {
     number: PropTypes.number.isRequired,
     reactKey: PropTypes.number.isRequired,
     // hour: PropTypes.number.isRequired,
  }

  state = {
    active: false
  };

  handleClick = () => {
    this.setState({active: !this.state.active})
    let reactKey = this.props.reactKey
    TimeLineStore.setHour(reactKey)
  }

  render() {
    let active = this.state.active
    let classes = classNames({ timeline: active, active_timeline: !active});

    return (
      <td className={classes} onClick={this.handleClick}> { this.props.number }</td>
    )
  }

}


