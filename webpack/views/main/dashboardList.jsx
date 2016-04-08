import React, { Component } from 'react';

export default class DashboardList extends Component {

  // static propTypes = {
    // dashboard: PropTypes.object.isRequired, // warning??
    // dashboard: PropTypes.object,
    // cities: PropTypes.arrayOf(PropTypes.object)
  // }
  componentWillMount() {
    this.setState({ loading: true });

  //   Dashboard.get(1).then(response => {
  //     if (response.ok) {
  //       this.setState({ loadingDashboard: false })
  //     }
  //   });

  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderView() {
    console.log(this.props)
    return (
        <div className="center">
          <h1> Dashboard </h1>
          <h1> Dashboard </h1>
          {
  // this.props.dashboard.cities.map(function(city, i){
  //                return (
  //                    <Time key={i}>{city}</Time>
  //                );
  // })
}

        </div>
      )
  }

  render() {
    // return this.state.loading ? this.renderLoading() : this.renderDashboard();
    // window a = this.props
    // console.log(this.props)
    return this.renderView();
  }

}



          // { this.state.time_zones.map(function(time, i){
          //      return (
          //          <Time key={i}>{time}</Time>
          //      );
          //  })}

