'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropModal = require('boron/DropModal');

var _DropModal2 = _interopRequireDefault(_DropModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = function (_React$Component) {
	_inherits(LandingPage, _React$Component);

	function LandingPage(props) {
		_classCallCheck(this, LandingPage);

		var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(LandingPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { id: 'landing-page', style: { maxWidth: "1440px", marginLeft: "auto", marginRight: "auto", overflow: "auto", height: "100%" } });
		}
	}]);

	return LandingPage;
}(_react2.default.Component);

;

var RegisterModal = function (_React$Component2) {
	_inherits(RegisterModal, _React$Component2);

	function RegisterModal(props) {
		_classCallCheck(this, RegisterModal);

		var _this2 = _possibleConstructorReturn(this, (RegisterModal.__proto__ || Object.getPrototypeOf(RegisterModal)).call(this, props));

		_this2.showModal = _this2.showModal.bind(_this2);
		_this2.hideModal = _this2.hideModal.bind(_this2);

		_this2.state = {
			email: ""
		};
		return _this2;
	}

	_createClass(RegisterModal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(np) {
			if (np && np.show && !this.props.show) {
				this.showModal();
			} else if (!np.show && this.props.show) {
				this.hideModal();
			}
		}
	}, {
		key: 'showModal',
		value: function showModal() {
			this.refs.modal.show();
		}
	}, {
		key: 'hideModal',
		value: function hideModal() {
			this.refs.modal.hide();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_DropModal2.default,
					{ ref: 'modal', onHide: this.props.hideRegisterModal },
					_react2.default.createElement(RegisterPage, { externalInvite: this.props.externalInvite })
				)
			);
		}
	}]);

	return RegisterModal;
}(_react2.default.Component);

;

