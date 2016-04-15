import React, { PropTypes, Component } from 'react';
import TimeLineView from 'views/main/time_line_view';
import range from 'lodash/range';

export default class TimeLineList extends Component {

  static propTypes = {
     hour: PropTypes.number
  }

  calculateHour() {
    let hour = this.props.hour

    if (hour <= 0) {
      let start = (24 - Math.abs(hour))
      let end = 24
      let arr_one = range(start, end);

      let start_2 = 1
      let end_2 = start_2 + (23 - Math.abs(hour))
      let arr_two = range(start_2, end_2);

      return arr_one.concat(arr_two)
    } else {

      let start = hour
      let end = 24
      let arr_one = range(start, end);

      let start_2 = 1
      let end_2 = hour
      let arr_two = range(start_2, end_2);

      return arr_one.concat(arr_two)
    }

  }

  render() {
    let hours = this.calculateHour()

    return (
      <table>
        <tbody>
          <tr>
            { hours.map((number, index) =>
              <TimeLineView
                key={ index }
                reactKey={ index }
                number={ number }
              />
            )}
          </tr>
        </tbody>
      </table>
    )
  }

  // componentWillReceiveProps() {
  //   console.log("111111")
  // }

  setHours() {
    // setHours(index) {
    // console.log("33333"),
    // console.log(this),
    // console.log(index),
    // console.log(tt.props)
    // console.log(TimeLineList.props)
    // console.log(this.state)
  }

}

