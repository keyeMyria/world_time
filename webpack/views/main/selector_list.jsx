import React, { PropTypes, Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { City } from 'models';

export default class SelectorList extends Component {

  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  state = {
    selectedCity: 1
  }

  handleSelectedCity = (e) => {
    this.setState({ selectedCity: parseInt(e.value) })
  }

  handleAdd = () => {
    this.props.dashboard.actionAddCity(this.state.selectedCity)
    City.loadAll()
  }

  render() {
    let cities = City.all().map(city => city.toJsonForSelect())

    return (
      <div className="bg-primary select">
        <br />
        <br />
        <div className="col-xs-offset-2 col-xs-4">
          <Select
              name="form-field-name"
              value={ this.state.selectedCity }
              onChange={ this.handleSelectedCity }
              options={ cities }
          />
        </div>
        <div className="small-4 columns">
          <button
            className="btn btn-default btn-xl"
            onClick={ this.handleAdd }
          > Add </button>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}

