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
		<div>
			<p>
				Welcome to the HX JS IP test. If you don't know what any of those acronyms mean then you're probably in the wrong place.
			</p>
			<p>
				Below are a set of exercises for you to complete. Each example provides instructions and a space for you to write your code. The tests on the right
				hand side will run automatically when you change the code in the TDD style. Any output to <code>console.log</code> will be output in the "Console" space.
			</p>
			<p>
				Your job is to make all the test pass. A test is passing when it turns green. Good luck!
			</p>
		</div>
		{lessons.map( (lesson, i ) => (
			<Lesson key={i} id={i} tests={lesson.tests} defaultCode={lesson.task}/>
		))}
		<p>
			The code for these tests (including the solutions) is available on <a href="https://github.com/lukehansell/JS-training" target="_blank">GitHub</a>
		</p>
	</Grid>
)
