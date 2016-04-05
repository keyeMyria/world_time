
const Dashboard = React.createClass({

  getInitialState: function() {
		return {
			data: [423423,34234,234234]
		};
  },

	componentDidMount() {
			const component = this;
			$.get("/api/v1/time_zones", function(data) {
				component.setState(data);
			})


		},


  render: function() {
		console.log(this.props.time_zones)


    return (
			<div className="center">
				<h1>Time Zones</h1>
					{ if (this.state.data) {
							{
								this.state.data.time_zones.map(function (name, i) {
									return <div key={i}>Hello, {name.id}!</div>
								})
							}
						}
					}


				<button className="button" onClick={ this.getCity } >Get</button>
			</div>
    );
  }
});

					// {
					// 	this.state.data.map(function (name, i) {
					// 		return <div key={i}>Hello, {name}!</div>
					// 	})
					// }



				// {
				// 	this.props.items.map(function(m, index){
				// 		return <li onClick={self.clicked.bind(self, index)}>{m}</li>;
				// 	})
				// }


				// {this.state.data.map(function(note, i){
				// 		return (
				// 				<Note key={i}>{note}</Note>
				// 		);
				// })}

// class Dashboard extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {employees: []};
// 	}

// 	componentDidMount() {
// 		({method: 'GET', path: '/api/employees'}).done(response => {
// 			this.setState({employees: response.entity._embedded.employees});
// 		});
// 	}

// 	render() {
// 		return (
// 			<EmployeeList employees={this.state.employees}/>
// 		)
// 	}
// }




export { Dashboard };
