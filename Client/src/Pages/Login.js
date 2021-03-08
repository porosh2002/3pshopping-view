import React, { Component } from 'react'
import Button from '../Components/Button/Button';
import Form from '../Components/Form/Form'
import '../Styles/Login.css'
import axios from 'axios'
import {URL} from '../serverUrl'
import isEmail from "validator/lib/isEmail";
import Modal from "../Components/Modal/Modal";
class Login extends Component {
    state={
        Email:null,
        Password:null,
        isError:false
    }
    FormValueChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
HandleClick = () => {
this.props.history.push("/");
};
onFormSubmit = (event) => {
    event.preventDefault();
    const {Email, Password} = this.state;
    if (isEmail(Email)) {
        axios.post(`${URL}api/login`,{
            Email,Password
        }).then(res=>{
            if(res.data === 'error'){
                this.setState({isError:true})
            }
            else if(true === isEmail(res.data)){
                // Redirect to Admin Panel
                // this.props.history.push("/");
                alert("OK")
            }
        })
    } else {
          this.setState({isError:true}) 
      }
    }
  
    render() {
        const {isError } = this.state;
        const ErrorStyle = isError ? null : { display: "none" };
        return (
            <div className='LoginDiv'>
                <p className='FormHeader'>Community Login</p>
                <form onSubmit={this.onFormSubmit} className='LoginForm'>
                    <p className='FormLabel'>Email : </p>
                    <Form onChange={this.FormValueChange} minlen='12' maxlen='50' placeholder='email here' type='email' name='Email'/>
                    <p className='FormLabel'>password : </p>
                    <Form onChange={this.FormValueChange} minlen='12' maxlen='50' placeholder='password' type='password' name='Password'/>
                    <Button value='Login'/>
                </form>
                <div style={ErrorStyle}>
          <Modal
            ModalClick={this.HandleClick}
            Text={" Something went wrong "}
          />
        </div>
            </div>
        )
    }
}


export default Login
