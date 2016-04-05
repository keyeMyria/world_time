const Time = React.createClass({

  render: function() {
    console.log(this)
    return (
    <table>
				<tr> { this.props.children.name } </tr>
				<tr> { this.props.children.hours } </tr>
    </table>

    );

  }
});

const Dashboard = React.createClass({

  getInitialState: function() {
		return {
			data: [423423,34234,234234]
		};
  },

	componentWillMount() {
			const component = this;

      fetch('/api/v1/time_zones')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          component.setState(json)
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
	},


  render: function() {
      if (this.state.time_zones) {
          return (<div>
                      {this.state.time_zones.map(function(time, i){
                          return (
                              <Time key={i}>{time}</Time>
                          );
                      })}
              </div>

          );
      }
      else {
          return <h1 className="center"> Load </h1>
      }
  }
});




export { Dashboard };


  // render: function() {
		// console.log(this.state)

  //   return (
			// <div className="center">
			// </div>
  //   );
  // }
