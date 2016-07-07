import React from 'react'
import { Navbar, NavbarBrand, Grid } from 'react-bootstrap'
import Lesson from './Lesson';

const requireContext = require.context('../../lessons', true, /[0-9]+\/.+\..+$/)
const lessons = []
requireContext.keys().forEach( file => {
	const parts = file.split('/')
	const lessonNum = parts[1]
	const fileName = parts[2].split('.')[0]

	if (fileName === 'solution') return

	lessons[lessonNum] = Object.assign( {
		task: '',
		tests: []
	}, lessons[parts[1]], {
		[fileName]: requireContext(file)
	})
})

export default ({ children }) =>  (
	<Grid className="container" id="app">
		<Navbar>
			<NavbarBrand>Will You Teach Me To JS?</NavbarBrand>
		</Navbar>
		{lessons.map( (lesson, i ) => (
			<Lesson key={i} id={i} tests={lesson.tests} defaultCode={lesson.task}/>
		))}
	</Grid>
)
