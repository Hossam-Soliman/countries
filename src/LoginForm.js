import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {loggingUser} from './store/action'

class LoginForm extends Component {

    state = {
        email:'',
        password:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("state", this.state)
        this.props.loggingUser(this.state)
        this.props.history.push('/index')
    }


   render(){
        return(
            <div className="myForm">   
                <form onSubmit={this.handleSubmit}>
                    <input className="email" id = "email" type="text" placeholder="email" onChange = {this.handleChange} required></input>
                    <input className="password" id = "password" type="password" placeholder="password" onChange = {this.handleChange} required></input>
                    <button>LOGIN</button>
                    
                </form> 
            </div>  
        )
   }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
    loggingUser: (user) => dispatch({type: 'LOGIN', data: user})
    }
  }

export default connect(null, mapDispatchToProps) (LoginForm)