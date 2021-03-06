'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _users = require('../reducers/users');

var _users2 = _interopRequireDefault(_users);

var _maps = require('../reducers/maps');

var _maps2 = _interopRequireDefault(_maps);

var _landing = require('./landing');

var _landing2 = _interopRequireDefault(_landing);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
		user: _users2.default,
		maps: _maps2.default
}));

(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
				_reactRouter.Router,
				{ history: _reactRouter.browserHistory },
				_react2.default.createElement(
						_reactRouter.Route,
						{ component: _root2.default },
						_react2.default.createElement(_reactRouter.Route, { path: '/', component: _landing2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/landing', component: _landing2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '*', component: landing })
				)
		)
), document.getElementById('root'));
