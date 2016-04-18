import React, { PropTypes, Component } from 'react';
import TimeLineView from 'views/main/time_line_view';
import range from 'lodash/range';

import { TimeLineStore } from 'stores';

import { observer } from 'mobx-react';
import { autorun } from 'mobx';

@observer
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
      let begin = range(hour, 24);
      let end = range(1, hour);
      return begin.concat(end)
    }

  }

  render() {
    let hours = this.calculateHour()
    let select = TimeLineStore.selectedHour

    return (
      <table>
        <tbody>
          <tr>
            { hours.map((hour, index) =>
              <TimeLineView
                key ={ hour }
                hour ={ hour }
                reactKey ={ index }
                isSelected = {this.checkSelect(index)}
              />
            )}
          </tr>
        </tbody>
      </table>
    )
  }

  checkSelect(index) {
    let select = TimeLineStore.selectedHour
    // console.log(index)
    // console.log(select)
    if (select == "") {
      return false
    } else {
      if (select == index) {
        return true
      } else {
        return false
      }
    }




  }

}

// isSelected = { select == i ? true : false }
