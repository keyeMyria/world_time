import React, { PropTypes, Component } from 'react';

export default class TimeLineView extends Component {

  static propTypes = {
     hour: PropTypes.number,
     number: PropTypes.number
  }

  render() {

    return (

      <tr> { this.props.number }</tr>
    )
  }

}


