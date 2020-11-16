import React, { Component } from "react";
import { Input,AdminMenu, FooterLinkStyle, FooterLink,AdminContent,AdminCTitle,Select } from "../Styled";
import {
  VscAdd,
  VscAccount,
  VscCheck,
  VscCreditCard,
  VscLoading,
} from "react-icons/vsc";
export default class Admin extends Component {
constructor(){
  super()
  this.state={
    matchType:'',
  }
}
  render() {
    return (
      <div>
        <AdminMenu>
          <FooterLink>
            <FooterLinkStyle to=''>
              Add Match{" "}
              <div>
                <VscAdd />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to=''>
              Add Match Result
              <div>
                <VscLoading />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to=''>
              User's Details
              <div>
                <VscAccount />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to=''>
              Confirm Payment
              <div>
                <VscCheck />
              </div>
            </FooterLinkStyle>
          </FooterLink>
          <FooterLink>
            <FooterLinkStyle to=''>
              Make Payment
              <div>
                <VscCreditCard />
              </div>
            </FooterLinkStyle>
          </FooterLink>
        </AdminMenu>
        <AdminContent>
          <AdminCTitle>Add Match</AdminCTitle>
<Select name="cars" id="cars">
  <option value="null">Select Match</option>
  <option value="cricket">Cricket</option>
  <option value="football">Football</option>
  <option value="tabletennis">Table Tennis</option>
</Select>
        </AdminContent>
        <AdminContent>
        <AdminCTitle>Team A</AdminCTitle>
<Input></Input>
        <AdminCTitle>Team B</AdminCTitle>
<Input></Input>
        <AdminCTitle><span style={{color:"orangered"}}>1st Half Time Result</span></AdminCTitle>
        <AdminCTitle>Team A (Rate)</AdminCTitle>
<Input></Input>
        <AdminCTitle>Team B (Rate)</AdminCTitle>
<Input></Input>
        <AdminCTitle>Draw (Rate)</AdminCTitle>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
<Input></Input>
        </AdminContent>
      </div>
    );
  }
}
// required
// name={"password"}
// placeholder={"Enter your Password"}
// type="password"
// minLength="6"
// maxLength="32"