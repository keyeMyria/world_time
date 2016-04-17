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
      let begin = range(24 + hour, 24);
      let end = range(1, 24 + hour);
      return begin.concat(end)

    } else {

      // let start = hour
      // let end = 24
      // let arr_one = range(start, end);
      let arr_one = range(hour, 24);

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
                key={ number}
                number={ number }
              />
            )}
          </tr>
        </tbody>
      </table>
    )
  }


  setHours() {

  }

}

