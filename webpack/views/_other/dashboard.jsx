class Time extends React.Component {
    render() {
      return(
        <div className="colums">
          <div className="small-6 columns"> { this.props.children.name  } </div>
          <div className="small-6 columns"> { this.props.children.hours } </div>
        </div>
      )
    }
};

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
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

  create() {
    console.log("ssss")
    fetch('/api/v1/time_zones', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": 'Hubot',
      })
    })

  }

  render() {
    if (this.state.time_zones) {
      return (
        <div>
          <button className="button" onClick={this.create}> post </button>

          <br />
          { this.state.time_zones.map(function(time, i){
               return (
                   <Time key={i}>{time}</Time>
               );
           })}
        </div>
      )
    }
    else {
      return <h1 className="center"> Load </h1>
    }
  }
}




