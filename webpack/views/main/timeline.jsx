import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import range from 'lodash/range';

import Cell from 'views/main/cell';

@observer
export default class TimeLine extends Component {

  render() {
    let hours = this.calculateHour()

    return (
      <table>
        <tbody>
          <tr>
            { hours.map((hour, index) =>
              <Cell
                key = { index }
                index = { index }
                hour = { hour }
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

TimeLine.propTypes = {
  hour: PropTypes.number
}
