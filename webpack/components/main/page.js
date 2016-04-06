import { Selector }    from 'components/main/selector';
import  TimeZonesList  from 'components/main/time_zone_list';

class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="center">
          <h1> Main page </h1>
          <Selector />
          <TimeZonesList />
        </div>
      )
  }
}



export { Page }

