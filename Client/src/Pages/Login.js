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
                <p className='FormHeader'>Login</p>
                <form className='LoginForm'>
                    <p className='FormLabel'>Email : </p>
                    <Form minlen='12' maxlen='50' placeholder='email here' type='email' name='LoginEmail'/>
                    <p className='FormLabel'>password : </p>
                    <Form minlen='12' maxlen='50' placeholder='password' type='password' name='LoginPassword'/>
                    <Button value='Login'/>
                </form>
            </div>
        )
    }
}

export default Login
