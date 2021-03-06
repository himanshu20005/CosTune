import React from "react";
import { Link } from 'react-router-dom';
class ControlledPopup extends React.Component {
            constructor(props) {
                super(props);
                this.state = { open: false };
                this.openModal = this.openModal.bind(this);
                this.closeModal = this.closeModal.bind(this);
                this.state={
                    username:"",
                    password:"",
                }
                this.handleSubmit=this.handleSubmit.bind(this)
            }
            openModal() {
            this.setState({ open: true });
            }
            closeModal() {
            this.setState({ open: false });
            }
    
            namehandler=(event)=>{
                this.setState({
                    username: event.target.value
                })
            }
            passwordhandler=(event)=>{
                this.setState({
                    password: event.target.value
                })
            }
            handleSubmit=(event)=>{
                
                console.log(this.state);
                this.setState({
                    username:"",
                    password:"",
                })
            event.preventDefault()
            }
        
        
            render() {
            return (
                <div>
                
                   
                    <div className="box">
                        <div className="leftbox">
                        <div className="black" />
                        <div className="image" />
                        <div className="innerbox">
                            <form onSubmit={this.handleSubmit}>
                                <div className="text"><h4><span>LOGIN</span></h4>
                                    <div className="inputbox">
                                        <input className="inputs" id="username" type="text" value={this.state.username} onChange={this.namehandler}placeholder="Username" />
                                    </div>
                                    <div className="inputbox">
                                        <input className="inputs" id="password" type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" />
                                    </div>
                                    <input className="btn" type="submit" value="Submit" />
                                    <div className="othertext">
                                    <Link to="/signup/">Haven't Registered Yet? Register</Link>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    
                
                </div>
            );
    }
  }

  export default ControlledPopup;