var RegisterEarlyAccess = function (_React$Component3) {
	_inherits(RegisterEarlyAccess, _React$Component3);

	function RegisterEarlyAccess(props) {
		_classCallCheck(this, RegisterEarlyAccess);

		var _this3 = _possibleConstructorReturn(this, (RegisterEarlyAccess.__proto__ || Object.getPrototypeOf(RegisterEarlyAccess)).call(this, props));

		_this3.showModal = _this3.showModal.bind(_this3);
		_this3.hideModal = _this3.hideModal.bind(_this3);
		_this3.isMailValid = _this3.isMailValid.bind(_this3);
		_this3.changeEmail = _this3.changeEmail.bind(_this3);
		_this3.send = _this3.send.bind(_this3);
		_this3.state = {
			email: "",
			validEmail: false
		};
		return _this3;
	}

	_createClass(RegisterEarlyAccess, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(np) {
			if (np && np.show && !this.props.show) {
				this.showModal();
			} else if (!np.show && this.props.show) {
				this.hideModal();
			}
		}
	}, {
		key: 'showModal',
		value: function showModal() {
			this.refs.modal.show();
		}
	}, {
		key: 'hideModal',
		value: function hideModal() {
			this.refs.modal.hide();
		}
	}, {
		key: 'isMailValid',
		value: function isMailValid(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	}, {
		key: 'changeEmail',
		value: function changeEmail() {
			var _this4 = this;

			var email = this.refs.email.value;
			var validEmail = email && this.isMailValid(email);
			this.setState(function (prevState) {
				return {
					email: _this4.refs.email.value,
					validEmail: validEmail
				};
			});
			// if(validEmail){
			// 	firebase.database().ref('emails/' + EncodeServices.encode(email)).once("value", (snap) => {
			// 		this.setState((prevState) => ({
			//     mailTaken : !!snap.val()
			//   }));
			// 	}, (error) => {
			// 		console.log("error", error);
			// 	});
			// }
		}
	}, {
		key: 'send',
		value: function send() {
			ga('send', {
				hitType: 'event',
				eventCategory: "early access modal page",
				eventAction: "clicked on free early access",
				eventLabel: ""
			});
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (this.state.email && this.state.validEmail) {
				var code = this.props.generateAccessCode();
				firebase.database().ref("prospects").push({
					email: this.state.email,
					date: new Date().getTime(),
					code: code
				});
				this.props.sendPropsectMail(this.state.email, code);
				this.props.hideEarlyAccessModal();
				swal("Thank You", "We are glad to count you in !", "success");
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _this5 = this;

			if (this.props.show && !this.state.tippy) {
				this.setState({
					tippy: true
				}, function () {
					new Tippy('.tippyearlyaccess', {
						position: 'bottom',
						animation: 'shift',
						duration: 200,
						arrow: true
					});
					_this5.refs.email.focus();
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'early-access-modal-wrapper' },
				_react2.default.createElement(
					_DropModal2.default,
					{ ref: 'modal', onHide: this.props.hideEarlyAccessModal },
					_react2.default.createElement(
						'div',
						{ style: { color: "#424242" } },
						_react2.default.createElement(
							'h2',
							{ style: { textAlign: "center", paddingTop: "30px", paddingBottom: "30px" } },
							'Get Free Early Access'
						),
						_react2.default.createElement(
							'p',
							{ style: { paddingLeft: "50px", paddingRight: "50px" } },
							'Join us now and get an early access to Magnesia as well as a month as a premium user !'
						),
						',',
						_react2.default.createElement(
							'div',
							{ style: { width: "195px", marginLeft: "auto", marginRight: "auto" } },
							_react2.default.createElement('img', { style: { verticalAlign: "middle", maxWidth: "50px", marginRight: "auto", marginLeft: "auto", display: "inline-block" }, src: '../assets/images/eac-hourglass.svg' }),
							_react2.default.createElement(
								'div',
								{ style: { verticalAlign: "middle", display: "inline-block", fontSize: "25px", marginLeft: "40px", marginRight: "40px" } },
								'+'
							),
							_react2.default.createElement('img', { style: { verticalAlign: "middle", maxWidth: "50px", marginRight: "auto", marginLeft: "auto", display: "inline-block" }, src: '../assets/images/eac-diamond.svg' })
						),
						_react2.default.createElement(
							'div',
							{ style: { width: "265px", marginLeft: "auto", marginRight: "auto", fontSize: "14px", marginTop: "10px", marginBottom: "20px" } },
							_react2.default.createElement(
								'div',
								{ style: { textAlign: "center", verticalAlign: "middle", width: "50%", display: "inline-block" } },
								'Early Access'
							),
							_react2.default.createElement(
								'div',
								{ style: { textAlign: "center", verticalAlign: "middle", width: "50%", display: "inline-block" } },
								'Premium Month'
							)
						),
						_react2.default.createElement('input', { className: "reg-inp " + (this.state.validEmail ? "validated" : ""), ref: 'email', type: 'email', value: this.state.email, onChange: this.changeEmail, placeholder: 'Email Address' }),
						_react2.default.createElement(
							'div',
							{ className: 'eam-email-wrapper' },
							_react2.default.createElement(
								'div',
								{ style: { color: "#9C27B0", fontSize: "13px", marginTop: "-55px", marginRight: "30px", float: "right", display: this.state.validEmail ? "block" : "none" } },
								_react2.default.createElement(
									'span',
									{ className: 'eam-email-wrapper-inner' },
									'valid email'
								),
								' \u2714'
							),
							_react2.default.createElement(
								'div',
								{ style: { fontSize: "13px", marginTop: "-55px", marginRight: "30px", float: "right", display: this.state.validEmail ? "none" : "block" } },
								_react2.default.createElement(
									'span',
									{ className: 'eam-email-wrapper-inner' },
									'invalid email'
								),
								' \u2715'
							)
						),
						_react2.default.createElement(
							'div',
							{ onClick: this.send },
							_react2.default.createElement(
								'div',
								{ title: 'Please enter a valid email address', className: 'tippyearlyaccess disabled-fac-button', onClick: this.props.showEarlyAccessModal, style: { display: this.state.validEmail ? "none" : "block", border: "1px solid #9C27B0", padding: "10px", letterSpacing: "1px", cursor: "pointer", fontWeight: "100", color: "#9C27B0", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginBottom: "50px", fontSize: "16px", width: "250px", borderRadius: "4px" } },
								'\u276F Free Early Access'
							),
							_react2.default.createElement(
								'div',
								{ title: 'Claim your early acces code !', className: 'tippyearlyaccess', onClick: this.props.showEarlyAccessModal, style: { display: this.state.validEmail ? "block" : "none", border: "1px solid #9C27B0", padding: "10px", letterSpacing: "1px", cursor: "pointer", fontWeight: "100", color: "#9C27B0", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginBottom: "50px", fontSize: "16px", width: "250px", borderRadius: "4px" } },
								'\u276F Free Early Access'
							)
						)
					)
				)
			);
		}
	}]);

	return RegisterEarlyAccess;
}(_react2.default.Component);

;

exports.default = LandingPage;
