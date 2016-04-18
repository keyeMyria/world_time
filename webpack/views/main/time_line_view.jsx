import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';

import { TimeLineStore } from 'stores';

@observer
export default class TimeLineView extends Component {

  handleClick = () => {
    autorun(() => {
      TimeLineStore.selectedHour = this.props.reactKey
    })
  }

  render() {
    let isSelected = this.props.isSelected
    let classes = classNames({ timeline: isSelected, active_timeline: !isSelected});

    return (
      <td className={classes} onClick={this.handleClick}>{ this.props.hour }</td>
    )
  }

}

TimeLineView.propTypes = {
  hour: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  reactKey: PropTypes.number.isRequired,
}

