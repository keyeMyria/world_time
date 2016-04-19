import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';

// import { UIStore } from 'stores';
import { UIStore } from '../../stores/index.js';

@observer
export default class Cell extends Component {

  handleClick = () => {
    UIStore.selectedIndexCell = this.props.index
  }

  render() {
    let currentIndex  = this.props.index
    let selectedIndex = UIStore.selectedIndexCell
    let isSelected = currentIndex == selectedIndex

    let classes = classNames({ timeline: isSelected, active_timeline: !isSelected});

    return (
      <td className={classes} onClick={this.handleClick}>{ this.props.hour }</td>
    )
  }

}

Cell.propTypes = {
  hour: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

