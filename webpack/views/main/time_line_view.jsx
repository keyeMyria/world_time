import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import { TimeLineStore } from 'stores';

import { observer } from 'mobx-react';
import { autorun } from 'mobx';

@observer
export default class TimeLineView extends Component {

  static propTypes = {
     hour: PropTypes.number.isRequired,
     isSelected: PropTypes.bool.isRequired,
     // reactKey: PropTypes.number.isRequired,
     // onClick: PropTypes.func.isRequired
     // hour: PropTypes.number.isRequired,
  }

  handleClick = () => {
    // let hour = this.props.hour
    // console.log(hour)
    console.log("handleClick")
    console.log(this.props.reactKey)
    // TimeLineStore.selectedHour = this.props.reactKey
    autorun(() => {
      TimeLineStore.selectedHour = this.props.reactKey
      // console.log(TimeLineStore.selectedTimeline)
      // TimeLineStore.selectedTimeline = !TimeLineStore.selectedTimeline
      // console.log(TimeLineStore.selectedTimeline)
    })



    // this.setState({active: !this.state.active})
    // let reactKey = this.props.reactKey
    // let number = this.props.number
    // TimeLineStore.setHour(number)
  }





  render() {
    // let selectHour = TimeLineStore.selectedHour
    // console.log(isSelected)

    // console.log(TimeLineStore.selectedTimeline)
    // let active = this.props.isSelected
    // console.log(TimeLineStore.selectedTimeline)
    // let active = TimeLineStore.selectedTimeline

    // let classes = classNames({ timeline: active, active_timeline: !active});
    // let select = this.props.isSelected
    // let select
    // if (selectHour == hour) {
    //   select = true
    // } else {
    //   select = false
    // }

    // let classes = classNames({ timeline: select, active_timeline: !select});
    let hour = this.props.hour
    let isSelected = this.props.isSelected
    let classes = classNames({ timeline: isSelected, active_timeline: !isSelected});

    return (
      <td className={classes} onClick={this.handleClick}>{ this.props.hour }</td>
    )



  }

}


