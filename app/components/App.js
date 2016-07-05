import React from 'react'
import { Navbar, NavbarBrand, Grid } from 'react-bootstrap'
import Lesson from './Lesson';

const lessons = [{
	defaultCode: require('text!../../lessons/1/task.txt'),
	tests: require('../../lessons/1/tests')
}, {
	defaultCode: require('text!../../lessons/2/task.txt'),
	tests: require('../../lessons/2/tests')
}, {
	defaultCode: require('text!../../lessons/3/task.txt'),
	tests: require('../../lessons/3/tests')
}, {
	defaultCode: require('text!../../lessons/4/task.txt'),
	tests: require('../../lessons/4/tests')
}, {
	defaultCode: require('text!../../lessons/5/task.txt'),
	tests: require('../../lessons/5/tests')
}]

export default ({ children }) =>  (
	<Grid className="container" id="app">
		<Navbar>
			<NavbarBrand>Will You Teach Me To JS?</NavbarBrand>
		</Navbar>
		{lessons.map( (lesson, i ) => (
			<Lesson key={i} id={i+1} tests={lesson.tests} defaultCode={lesson.defaultCode}/>
		))}
	</Grid>
)
