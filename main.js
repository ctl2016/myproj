// main.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: "Time now : "
		};

		this.timeId = null;
	}

	componentDidMount() {
		this.hello();
	}

	componentWillUnmount() {
		clearInterval(this.timeId);
	}

	sleep(time) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, time);
		})
	};

	async hello() {

		await this.sleep(2000);

		this.setState({date:new Date().toLocaleTimeString()});

		await this.sleep(5000);

		this.setState({date:new Date().toLocaleTimeString()});

		this.timeId = setInterval(() => {
			this.setState({date:new Date().toLocaleTimeString()});
		}, 1000);

	}

	render() {

		return (
			<div> Now Time : {this.state.date} </div>
		);
	}
}

export default Main;

ReactDOM.render(
	<Main/>,
	document.getElementById('example')
);
