import React, { Component } from 'react'
import {URL} from '../serverUrl';
import { connect } from "react-redux";
import { adminID } from "../Redux/Admin/actions";
 class AdminLogin extends Component {
    state={
        name:'',
        pass:''
    }
    submit=(event)=>{
        const {name,pass} = this.state;
        event.preventDefault()
        fetch(`${URL}api/adminCheck`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,pass
            })
        })
        .then(res=>{
            if(res.status === 200){
                this.props.adminID(true)
            }
        })
    }
    render() {
        return (
            <div>
                <p>LogIn to Admin</p>
                <form onSubmit={this.submit}>
                <input onChange={(e)=>{this.setState({name:e.target.value})}} placeholder='name' type='password'></input>
                <input onChange={(e)=>{this.setState({pass:e.target.value})}} placeholder='password' type='password'></input>
                <input type='submit'></input>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        adminID: (user) => dispatch(adminID(user)),
    };
  };
  export default connect(null, mapDispatchToProps)(AdminLogin);