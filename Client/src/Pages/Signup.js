import React, { Component } from 'react'
import Button from '../Components/Button/Button';
import Form from '../Components/Form/Form'
import '../Styles/Login.css'
class Login extends Component {
    FormValueVhange = e =>{
        console.log(e);
    }
    render() {
        return (
            <div className='LoginDiv'>
                <p className='FormHeader'>Signup</p>
                <form className='LoginForm'>
                    <p className='FormLabel'>Name : </p>
                    <Form minlen='2' maxlen='15' placeHolder='name here' type='text' name='LoginEmail'/>
                    <p className='FormLabel'>Email : </p>
                    <Form minlen='12' maxlen='50' placeHolder='email here' type='email' name='LoginEmail'/>
                    <p className='FormLabel'>password : </p>
                    <Form minlen='7' maxlen='150' placeHolder='password' type='password' name='LoginPassword'/>
                    <p className='FormLabel'>confirm password : </p>
                    <Form minlen='7' maxlen='150' placeHolder='password' type='password' name='LoginPassword'/>
                    <Button value='Create Account'/>
                </form>
            </div>
        )
    }
}

export default Login
