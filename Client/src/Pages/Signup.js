import React, { Component } from "react";
import { Button, Input,Select,AdminContent} from "../Styled";
import { URL } from "../serverUrl";
import {Link} from 'react-router-dom'
import validator from "validator";
import Error from "../Components/Error/Error";
export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      repassword: "",
      passmatch: false,
      errorHappend: false,
      clubname:null
    };
  }
  InputValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if ([name].toString() === "repassword") {
      this.setState({ passmatch: false });
    }
  };
  closeErrorDialog = () => {
    this.setState({ errorHappend: false });
  };
  SubmitValue = (event) => {
    const { name, email, password, repassword,clubname } = this.state;
    event.preventDefault();
    try {
      if (name.length > 1 && validator.isEmail(email) === true) {
        if (password !== repassword) {
          this.setState({ passmatch: true });
        } else if (password === repassword) {
          this.setState({ passmatch: false });
          fetch(`${URL}api/register`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password,
              clubname
            }),
          }).then((res) => {
            if (res.status === 200) {
              alert('Account Created')
            } else {
              this.setState({ errorHappend: true });
            }
          });
        }
      }
    } catch {
      this.setState({ errorHappend: true });
    }
  };
  selectChange=(e)=>{
    this.setState({clubname:e.target.value})
  }
  render() {
    const { passmatch, errorHappend } = this.state;
    const stylePassMatch = passmatch
      ? { border: "1px solid red", backgroundColor: " #fed8b1" }
      : null;
    const styleError = errorHappend ? null : { display: "none" };
    const stylePassMessage = passmatch ? null : { display: "none" };
    return (
      <div>
        <div style={styleError}>
          <Error
            onClick={this.closeErrorDialog}
            message0={" something went "}
            message1={" wrong "}
          />
        </div>
        <p className="title title-b">Signup</p>
        <form onSubmit={this.SubmitValue}>
          <Input
            autoFocus
            onChange={this.InputValue}
            required
            name={"name"}
            placeholder={"Enter Your name"}
            type="text"
            maxLength="16"
          />
          <Input
            onChange={this.InputValue}
            required
            name={"email"}
            placeholder={"Enter Your valid email"}
            type="email"
            maxLength="32"
          />
          <Input
            onChange={this.InputValue}
            required
            name={"password"}
            placeholder={"Enter new Password"}
            type="password"
            minLength="6"
            maxLength="32"
          />
          <Input
            style={stylePassMatch}
            onChange={this.InputValue}
            required
            name={"repassword"}
            placeholder={"re-type your new password"}
            type="password"
            minLength="6"
            maxLength="32"
          />
          


<AdminContent>
<Select onChange={this.selectChange} name="cars" id="cars">
  <option value=" " select='true'>Select Club</option>
  <option value="HDBetClub">HDBetClub</option>
  <option value="Update Club">Update Club</option>
  <option value="Online club">Online club</option>
  <option value="Fast club">Fast club</option>
  <option value="Rainbow">Rainbow</option>
  <option value="Sky Touch">Sky Touch</option>
  <option value="MR15">MR15</option>
  <option value="Dubai club">Dubai club</option>
  <option value="Star club">Star club</option>
  <option value="Sports club">Sports club</option>
  <option value="Golden club">Golden club</option>
  <option value="T20 club">T20 club</option>
  <option value="Dream Club">Dream Club</option>
  <option value="BetGuru club">BetGuru club</option>
  <option value="Smart club">Smart club</option>
  <option value="King club">King club</option>
  <option value="Active club">Active club</option>
  <option value="Tiger club">Tiger club</option>
  <option value="Super club">Super club</option>
</Select>
</AdminContent>





          <div style={stylePassMessage}>
            <div
              className="color-oranged"
              style={{
                width: "300px",
                display: "block",
                margin: "0px auto",
                fontSize: "14px",
              }}
            >
              <p>Password doesn't match</p>
            </div>
          </div>
          <Button type="submit" value="Signup" />
        </form>
          <div style={{textAlign:"center"}}>
          <Link to='/login'>Already have a Account ?</Link>
          </div>
      </div>
    );
  }
}
