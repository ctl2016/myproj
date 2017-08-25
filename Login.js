import React, { Component } from 'react';
//import ReactDataGrid from 'react-data-grid';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
//import Button from 'react-bootstrap/lib/Button';
// or
import { ButtonToolbar, Button, DropdownButton, SplitButton, MenuItem } from 'react-bootstrap';

import styles from './css/login.css';

console.log('styles:', styles);

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {

		var layoutLG = [
			{i: 'a', x: 6, y: 0, w: 1, h: 2, static: false},
			{i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 1, maxW: 3, isResizable: false, isDraggable: true},
			{i: 'c', x: 2, y: 0, w: 1, h: 2, isResizable: true, isDraggable: false}
		];

		var layoutMD = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
			{i: 'b', x: 7, y: 0, w: 1, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 4, y: 0, w: 1, h: 2}
		];

		var layoutSM = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
			{i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 7, y: 0, w: 1, h: 2}
		];

		var layoutXS = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
			{i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 2, y: 0, w: 1, h: 2}
		];

		var layoutXXS = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
			{i: 'b', x: 0, y: 1, w: 1, h: 2, minW: 2, maxW: 2},
			{i: 'c', x: 0, y: 2, w: 1, h: 2}
		];

		var layouts = {lg: layoutLG, md: layoutMD, sm: layoutSM, xs: layoutXS, xxs: layoutXXS};

		return (
			<ResponsiveReactGridLayout
				className='wnd-border sizeFill'
				style={styles.sizeFill}
				breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
				cols={{lg: 13, md: 10, sm: 6, xs: 4, xxs: 1}}
				rowHeight={50}
				layouts={layouts}
				measureBeforeMount={true}
				useCSSTransforms={true}
				isResizable={true}
				margin={[5,5]}
				containerPadding={[5, 5]}
				verticalCompact={true}
			>
				<div className="wnd-border" key={'a'}> aaaa </div>
				<div className="wnd-border" key={'b'}> bbbb </div>
				<div className="wnd-border" key={'c'}> cccc </div>
			</ResponsiveReactGridLayout>
		);
	}
}

export default Login;
