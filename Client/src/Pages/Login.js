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
                    <p className='FormLabel'>Email : </p>
                    <Form placeHolder='email here' name='LoginEmail'/>
                    <p className='FormLabel'>password : </p>
                    <Form placeHolder='password' name='LoginPassword'/>
                </form>
            </div>
        )
    }
}

export default Login
