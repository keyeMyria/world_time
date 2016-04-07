import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import React, { PropTypes, Component } from 'react';
import { Dashboard }             from 'models';

export default class SelectorList extends Component {
  static propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object)
  }

  componentWillMount() {
    Dashboard.load(1).then(response => {
      if (response.ok) {
        this.setState({ ready: true})
      }
    });
  }

  handleAdd = () => {
    var result = Dashboard.all().filter(function( obj ) { return obj.id == 1; });

    let cityId = this.refs.selectCity.el.context.value

    result[0].update({"city_id": cityId})
  }

  render() {

    return (
      <div>
        <div className="small-offset-2 small-4 columns">

            <Select2
              ref="selectCity"
              data={ this.props.cities }
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


