import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import React, { PropTypes, Component } from 'react';
import { Dashboard }                   from 'models';

export default class SelectorList extends Component {

  static propTypes = {
    // dashboard: PropTypes.object.isRequired
    dashboard: PropTypes.object,
    cities: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    selectedCity: 1
  }

  handleSelectedCity = (e) => {
    this.setState({ selectedCity: parseInt(e.target.value) })
  }

  handleAdd = () => {
    console.log(this.props)
    this.props.dashboard.addCity(this.state.selectedCity)
  }

  render() {

    return (
      <div>
        <div className="small-offset-2 small-4 columns">
            <Select2
              value={ this.state.selectedCity }
              ref="selectCity"
              data={ this.props.cities }
              onChange={ this.handleSelectedCity }
            />
          </div>

          <div className="small-4 columns">
            <button className="button" onClick={this.handleAdd}> Add </button>
          </div>

          <div className="clearfix"></div>
      </div>
    )
  }
}


