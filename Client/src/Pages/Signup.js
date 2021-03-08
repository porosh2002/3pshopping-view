import React, { Component } from "react";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";
import Form from "../Components/Form/Form";
import PassGen from "../Components/PassGen/PassGen";
import "../Styles/Login.css";
import axios from 'axios'
import {URL} from '../serverUrl'
import isEmail from "validator/lib/isEmail";
import Modal from "../Components/Modal/Modal";
class Login extends Component {
  state = {
    ModalOpen:true,
    SuccesssMessage: false,
    name: null,
    email: null,
    password: null,
    confirmPass: null,
    PassGen: null,
    isError:false
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPass } = this.state;
    if (isEmail(email)) {
      if (password === confirmPass) {
        axios.post(`${URL}api/register`,{
            name, email, password
        }).then(res=>{
            if(res.data === 'noerror'){
                this.setState({SuccesssMessage:true})
            }
            else if(res.data === 'error'){
                this.setState({isError:true})
            }
        })
      } else {
        alert("Password and Confirm Password Doesn't match " + name);
      }
    }
  };
  componentDidMount() {
    this.setState({ PassGen: PassGen() });
  }

  PasswordGenerate = () => {
    this.setState({ PassGen: PassGen() });
  };
  CloseModal = () => {
    this.setState({ ModalOpen: false });
  };
  HandleClick = () => {
    this.props.history.push("/");
  };
  FormValueChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { ModalOpen, SuccesssMessage,isError } = this.state;
    const ModalStyle = ModalOpen ? null : { display: "none" };
    const SuccessStyle = SuccesssMessage ? null : { display: "none" };
    const ErrorStyle = isError ? null : { display: "none" };
    return (
      <div className="LoginDiv">
        <p className="FormHeader">Community Signup</p>
        <form onSubmit={this.onFormSubmit} className="LoginForm">
          <p className="FormLabel">Full Name : </p>
          <Form
            onChange={this.FormValueChange}
            minLength="2"
            maxLength="30"
            placeholder="full name here"
            type="text"
            name="name"
          />
          <p className="FormLabel">Email : </p>
          <Form
            onChange={this.FormValueChange}
            minLength="12"
            maxLength="50"
            placeholder="valid email here"
            type="email"
            name="email"
          />
          <p className="FormLabel">new password : </p>
          <Form
            onChange={this.FormValueChange}
            minLength="12"
            maxLength="50"
            placeholder="new password"
            type="password"
            name="password"
          />
          <p className="FormLabel">confirm new password : </p>
          <Form
            onChange={this.FormValueChange}
            minLength="12"
            maxLength="50"
            placeholder="confirm new password"
            type="password"
            name="confirmPass"
          />
          <div className="checkBoxSignup">
            <input required type="checkbox" />
            <p>
              By clicking Register, you agree to our{" "}
              <Link to="#">Terms and Conditions</Link>
            </p>
          </div>
          <p className="PassGenText">
            you may try this as a password{" "}
            <span style={{ color: "orangered" }}>{this.state.PassGen}</span>
          </p>
          <p className="GenPassBTN" onClick={this.PasswordGenerate}>
            Generate new Password
          </p>
          <Button value="Apply For Community Account" />
          <Link
            style={{ color: "#343a40", fontWeight: "600", fontSize: "18px" }}
            to="/community/login"
          >
            Login
          </Link>
        </form>
        <div style={SuccessStyle}>
          <Modal
            ModalClick={this.HandleClick}
            Text={"We will Contact you via Email as soon as possible"}
          />
        </div>
        <div style={ErrorStyle}>
          <Modal
            ModalClick={this.HandleClick}
            Text={" Something went wrong "}
          />
        </div>
        <div style={ModalStyle}>
          <Modal
            ModalClick={this.CloseModal}
            Text={"Only Create Account If you want to join as an Admin"}
          />
        </div>
      </div>
    );
  }
}

export default Login;
