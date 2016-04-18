import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import range from 'lodash/range';
import { TimeLineStore } from 'stores';
import TimeLineView from 'views/main/time_line_view';

@observer
export default class TimeLineList extends Component {

  render() {
    let hours = this.calculateHour()
    let select = TimeLineStore.selectedHour

    return (
      <table>
        <tbody>
          <tr>
            { hours.map((hour, index) =>
              <TimeLineView
                key = { hour }
                hour = { hour }
                reactKey = { index }
                isSelected = { this.checkSelect(index) }
              />
            )}
          </tr>
        </tbody>
      </table>
    )
  }

  // private
  checkSelect(index) {
    return index == TimeLineStore.selectedHour
  }

  calculateHour() {
    let hour = this.props.hour

    let begin, end
    if (hour >= 0) {
      begin = range(hour, 24)
      end = range(1, hour)
    } else {
      begin = range(24 + hour, 24)
      end = range(1, 24 + hour)
    }
    return begin.concat(end)
  }

}

TimeLineList.propTypes = {
  hour: PropTypes.number
}
