// main.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './login';

require('./css/main.css'); // className="class"
// or import styles from './css/main.css'; // style={styles.entry}

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	onLoginSuccess() {
	}

	onLoginErr() {
	}

	render() {

		return (
			<Login
				onSuccess={() => this.onLoginSuccess()}
				onLoginErr={() => this.onLoginErr()}
			/>
		);
	}
}

export default Main;

ReactDOM.render(
	<Main/>,
	document.getElementById('mainDiv')
);
