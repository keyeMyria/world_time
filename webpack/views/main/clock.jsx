import React, { PropTypes, Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {

  state = {
    currentTime: 0
  }

  tick = () => {
    this.setState({currentTime: new Date + 1 })
  }

  componentWillMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  render() {
    let time = moment(new Date(this.state.currentTime))
    this.props.hour ? time.add(this.props.hour, "hour") : null

    return (
      <div>
        <div className={this.props.day ? "col-xs-6" : null}>
          { this.props.day ? time.format('DD') : null }
        </div>
        <div className={this.props.day ? "col-xs-6" : null}>
          { time.format('H:mm') }
        </div>
      </div>
    )
  }

}

Clock.propTypes = {
  day: PropTypes.bool,
  hour: PropTypes.number,
}

