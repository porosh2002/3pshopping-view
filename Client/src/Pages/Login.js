import React, { Component } from 'react'
import Form from '../Components/Form/Form'
import '../Styles/Login.css'
class Login extends Component {
    FormValueVhange = e =>{
        console.log(e);
    }
    render() {
        return (
            <div className='LoginDiv'>
                <p className='FormHeader'>Login</p>
                <form className='LoginForm'>
                    <Form placeHolder='Email :' name='LoginEmail'/>
                    <Form placeHolder='password :' name='LoginPassword'/>
                </form>
            </div>
        )
    }
}

export default Login
