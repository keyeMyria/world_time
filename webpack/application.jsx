import React from 'react';
// import ReactDOM from 'react-dom';

console.log("Hello world!");

class TestComponent extends React.Component {
	render() {
		return(
			<div>test</div>
		)
	}
}

ReactDOM.render(<TestComponent />, document.getElementById('main'));
