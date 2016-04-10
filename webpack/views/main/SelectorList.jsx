import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import React, { PropTypes, Component } from 'react';
import { City } from 'models';

export default class SelectorList extends Component {

  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  state = {
    selectedCity: 1
  }

  handleSelectedCity = (e) => {
    this.setState({ selectedCity: parseInt(e.target.value) })
  }

  handleAdd = () => {
    this.props.dashboard.addCity(this.state.selectedCity)
  }


  render() {
    let cities = City.all();

    return (
      <div>
        <div className="small-offset-2 small-4 columns">
            <Select2
              value={ this.state.selectedCity }
              ref="selectCity"
              data={ cities }
              onChange={ this.handleSelectedCity }
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


