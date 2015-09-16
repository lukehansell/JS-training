import React from 'react'
import Router from 'react-router'
import routes from './router/routes'

Router.run(routes, Router.HistoryLocation, (Handler) => {
	React.render(<Handler />, document.getElementById('app-container'))
})
