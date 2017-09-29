import React 										  		  from 'react'
import { render } 											  from 'react-dom'
import { createStore, combineReducers } 					  from 'redux'
import { Provider } 										  from 'react-redux'
import { Router, Route, DefaultRoute, Link, browserHistory }  from 'react-router'

import usersReducers from '../reducers/users'
import mapsReducers from '../reducers/maps'

import LandingPage  from './landing'
import RootPage		from './root'

const store = createStore(combineReducers({
  user : usersReducers,
  maps : mapsReducers
}));

render((
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route component={RootPage}>
	    	<Route path="/" component={LandingPage}/>
	    	<Route path="/landing" component={LandingPage}/>
			<Route path="*" component={landing}/>
	    </Route>
	  </Router>
  	</Provider>
), document.getElementById('root'))

