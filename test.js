// main.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import ReactDataGrid from 'react-data-grid';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
//import Button from 'react-bootstrap/lib/Button';
// or
import { ButtonToolbar, Button, DropdownButton, SplitButton, MenuItem } from 'react-bootstrap';

require('./css/main.css');

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: "Time now : "
		};

		this.timeId = null;
		this.layout = null;
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

		//console.log('onBreakpointChange', b);
	}

	onLayoutChange(layout, layouts) {
		console.log('onLayoutChange', layout, layouts, 'this.layout ', this.layout );
		this.layout = Object.assign({}, layout, {});
	}

	onResize(layout/*: Layout*/, oldItem/*: LayoutItem*/, newItem/*: LayoutItem*/, placeholder/*: LayoutItem*/, e/*: MouseEvent*/, element/*: HTMLElement*/) {
		//this.layout = Object.assign({}, layout, {});
		//console.log('onResize', 'layout:', layout, 'oldItem:', oldItem, 'newItem:', newItem, 'placeholder:', placeholder, 'e:', e, 'element:', element);
		//element.innerHTML = 'onResize: [' + newItem.x + ', ' + newItem.y + ']';
	}

	onResizeStop(layout/*: Layout*/, oldItem/*: LayoutItem*/, newItem/*: LayoutItem*/, placeholder/*: LayoutItem*/, e/*: MouseEvent*/, element/*: HTMLElement*/) {
		//this.layout = Object.assign({}, layout, {});
		//console.log('onResizeStop', 'layout:', layout, 'oldItem:', oldItem, 'newItem:', newItem, 'placeholder:', placeholder, 'e:', e, 'element:', element);
		//element.innerHTML = 'onResizeStop: [' + newItem.x + ', ' + newItem.y + ']';
	}

	onDragStart(layout/*: Layout*/, oldItem/*: LayoutItem*/, newItem/*: LayoutItem*/, placeholder/*: LayoutItem*/, e/*: MouseEvent*/, element/*: HTMLElement*/) {
		this.layout = Object.assign({}, layout, {});
		//console.log('onDragStart', 'layout:', layout, 'oldItem:', oldItem, 'newItem:', newItem, 'placeholder:', placeholder, 'e:', e, 'element:', element);
		element.innerHTML = 'start: [' + oldItem.x + ', ' + oldItem.y + ']';
	}

	onDragStop(layout/*: Layout*/, oldItem/*: LayoutItem*/, newItem/*: LayoutItem*/, placeholder/*: LayoutItem*/, e/*: MouseEvent*/, element/*: HTMLElement*/) {
		//console.log('onDragStop', 'layout:', layout, 'oldItem:', oldItem, 'newItem:', newItem, 'placeholder:', placeholder, 'e:', e, 'element:', element);
		element.innerHTML = 'stop: [' + newItem.x + ', ' + newItem.y + ']';
	}

	onDrag(layout/*: Layout*/, oldItem/*: LayoutItem*/, newItem/*: LayoutItem*/, placeholder/*: LayoutItem*/, e/*: MouseEvent*/, element/*: HTMLElement*/) {
		//console.log('onDrag', 'layout:', layout, 'oldItem:', oldItem, 'newItem:', newItem, 'placeholder:', placeholder, 'e:', e, 'element:', element);
		element.innerHTML = 'drag: [' + placeholder.x + ', ' + placeholder.y + ']';
	}

	render() {

		var layoutLG = [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 1, maxW: 3, isResizable: false, isDraggable: true},
			{i: 'c', x: 2, y: 0, w: 5, h: 2, isResizable: true, isDraggable: false}
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
					ref="respLayout"
			        className="wnd-border"
					breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
					cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 1}}
					rowHeight={30}
					layouts={layouts}
					measureBeforeMount={true}
					useCSSTransforms={true}
					isResizable={true}
					margin={[10,10]}
					containerPadding={[5, 5]}
					verticalCompact={true}
					onBreakpointChange={(layout, oldItem, newItem, placeholder, e, element) => this.onBreakpointChange(layout, oldItem, newItem, placeholder, e, element)}
					onLayoutChange={(layout, oldItem, newItem, placeholder, e, element) => this.onLayoutChange(layout, oldItem, newItem, placeholder, e, element)}
					onDragStart={(layout, oldItem, newItem, placeholder, e, element) => this.onDragStart(layout, oldItem, newItem, placeholder, e, element)}
					onDragStop={(layout, oldItem, newItem, placeholder, e, element) => this.onDragStop(layout, oldItem, newItem, placeholder, e, element)}
					onDrag={(layout, oldItem, newItem, placeholder, e, element) => this.onDrag(layout, oldItem, newItem, placeholder, e, element)}
					onResize={(layout, oldItem, newItem, placeholder, e, element) => this.onResize(layout, oldItem, newItem, placeholder, e, element)}
					onResizeStop={(layout, oldItem, newItem, placeholder, e, element) => this.onResizeStop(layout, oldItem, newItem, placeholder, e, element)}
					>
					<div className="wnd-border" key={'a'}> aaaa </div>
					<div className="wnd-border" key={'b'}> bbbb </div>
					<div className="wnd-border" key={'c'}> cccc </div>
				</ResponsiveReactGridLayout>
				<ReactGridLayout
					style={{marginTop:"10px"}}
					className="wnd-border"
					layout={layoutLG} 
					cols={12} 
					rowHeight={30} 
					width={1200}
					containerPadding={[5, 5]}
					>
					<div className="wnd-border" key={'a'}>b</div>
					<div className="wnd-border" key={'b'}>c</div>
					<div className="wnd-border" key={'c'}> Now Time : {this.state.date} 
						<ButtonToolbar>
							<Button bsStyle="primary" bsSize="small">Primary</Button>
							<Button bsStyle="primary" bsSize="small" disabled>Primary2</Button>
							<DropdownButton bsStyle="primary" bsSize="small" title="Dropdown" id="bg-nested-dropdown">
								<MenuItem eventKey="1">Dropdown link</MenuItem>
								<MenuItem eventKey="2">Dropdown link</MenuItem>
							</DropdownButton>
							<SplitButton bsStyle="primary" bsSize="small" title="SplitButton" id="bg-nested-dropdown">
								<MenuItem eventKey="1">Dropdown link</MenuItem>
								<MenuItem eventKey="2">Dropdown link</MenuItem>
							</SplitButton>
						</ButtonToolbar>
					</div>
				</ReactGridLayout>
			</div>
		);
	}
}

export default Main;

ReactDOM.render(
	<Main/>,
	document.getElementById('mainDiv')
);
