import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import { TimeLineStore } from 'stores';

export default class TimeLineView extends Component {

  static propTypes = {
     number: PropTypes.number.isRequired,
     reactKey: PropTypes.number.isRequired,
     isSelected: PropTypes.bool.isRequired,
     onClick: PropTypes.func.isRequired
     // hour: PropTypes.number.isRequired,
  }

  handleClick = () => {
    this.setState({active: !this.state.active})
    // let reactKey = this.props.reactKey
    let number = this.props.number
    TimeLineStore.setHour(number)
  }

  render() {
    let active = this.props.isSelected
    let classes = classNames({ timeline: active, active_timeline: !active});

    return (
      <td className={classes} onClick={this.props.onClick}> { this.props.number }</td>
    )
  }

}


