import React, { Component } from 'react'
import Button from '../Components/Button/Button';
import {Link} from 'react-router-dom'
import Form from '../Components/Form/Form'
import '../Styles/Login.css'
import isEmail from 'validator/lib/isEmail'
import Modal from '../Components/Modal/Modal'
class Login extends Component {
    state={
        ModalOpen:false,
        SuccesssMessage:false,
        name:null,
        email:null
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        const {name,email} = this.state;
        // Generate Password and Send to DB
        if(isEmail(email)){
            console.log(name,email);
        }
    }
    CloseModal=()=>{
        this.setState({ModalOpen:false})
    }
    HandleClick=()=>{
        this.props.history.push('/')
    }
    FormValueVhange = e =>{
        const {name,value} = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const {ModalOpen,SuccesssMessage} = this.state;
        const ModalStyle = ModalOpen ? null : ({display:"none"})
        const SuccessStyle = SuccesssMessage ? null : ({display:"none"})
        return (
            <div className='LoginDiv'>
                <p className='FormHeader'>Community Signup</p>
                <form onSubmit={this.onFormSubmit} className='LoginForm'>
                    <p className='FormLabel'>Full Name : </p>
                    <Form onChange={this.FormValueVhange} minLength='2' maxLength='30' placeholder='full name here' type='text' name='name'/>
                    <p className='FormLabel'>Email : </p>
                    <Form onChange={this.FormValueVhange} minLength='12' maxLength='50' placeholder='valid email here' type='email' name='email'/>
                    <div className='checkBoxSignup'>
                    <input required type='checkbox'/>
                    <p>
By clicking Register, you agree to our <Link to='#'>Terms and Conditions</Link></p>
                    </div>
                    <Button value='Apply For Community Account'/>
                    <Link style={{color:"#343a40",fontWeight:"600",fontSize:"18px"}} to='/community/login'>Login</Link>
                </form>
                <div style={SuccessStyle}>
                <Modal ModalClick={this.HandleClick} Text={"We will Contact you via Email as soon as possible"}/>
                </div>
                <div style={ModalStyle}>
                <Modal ModalClick={this.CloseModal} Text={"Only Create Account If you want to join as an Admin"}/>
                </div>
            </div>
        )
    }
}

export default Login
