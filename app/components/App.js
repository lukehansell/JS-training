import React from 'react'
import { Navbar, NavbarBrand, Grid } from 'react-bootstrap'
import Lesson from './Lesson';

const requireContext = require.context('../../lessons', true, /[0-9]+\/.+\..+$/)
const lessons = []
requireContext.keys().forEach( file => {
	const parts = file.split('/')
	lessons[parts[1]] = Object.assign( {
		task: '',
		tests: []
	}, lessons[parts[1]], {
		[parts[2].split('.')[0]]: requireContext(file)
	})
})

export default ({ children }) =>  (
	<Grid className="container" id="app">
		<Navbar>
			<NavbarBrand>Will You Teach Me To JS?</NavbarBrand>
		</Navbar>
		{lessons.map( (lesson, i ) => (
			<Lesson key={i} id={i+1} tests={lesson.tests} defaultCode={lesson.task}/>
		))}
	</Grid>
)
