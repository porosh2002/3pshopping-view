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
<Input></Input>
<Input></Input>
        </AdminContent>
      </div>
    );
  }
}
