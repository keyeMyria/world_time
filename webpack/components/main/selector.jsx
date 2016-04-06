import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import React, { PropTypes, Component } from 'react';

class Selector extends Component {

  static propTypes = {
    timeZones: PropTypes.arrayOf(PropTypes.object) 
  }

  handleChange = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
        <div className="center">
          <div className="small-offset-2 small-4 columns">
            <Select2
              onChange={ this.handleChange }
              data={ this.props.timeZones.map(t => t.toJson()) }
            />
          </div>

          <div className="small-4 columns">
            <button className="button"> Add </button>
          </div>

          <div className="clearfix"></div>
        </div>
      )
  }
}

export default Selector

