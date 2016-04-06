import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

class Selector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      options: [{ text: 'one', id: 'One' }, { text: 'two', id: 'Two' }]
    }
  }

  componentWillMount() {
    const component = this

    fetch('/api/v1/time_zones')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        component.setState(json)
      }).catch(function(ex) {
        console.log('parsing failed')
      })
  }


  logChange(event) {
    console.log(event.target.value)
  }

  render() {
console.log(this)
    return (
        <div className="center">
          <div className="small-offset-2 small-4 columns">
            <Select2
              onChange={this.logChange}
              data={this.state.time_zones}
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

export { Selector }

