// main.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import ReactDataGrid from 'react-data-grid';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
//import Button from 'react-bootstrap/lib/Button';
// or
import { Button } from 'react-bootstrap';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

require('./main.css');

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

	onBreakpointChange(b) {

		console.log('onBreakpointChange', b);
	}

	onLayoutChange(layout, layouts) {
		console.log('onLayoutChange', layout, layouts);
	}

	render() {

		var layoutLG = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 1, maxW: 3},
			{i: 'c', x: 2, y: 0, w: 1, h: 2}
		];

		var layoutMD = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 4, y: 0, w: 1, h: 2}
		];

		var layoutSM = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 4, y: 0, w: 1, h: 2}
		];

		var layoutXS = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
			{i: 'c', x: 2, y: 0, w: 1, h: 2}
		];

		var layoutXXS = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 0, y: 1, w: 3, h: 2, minW: 2, maxW: 2},
			{i: 'c', x: 0, y: 2, w: 1, h: 2}
		];

		var layouts = {lg: layoutLG, md: layoutMD, sm: layoutSM, xs: layoutXS, xxs: layoutXXS};

		return (
			<div>
				<ResponsiveReactGridLayout
			        className="layout"
					breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
					cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 1}}
					rowHeight={30}
					layouts={layouts}
					onBreakpointChange={this.onBreakpointChange}
					onLayoutChange={this.onLayoutChange}
					measureBeforeMount={true}
					useCSSTransforms={true}
					isResizable={false}
					margin={[10,10]}
					>
					<div className="layout" key={'a'}> aaaa </div>
					<div className="layout" key={'b'}> bbbb </div>
					<div className="layout" key={'c'}> cccc </div>
				</ResponsiveReactGridLayout>
				<ReactGridLayout
					style={{marginTop:"10px"}}
					className="layout"
					layout={layoutLG} 
					cols={12} 
					rowHeight={30} 
					width={1200}>
					<div className="layout" key={'a'}>b</div>
					<div className="layout" key={'b'}>c</div>
					<div className="layout" key={'c'}> Now Time : {this.state.date} <Button/></div>
				</ReactGridLayout>
			</div>
		);
	}
}

export default Main;

ReactDOM.render(
	<Main/>,
	document.getElementById('example')
);
