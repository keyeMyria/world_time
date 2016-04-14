import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { City } from 'models';
import { Dashboard } from 'models';

import Spinner from 'views/shared/spinner';
import SelectorList from 'views/main/selector_list';
import CityList from 'views/main/city_list';

@observer
export default class Page extends Component {

  state = {
    loading: false
  };

  componentWillMount() {
    this.setState({ loading: true });

    Promise.all( [ City.loadAll(), Dashboard.loadAll() ])
    .then((responses = []) => {
      this.setState({ loading: false });
    });
  }

  renderLoading() {
    return <Spinner />
  }

  renderView() {
    let dashboard = Dashboard.get(1);

    return (
      <div className="center ">
        <br />
        <SelectorList dashboard={ dashboard }/>
        <CityList dashboard={ dashboard } />
      </div>
    )
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderView();
  }

}



