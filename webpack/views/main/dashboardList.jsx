import React, { Component } from 'react';
import { observer }         from 'mobx-react';
import { Dashboard }             from 'models';
@observer

class City extends Component {

 handleClick() {
    console.log(this)
    this.setState({ show: false });
  }

  // destroyCity(e) {
  // }

  state = {
    show: true
  }

  renderEmpty() { return <div /> }

  renderView() {
    return(
      <div className="colums">
        <div className="small-4 columns"> { this.props.children.text } </div>
        <div className="small-4 columns"> { this.props.children.hour } </div>
        <div className="small-4 columns">
          <button onClick={this.handleClick.bind(this)} className="button"> Destroy </button>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }

  render() {
    return this.state.show ? this.renderView() : this.renderEmpty()
  }
}

export default class DashboardList extends Component {

   componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
   }

  componentWillMount() {
    this.setState({ loading   : true });
  }

  renderLoading() {
    return <h1 className="center">Loading...</h1>
  }

  renderView() {
    console.log(this.props.cities)

    return (
        <div className="center">
          <h1> List Current City </h1>
          {
              this.props.cities.map(function(city, i){
               return ( <City key={i}>{city}</City> )
              })
          }
        </div>
    )
  }

  render() {
    // return this.state.loading ? this.renderLoading() : this.renderView();
    return this.renderView();
  }

}

