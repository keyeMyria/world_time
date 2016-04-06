import { Selector }      from 'components/main/selector';
import { TimeZonesList } from 'components/main/time_zone_list';
import { observer }      from 'mobx-react';

@observer
export default class Page extends React.Component {

  componentWillMount() {
    this.setState({ loading: true });

    TimeZone.loadAll().then(response => {
      if (response.ok) {
        this.setState({ loading: false })
      }
    });
  }

  renderLoading() {
    return <h1>Loading...</h1>
  }

  renderTimeZones() {
    let timeZones = TimeZone.all();
    return (
      <div className="center">
        <h1> Main page </h1>
        <Selector timeZones={ timeZones } />
        <TimeZonesList timeZones={ timeZones } />
      </div>
    )
  }

  render() {
    return this.state.loading ? renderLoading() : renderTimeZones();
  }
}




