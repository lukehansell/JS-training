import { default as React, Component } from 'react'
import { Navbar, Panel, Col, Input } from 'react-bootstrap'

export default class App extends Component {

	constructor() {
		super(arguments)
		this.state = {
		}
	}

	render() {
		return (
			<div className="container" id="app">
				<Navbar brand="example" fixedTop />
				<Col xs={12} sm={4}>
					three
				</Col>
				<Col xs={12} sm={6}>
					<Panel header="column" >
					</Panel>
				</Col>
				<Col xs={12} sm={2}>
					layout
				</Col>
			</div>
		)
	}
}