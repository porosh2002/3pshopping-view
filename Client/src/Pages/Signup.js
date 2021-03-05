import React, { Component } from 'react'
import Button from '../Components/Button/Button';
import {Link} from 'react-router-dom'
import Form from '../Components/Form/Form'
import '../Styles/Login.css'
import Modal from '../Components/Modal/Modal'
class Login extends Component {
    state={
        ModalOpen:true
    }
    CloseModal=()=>{
        this.setState({ModalOpen:false})
    }
    FormValueVhange = e =>{
        console.log(e);
    }
    render() {
        const {ModalOpen} = this.state;
        const ModalStyle = ModalOpen ? null : ({display:"none"})
        return (
            <div className='LoginDiv'>
                <p className='FormHeader'>Community Signup</p>
                <form className='LoginForm'>
                    <p className='FormLabel'>Name : </p>
                    <Form minlen='2' maxlen='15' placeholder='name here' type='text' name='LoginEmail'/>
                    <p className='FormLabel'>Email : </p>
                    <Form minlen='12' maxlen='50' placeholder='email here' type='email' name='LoginEmail'/>
                    <p className='FormLabel'>Mobile Number : </p>
                    <Form minlen='11' maxlen='20' placeholder='mobile number here' type='text' name='LoginEmail'/>
                    <div className='checkBoxSignup'>
                    <input required type='checkbox'/>
                    <p>
By clicking Register, you agree to our <Link to='#'>Terms and Conditions</Link></p>
                    </div>
                    <Button value='Apply For Community Account'/>
                </form>
                <div style={ModalStyle}>
                <Modal ModalClick={this.CloseModal} Text={"Only Create Account If you want to join as an Admin"}/>
                </div>
            </div>
        )
    }
}

export default Login
