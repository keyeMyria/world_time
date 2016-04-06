export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu" >
              <li className="menu-text"> World Time </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu" >
              <button className="button"> Login </button>
            </ul>
          </div>
        </div>
      )
  }
}


