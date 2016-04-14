import React, { PropTypes, Component } from 'react';

import _ from 'lodash';
import TimeLineView from 'views/main/timeline_view';

export default class TimeLineList extends Component {

  static propTypes = {
     hour: PropTypes.number
  }

  calculateHour() {
    let hour = this.props.hour

    if (hour <= 0) {
      let start = (24 - Math.abs(hour))
      let end = 24
      let arr_one = _.range(start, end);

      let start_2 = 1
      let end_2 = start_2 + (23 - Math.abs(hour))
      let arr_two = _.range(start_2, end_2);

      return arr_one.concat(arr_two)
    } else {
      let start = hour
      let end = 24
      let arr_one = _.range(start, end);

      let start_2 = 1
      let end_2 = hour
      let arr_two = _.range(start_2, end_2);

      return arr_one.concat(arr_two)

    }

  }


  render() {

    let offset = this.calculateHour()



    // let hour = 4

    // let start = hour
    // let end = 24
    // let arr_one = _.range(start, end);

    // let start_2 = 1
    // let end_2 = hour
    // let arr_two = _.range(start_2, end_2);

    // let arr = arr_one.concat(arr_two)
    // console.log(arr)


    return (

    <table className="table-bordered">
      <tbody className="table-bordered">
        { offset.map((number, i ) =>
          <TimeLineView
            key={i}
            number={number}
          />
          ) }
      </tbody>
    </table>

    )
  }

}


