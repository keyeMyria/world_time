Note = React.createClass
  render: ->
    <div>
      <h1 className="center"> This is React </h1>
    </div>

$(document).ready ->
  ReactDOM.render(
    <Note />
    document.getElementById('main')
  )
