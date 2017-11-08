import React from 'react'

import Modal from 'boron/DropModal';

class LandingPage extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    };
	}

	render() {
		return (
			<div id="landing-page" style={{maxWidth:"1440px", marginLeft:"auto", marginRight:"auto", overflow:"auto", height:"100%"}}>
				
			</div>
		);
	}
};

class RegisterModal extends React.Component {

	constructor(props) {
	    super(props);
	   	this.showModal = this.showModal.bind(this);
	   	this.hideModal = this.hideModal.bind(this);

	    this.state = {
	    	email : ""
	    };
	}

	componentWillReceiveProps(np){
		if(np && np.show && !this.props.show){
			this.showModal();
		} else if(!np.show && this.props.show){
			this.hideModal();
		}
	}
    
    showModal(){
        this.refs.modal.show();
    }

    hideModal(){
        this.refs.modal.hide();
    }

    render() {
        return (
            <div>
                <Modal ref="modal" onHide={this.props.hideRegisterModal}>
                    <RegisterPage externalInvite={this.props.externalInvite}/>
                </Modal>
            </div>
        );
    }
};

class RegisterEarlyAccess extends React.Component {

	constructor(props) {
	    super(props);
	   	this.showModal = this.showModal.bind(this);
	   	this.hideModal = this.hideModal.bind(this);
	   	this.isMailValid = this.isMailValid.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.send = this.send.bind(this);
	    this.state = {
	    	email : "",
	    	validEmail : false
	    };
	}

	componentWillReceiveProps(np){
		if(np && np.show && !this.props.show){
			this.showModal();
		} else if(!np.show && this.props.show){
			this.hideModal();
		}
	}
    
    showModal(){
        this.refs.modal.show();
    }

    hideModal(){
        this.refs.modal.hide();
    }

    isMailValid(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

    changeEmail (){
		
    	var email = this.refs.email.value;
    	var validEmail = email && this.isMailValid(email);
		this.setState((prevState) => ({
	      email: this.refs.email.value,
	      validEmail: validEmail
	    }));
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

	send(){
		ga('send', {
			hitType: 'event',
			eventCategory: "early access modal page",
			eventAction: "clicked on free early access",
			eventLabel: ""
		});
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if(this.state.email && this.state.validEmail){
    		var code = this.props.generateAccessCode();
    		firebase.database().ref("prospects").push({
    			email : this.state.email,
    			date : new Date().getTime(),
    			code : code
    		});
    		this.props.sendPropsectMail(this.state.email, code);
    		this.props.hideEarlyAccessModal();
    		swal("Thank You", "We are glad to count you in !", "success");
    	}
	}

	componentDidUpdate(){
		if(this.props.show && !this.state.tippy){
			this.setState({
				tippy : true
			}, ()=>{
				new Tippy('.tippyearlyaccess', {
				    position: 'bottom',
				    animation: 'shift',
				    duration: 200,
				    arrow: true
				})
				this.refs.email.focus();
			});
		}
	}

    render() {
        return (
            <div id="early-access-modal-wrapper">
                <Modal ref="modal" onHide={this.props.hideEarlyAccessModal}>
                	<div style={{color:"#424242"}}>
	                	<h2 style={{textAlign:"center", paddingTop: "30px", paddingBottom: "30px"}}>Get Free Early Access</h2>
	                	<p style={{paddingLeft:"50px", paddingRight:"50px"}}>Join us now and get an early access to Magnesia as well as a month as a premium user !</p>,

	                	<div style={{width:"195px", marginLeft: "auto", marginRight:"auto"}}>
		                	<img style={{verticalAlign:"middle", maxWidth:"50px", marginRight:"auto", marginLeft:"auto", display:"inline-block"}} src="../assets/images/eac-hourglass.svg"/>
		                	<div style={{verticalAlign:"middle", display : "inline-block", fontSize:"25px", marginLeft:"40px", marginRight:"40px"}}>+</div>
		                	<img style={{verticalAlign:"middle", maxWidth:"50px", marginRight:"auto", marginLeft:"auto", display:"inline-block"}} src="../assets/images/eac-diamond.svg"/>
	                	</div>
	                	<div style={{width:"265px", marginLeft: "auto", marginRight:"auto", fontSize:"14px", marginTop : "10px", marginBottom : "20px"}}>
	                		<div style={{textAlign:"center", verticalAlign:"middle", width : "50%", display:"inline-block"}}>Early Access</div>
	                		<div style={{textAlign:"center", verticalAlign:"middle", width : "50%", display:"inline-block"}}>Premium Month</div>
	                	</div>
	                	
	                    <input className={"reg-inp " + (this.state.validEmail ? "validated" : "")} ref="email" type="email" value={this.state.email} onChange={this.changeEmail} placeholder="Email Address"/>
	                    <div className="eam-email-wrapper">
	                    	<div style={{color:"#9C27B0", fontSize:"13px", marginTop: "-55px", marginRight: "30px", float:"right", display : (this.state.validEmail ? "block" : "none")}}>
	                    		<span className="eam-email-wrapper-inner">valid email</span> &#10004;
	                    	</div>
	                    	<div style={{fontSize:"13px", marginTop: "-55px", marginRight: "30px", float:"right", display : (this.state.validEmail ? "none" : "block")}}>
	                    		<span className="eam-email-wrapper-inner">invalid email</span> &#10005;
	                    	</div>
	                    </div>
	                    <div onClick={this.send}>
		                    <div title="Please enter a valid email address" className="tippyearlyaccess disabled-fac-button" onClick={this.props.showEarlyAccessModal} style={{display:(this.state.validEmail ? "none" : "block"), border:"1px solid #9C27B0", padding:"10px", letterSpacing:"1px", cursor:"pointer", fontWeight:"100", color:"#9C27B0", textAlign:"center", marginLeft:"auto", marginRight:"auto", marginBottom:"50px", fontSize:"16px", width : "250px", borderRadius : "4px"}}>
								&#10095; Free Early Access
							</div>
							<div title="Claim your early acces code !" className="tippyearlyaccess" onClick={this.props.showEarlyAccessModal} style={{display:(this.state.validEmail ? "block" : "none"), border:"1px solid #9C27B0", padding:"10px", letterSpacing:"1px", cursor:"pointer", fontWeight:"100", color:"#9C27B0", textAlign:"center", marginLeft:"auto", marginRight:"auto", marginBottom:"50px", fontSize:"16px", width : "250px", borderRadius : "4px"}}>
								&#10095; Free Early Access
							</div>
						</div>
                    </div>
                </Modal>
            </div>
        );
    }
};

export default LandingPage;