import React, { PropTypes, Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { City } from 'models';

export default class SelectorList extends Component {

  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  state = {
    selectedCity: 10
  }

  handleSelectedCity = (e) => {
    this.setState({ selectedCity: parseInt(e.value) })
  }

  handleAdd = () => {
    this.props.dashboard.addCity(this.state.selectedCity)
  }

  render() {
    let cities = City.all().map(city => city.toJsonForSelect())

    return (
      <div>
        <div className="small-offset-2 small-4 columns">
          <Select
              name="form-field-name"
              value={this.state.selectedCity}
              onChange={this.handleSelectedCity}
              options={ cities }
          />
        </div>

        <div className="small-4 columns">
          <button className="button" onClick={ this.handleAdd }> Add </button>
        </div>

        <div className="clearfix"></div>
      </div>
    )
  }
}

